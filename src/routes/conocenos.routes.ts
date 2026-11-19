import { Router } from 'express';
import { 
  obtenerConocenos, 
  obtenerConocenosPorId,
  crearConocenos, 
  actualizarConocenos, 
  eliminarConocenos 
} from '../controllers/conocenos.controller';

const router = Router();

router.get('/', obtenerConocenos);
router.get('/:id', obtenerConocenosPorId);
router.post('/', crearConocenos);
router.put('/:id', actualizarConocenos);
router.delete('/:id', eliminarConocenos);

// ¡Esta línea es obligatoria para que app.ts pueda importarlo!
export default router;