import type { Request, Response } from 'express';
import { PerritoModel } from '../models/perrito.model';

export const obtenerPerritos = (req: Request, res: Response) => {
  const perritos = PerritoModel.obtenerTodos();
  res.json(perritos);
};