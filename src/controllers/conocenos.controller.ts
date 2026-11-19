import type { Request, Response } from 'express';

// Datos de ejemplo temporales para la sección "conócenos"
const conocenosMock = [
  { id: 1, seccion: 'Misión', contenido: 'Ofrecer los mejores productos del mercado.' },
  { id: 2, seccion: 'Visión', contenido: 'Ser líderes en tecnología e innovación.' }
];

export const obtenerConocenos = (req: Request, res: Response) => {
  res.json(conocenosMock);
};

export const obtenerConocenosPorId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = conocenosMock.find(c => c.id === id);
  if (!item) {
    return res.status(404).json({ message: 'Elemento no encontrado' });
  }
  res.json(item);
};

export const crearConocenos = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Creado con éxito' });
};

export const actualizarConocenos = (req: Request, res: Response) => {
  res.json({ message: 'Actualizado con éxito' });
};

export const eliminarConocenos = (req: Request, res: Response) => {
  res.json({ message: 'Eliminado con éxito' });
};