export interface Perrito {
  id: number;
  nombre: string;
  edad: number;
  raza: string;
  color: string;
}

export const PERRITOS_DATA: Perrito[] = [
  { id: 1, nombre: 'Max', edad: 3, raza: 'Golden Retriever', color: 'Dorado' },
  { id: 2, nombre: 'Luna', edad: 2, raza: 'Pug', color: 'Negro' },
  { id: 3, nombre: 'Rocky', edad: 5, raza: 'Pastor Alemán', color: 'Negro y Fuego' },
  { id: 4, nombre: 'Bella', edad: 1, raza: 'Beagle', color: 'Tricolor' },
  { id: 5, nombre: 'Toby', edad: 4, raza: 'Caniche', color: 'Blanco' }
];