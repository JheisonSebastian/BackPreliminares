import type { Request, Response } from 'express';

// Datos hardcodeados temporales en el backend
const comprasMock = [
  { id: 1, producto: 'Laptop HP', cantidad: 1, precio: 750.00, fecha: '2026-10-01' },
  { id: 2, producto: 'Teclado Mecánico', cantidad: 2, precio: 45.50, fecha: '2026-10-05' },
  { id: 3, producto: 'Monitor 24"', cantidad: 1, precio: 180.00, fecha: '2026-10-10' },
  { id: 4, producto: 'Mouse Inalámbrico', cantidad: 3, precio: 25.00, fecha: '2026-10-12' },
];

export const obtenerCompras = (req: Request, res: Response) => {
  res.json(comprasMock);
};

export const obtenerCompraPorId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const compra = comprasMock.find(c => c.id === id);
  if (!compra) {
    return res.status(404).json({ message: 'Compra no encontrada' });
  }
  res.json(compra);
};

export const crearCompra = (req: Request, res: Response) => {
  // Lógica para crear
  res.status(201).json({ message: 'Compra creada con éxito' });
};

export const actualizarCompra = (req: Request, res: Response) => {
  // Lógica para actualizar
  res.json({ message: 'Compra actualizada con éxito' });
};

export const eliminarCompra = (req: Request, res: Response) => {
  // Lógica para eliminar
  res.json({ message: 'Compra eliminada con éxito' });
};