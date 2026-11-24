import pool from '../config/database';

export interface Curso {
  id?: number;
  nombre_curso: string;
  profesor: string;
  creditos: number;
  horario: string;
}

export class CursosModel {
  static async obtenerTodos(): Promise<Curso[]> {
    const query = `
      SELECT id, nombre_curso, profesor, creditos, horario
      FROM cursos
      ORDER BY id ASC
    `;
    const resultado = await pool.query(query);
    return resultado.rows;
  }
}