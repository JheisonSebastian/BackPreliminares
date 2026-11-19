import { Router } from 'express';
import { CuentaController } from '../controllers/cuenta.controller';

const router = Router();

// Ruta final: /api/v1/cuenta/login
router.post('/login', CuentaController.login);

export default router;