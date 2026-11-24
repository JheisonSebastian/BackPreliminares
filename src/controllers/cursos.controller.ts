import type { Request, Response, NextFunction } from 'express';
import { CursosModel } from '../models/cursos.model';

export class CursosController {
  static async listar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cursos = await CursosModel.obtenerTodos();
      res.status(200).json(cursos);
    } catch (error) {
      console.error('Error al listar cursos:', error);
      next(error);
    }
  }
}