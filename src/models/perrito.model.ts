import type { Perrito } from '../config/perritos.config';
import { PERRITOS_DATA } from '../config/perritos.config';

export class PerritoModel {
  static obtenerTodos(): Perrito[] {
    return PERRITOS_DATA;
  }
}