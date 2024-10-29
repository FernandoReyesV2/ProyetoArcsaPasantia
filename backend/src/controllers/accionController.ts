// src/controllers/accionController.ts
import { Request, Response } from 'express';
import { dataSource } from '../index';
import { AccionPersonal } from '../entities/AccionPersonal';
import { ObjectId } from 'mongodb';

export class AccionPersonalController {
  // Crear una nueva acción de personal
  async create(req: Request, res: Response) {
    const accionPersonalRepository = dataSource.getMongoRepository(AccionPersonal);
    const accionPersonal = accionPersonalRepository.create(req.body);

    try {
      await accionPersonalRepository.save(accionPersonal);
      return res.status(201).json(accionPersonal);
    } catch (error) {
      return res.status(400).json({ error: 'Error al crear la acción de personal' });
    }
  }

  // Obtener todas las acciones de personal
  async findAll(req: Request, res: Response) {
    const accionPersonalRepository = dataSource.getMongoRepository(AccionPersonal);
    const acciones = await accionPersonalRepository.find();
    return res.json(acciones);
  }

  // Actualizar una acción de personal por ID
  async update(req: Request, res: Response) {
    const accionPersonalRepository = dataSource.getMongoRepository(AccionPersonal);
    const { id } = req.params;

    try {
      // Busca usando el campo ID_AccionPersonal
      const accionPersonal = await accionPersonalRepository.findOneBy({ ID_AccionPersonal: new ObjectId(id) });

      if (!accionPersonal) {
        return res.status(404).json({ error: 'Acción de personal no encontrada' });
      }

      accionPersonalRepository.merge(accionPersonal, req.body);
      const result = await accionPersonalRepository.save(accionPersonal);
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ error: 'Error al actualizar la acción de personal' });
    }
  }

  // Eliminar una acción de personal por ID
  async remove(req: Request, res: Response) {
    const accionPersonalRepository = dataSource.getMongoRepository(AccionPersonal);
    const { id } = req.params;

    try {
      const result = await accionPersonalRepository.delete({ ID_AccionPersonal: new ObjectId(id) });

      if (result.affected === 0) {
        return res.status(404).json({ error: 'Acción de personal no encontrada' });
      }

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Error al eliminar la acción de personal' });
    }
  }
}
