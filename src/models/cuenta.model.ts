import pool from '../config/database'; // Ajusta la ruta si tu archivo de conexión está en otra carpeta

export interface CuentaCredenciales {
  cuenta: string;
  contrasena: string;
}

export class CuentaModel {
  
  // Ahora el método es 'async' y realiza una consulta real a la base de datos
  static async validarCredenciales(credenciales: CuentaCredenciales): Promise<boolean> {
    try {
      // Consulta SQL segura usando parámetros ($1, $2) para evitar inyecciones SQL
      const query = 'SELECT * FROM cuentas WHERE cuenta = $1 AND contrasena = $2';
      const values = [credenciales.cuenta, credenciales.contrasena];

      const resultado = await pool.query(query, values);

      // Si encuentra al menos 1 registro en la tabla, significa que la cuenta y contraseña son correctas
      return resultado.rows.length > 0;
    } catch (error) {
      console.error('Error al consultar la base de datos en el modelo:', error);
      return false;
    }
  }
}