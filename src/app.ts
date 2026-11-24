import express from 'express';
import cors from 'cors';
import cursosRoutes from './routes/cursos.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/cursos', cursosRoutes);

app.use(errorHandler);

export default app;