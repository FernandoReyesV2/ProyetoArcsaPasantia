import XLSX from 'xlsx'
import { Request, Response } from 'express';
import { dataSource } from '../index';

// ENTIDADES
// import { Aportes } from '../entities/Aportes';
import { Ciudad } from '../entities/Ciudad';
import { Escala_Ocupacional } from '../entities/EscalaOcupacional';
import { Identificacion } from '../entities/Identificacion';
import { Modalidad_Laboral } from '../entities/ModalidadLaboral';
import { Nivel_Ocupacional } from '../entities/NivelOcupacional';
import { Personal } from '../entities/Personal';
import { Presupuesto } from '../entities/Presupuesto';
import { Puesto } from '../entities/Puesto';
import { Puesto_Adicional } from '../entities/PuestoAdicional';
import { Regimen_Laboral } from '../entities/RegimenLaboral';
import { RMU } from '../entities/RMU';
import { Sucursal } from '../entities/Sucursal';
import { Unidad_Organica } from '../entities/UnidadOrganica';

// APORTES
// export const getAportes = async (req: Request, res: Response) => {
//     try {
//         const repository = dataSource.getRepository(Aportes);
//         const acciones = await repository.find();
//         res.json(acciones);
//     } catch (error) {
//         console.error("Error fetching Aportes", error);
//         res.status(500).json({ message: "Error fetching Aportes"});
//     }
// };

// export const createAportes = async (req: Request, res: Response) => {
//     try {
//         const repository = dataSource.getRepository(Aportes);
//         const nuevaAccion = repository.create(req.body);
//         const result = await repository.save(nuevaAccion);
//         res.status(201).json(result);
//     } catch (error) {
//         console.error("Error creating Aportes", error);
//         res.status(500).json({ message: "Error creating Aportes"});
//     }
// };

// CIUDAD
export const getCiudad = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Ciudad);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Ciudad", error);
        res.status(500).json({ message: "Error fetching Ciudad"});
    }
};

export const createCiudad = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Ciudad);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Ciudad", error);
        res.status(500).json({ message: "Error creating Ciudad"});
    }
};

// ESCALA OCUPACIONAL
export const getEscalaOcupacional = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Escala_Ocupacional);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Escala Ocupacional", error);
        res.status(500).json({ message: "Error fetching Escala Ocupacional"});
    }
};

export const createEscalaOcupacional = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Escala_Ocupacional);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Escala Ocupacional", error);
        res.status(500).json({ message: "Error creating Escala Ocupacional"});
    }
};

// IDENTIFICACION
export const getIdentificacion = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Identificacion);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Identificacion", error);
        res.status(500).json({ message: "Error fetching Identificacion"});
    }
};

export const createIdentificacion = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Identificacion);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Identificacion", error);
        res.status(500).json({ message: "Error creating Identificacion"});
    }
};

// MODALIDAD LABORAL
export const getModalidadLaboral = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Modalidad_Laboral);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Modalidad Laboral", error);
        res.status(500).json({ message: "Error fetching Modalidad Laboral"});
    }
};

export const createModalidadLaboral = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Modalidad_Laboral);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Modalidad Laboral", error);
        res.status(500).json({ message: "Error creating Modalidad Laboral"});
    }
};

// NIVEL OCUPACIONAL
export const getNivelOcupacional = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Nivel_Ocupacional);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Nivel Ocupacional", error);
        res.status(500).json({ message: "Error fetching Nivel Ocupacional"});
    }
};

export const createNivelOcupacional = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Nivel_Ocupacional);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Nivel Ocupacional", error);
        res.status(500).json({ message: "Error creating Nivel Ocupacional"});
    }
};

// PERSONAL
export const getPersonal = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Personal);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Personal", error);
        res.status(500).json({ message: "Error fetching Personal"});
    }
};

export const createPersonal = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Personal);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Personal", error);
        res.status(500).json({ message: "Error creating Personal"});
    }
};

// PRESUPUESTO
export const getPresupuesto = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Presupuesto);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Presupuesto", error);
        res.status(500).json({ message: "Error fetching Presupuesto"});
    }
};

export const createPresupuesto = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Presupuesto);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Presupuesto", error);
        res.status(500).json({ message: "Error creating Presupuesto"});
    }
};

// PUESTO
export const getPuesto = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Puesto);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Puesto", error);
        res.status(500).json({ message: "Error fetching Puesto"});
    }
};

export const createPuesto = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Puesto);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Puesto", error);
        res.status(500).json({ message: "Error creating Puesto"});
    }
};

// PUESTO ADICIONAL
export const getPuestoAdicional = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Puesto_Adicional);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Puesto Adicional", error);
        res.status(500).json({ message: "Error fetching Puesto Adicional"});
    }
};

export const createPuestoAdicional = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Puesto_Adicional);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Puesto Adicional", error);
        res.status(500).json({ message: "Error creating Puesto Adicional"});
    }
};

// REGIMEN LABORAL
export const getRegimenLaboral = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Regimen_Laboral);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Regimen Laboral", error);
        res.status(500).json({ message: "Error fetching Regimen Laboral"});
    }
};

export const createRegimenLaboral = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Regimen_Laboral);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Regimen Laboral", error);
        res.status(500).json({ message: "Error creating Regimen Laboral"});
    }
};

// RMU
export const getRMU = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(RMU);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching RMU", error);
        res.status(500).json({ message: "Error fetching RMU"});
    }
};

export const createRMU = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(RMU);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating RMU", error);
        res.status(500).json({ message: "Error creating RMU"});
    }
};

// SUCURSAL
export const getSucursal = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Sucursal);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Sucursal", error);
        res.status(500).json({ message: "Error fetching Sucursal"});
    }
};

export const createSucursal = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Sucursal);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Sucursal", error);
        res.status(500).json({ message: "Error creating Sucursal"});
    }
};

// UNIDAD ORGANICA
export const getUnidadOrganica = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Unidad_Organica);
        const acciones = await repository.find();
        res.json(acciones);
    } catch (error) {
        console.error("Error fetching Unidad Organica", error);
        res.status(500).json({ message: "Error fetching Unidad Organica"});
    }
};

export const createUnidadOrganica = async (req: Request, res: Response) => {
    try {
        const repository = dataSource.getRepository(Unidad_Organica);
        const nuevaAccion = repository.create(req.body);
        const result = await repository.save(nuevaAccion);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating Unidad Organica", error);
        res.status(500).json({ message: "Error creating Unidad Organica"});
    }
};