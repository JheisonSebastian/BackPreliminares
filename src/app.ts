//src/app.ts

import express from 'express';
import cors from 'cors';

import compraRoutes from './routes/compra.routes';
import conocenosRoutes from './routes/conocenos.routes';
import usuarioRoutes from './routes/usuario.routes';
import perritoRoutes from './routes/perrito.routes';
import { errorHandler } from './middleware/error.middleware';
import cuentaRoutes from './routes/cuenta.routes'; 

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint de salud del servidor
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK'
  });
});

// Registro de rutas para cada módulo
app.use('/api/v1/compra', compraRoutes);
app.use('/api/v1/conocenos', conocenosRoutes);
app.use('/api/v1/usuario', usuarioRoutes);
app.use('/api/perritos', perritoRoutes);
app.use('/api/v1', cuentaRoutes);

app.use(errorHandler);

export default app;