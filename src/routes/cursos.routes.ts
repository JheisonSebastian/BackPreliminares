import { Router } from 'express';
import { CursosController } from '../controllers/cursos.controller';

const router = Router();

// Ruta final: /api/v1/cursos
router.get('/', CursosController.listar);

export default router;