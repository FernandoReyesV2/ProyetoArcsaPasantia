// src/routes/accionRoutes.ts
import { Router } from 'express';
import { AccionPersonalController } from '../controllers/accionController';

const router = Router();

// Rutas CRUD
router.post('/', (req, res) => new AccionPersonalController().create(req, res));
router.get('/', (req, res) => new AccionPersonalController().findAll(req, res));
router.put('/:id', (req, res) => new AccionPersonalController().update(req, res));
router.delete('/:id', (req, res) => new AccionPersonalController().remove(req, res));

export default router;
