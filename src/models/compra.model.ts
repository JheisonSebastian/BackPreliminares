import {
  clientesDB,
  obtenerSiguienteId
} from '../config/database';
 
export interface Cliente {
  id?: number;
  nombre: string;
  apellido: string;
  edad?: number;
  sexo?: string;
  email: string;
  fecha_creacion?: Date;
}
 
export class ClienteModel {
 
  static async obtenerTodos(): Promise<Cliente[]> {