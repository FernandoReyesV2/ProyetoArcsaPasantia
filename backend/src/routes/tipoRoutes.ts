import { Router } from 'express';
import { TipoController } from '../controllers/tipoController';

const router = Router();
const tipoController = new TipoController();

router.get('/', tipoController.findAll);
router.post('/', tipoController.create);
router.put('/:id', tipoController.update);
router.delete('/:id', tipoController.remove);

export default router;
