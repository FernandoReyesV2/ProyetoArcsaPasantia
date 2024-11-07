// src/routes/accionRoutes.ts
import { Router } from 'express';
import { AccionPersonalController } from '../controllers/accionController';

const router = Router();
const accionPersonalController = new AccionPersonalController();

// Rutas CRUD
router.post('/', (req, res) => accionPersonalController.create(req, res));
router.get('/', (req, res) => accionPersonalController.findAll(req, res));
router.put('/:id', (req, res) => accionPersonalController.update(req, res));
router.delete('/:id', (req, res) => accionPersonalController.remove(req, res));

export default router;
