import type { Request, Response } from 'express';

// Datos de ejemplo temporales para usuarios
const usuariosMock = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, nombre: 'María Gómez', email: 'maria@example.com' }
];

export const obtenerUsuarios = (req: Request, res: Response) => {
  res.json(usuariosMock);
};

export const obtenerUsuarioPorId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const usuario = usuariosMock.find(u => u.id === id);
  if (!usuario) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  res.json(usuario);
};

export const crearUsuario = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Usuario creado con éxito' });
};

export const actualizarUsuario = (req: Request, res: Response) => {
  res.json({ message: 'Usuario actualizado con éxito' });
};

export const eliminarUsuario = (req: Request, res: Response) => {
  res.json({ message: 'Usuario eliminado con éxito' });
};