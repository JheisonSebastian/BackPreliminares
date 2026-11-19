import { Router } from 'express';
import { obtenerPerritos } from '../controllers/perrito.controller';

const router = Router();

router.get('/', obtenerPerritos);

export default router;