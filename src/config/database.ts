import { Pool } from 'pg';

// Configura los datos para conectarte a tu base de datos PostgreSQL local o remota
const pool = new Pool({
  user: 'postgres',       // Ejemplo: postgres
  host: 'localhost',
  database: 'postgres', // El nombre de tu base de datos
  password: '456456',         // Tu contraseña de postgres
  port: 5432,                        // Puerto estándar de PostgreSQL
});

export default pool;