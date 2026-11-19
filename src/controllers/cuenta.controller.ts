import type { Request, Response } from 'express';
import { CuentaModel } from '../models/cuenta.model';

export class CuentaController {
  // Agregamos 'async' y 'Promise<void>' porque consultamos la base de datos
  static async login(req: Request, res: Response): Promise<void> {
    const { cuenta, contrasena } = req.body;

    console.log('Datos de cuenta recibidos en el backend:', { cuenta, contrasena });

    try {
      // Usamos 'await' para esperar la respuesta de PostgreSQL desde el modelo
      const esValido = await CuentaModel.validarCredenciales({ cuenta, contrasena });

      if (esValido) {
        res.status(200).json({
          ok: true,
          mensaje: '¡Autenticación de cuenta exitosa desde PostgreSQL!',
          token: 'fake-jwt-token-123456'
        });
      } else {
        res.status(401).json({
          ok: false,
          mensaje: 'Cuenta o contraseña incorrectos'
        });
      }
    } catch (error) {
      console.error('Error en el controlador al iniciar sesión:', error);
      res.status(500).json({
        ok: false,
        mensaje: 'Error interno en el servidor'
      });
    }
  }
}