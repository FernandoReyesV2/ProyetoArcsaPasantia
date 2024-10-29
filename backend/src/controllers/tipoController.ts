import { Request, Response } from 'express';
import { dataSource } from '../index';
import { Tipo } from '../entities/Tipo';
import { ObjectId } from 'mongodb';

export class TipoController {
  // Crear un nuevo Tipo
  async create(req: Request, res: Response) {
    const tipoRepository = dataSource.getMongoRepository(Tipo);
    const tipo = tipoRepository.create(req.body);

    try {
      await tipoRepository.save(tipo);
      return res.status(201).json(tipo);
    } catch (error) {
      return res.status(400).json({ error: 'Error al crear el tipo' });
    }
  }

  // Obtener todos los Tipos
  async findAll(req: Request, res: Response) {
    const tipoRepository = dataSource.getMongoRepository(Tipo);
    const tipos = await tipoRepository.find();
    return res.json(tipos);
  }

  // Actualizar un Tipo por ID
  async update(req: Request, res: Response) {
    const tipoRepository = dataSource.getMongoRepository(Tipo);
    const { id } = req.params;

    try {
        // Busca usando el campo _id
        const tipo = await tipoRepository.findOneBy({ _id: new ObjectId(id) });

        if (!tipo) {
            return res.status(404).json({ error: 'Tipo no encontrado' });
        }

        tipoRepository.merge(tipo, req.body);
        const result = await tipoRepository.save(tipo);
        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: 'Error al actualizar el tipo' });
    }
}


  // Eliminar un Tipo por ID
  async remove(req: Request, res: Response) {
    const tipoRepository = dataSource.getMongoRepository(Tipo);
    const { id } = req.params;

    try {
      const result = await tipoRepository.delete({ ID_Tipo: new ObjectId(id) });

      if (result.affected === 0) {
        return res.status(404).json({ error: 'Tipo no encontrado' });
      }

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Error al eliminar el tipo' });
    }
  }
}
