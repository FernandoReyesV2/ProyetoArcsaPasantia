import { Router } from 'express';
import {
    getAportes, createAportes,
    getCiudad, createCiudad,
    getEscalaOcupacional, createEscalaOcupacional,
    getIdentificacion, createIdentificacion,
    getModalidadLaboral, createModalidadLaboral,
    getNivelOcupacional, createNivelOcupacional,
    getPersonal, createPersonal,
    getPresupuesto, createPresupuesto,
    getPuesto, createPuesto,
    getPuestoAdicional, createPuestoAdicional,
    getRegimenLaboral, createRegimenLaboral,
    getRMU, createRMU,
    getSucursal, createSucursal,
    getUnidadOrganica, createUnidadOrganica,
} from "../controllers/entityController";

const router = Router();

// Rutas para Aportes
router.get("/aportes", getAportes);
router.post("/aportes", createAportes);

// Rutas para Ciudad
router.get("/ciudad", getCiudad);
router.post("/ciudad", createCiudad);

// Rutas para Escala Ocupacional
router.get("/escala-ocupacional", getEscalaOcupacional);
router.post("/escala-ocupacional", createEscalaOcupacional);

// Rutas para Identificación
router.get("/identificacion", getIdentificacion);
router.post("/identificacion", createIdentificacion);

// Rutas para Modalidad Laboral
router.get("/modalidad-laboral", getModalidadLaboral);
router.post("/modalidad-laboral", createModalidadLaboral);

// Rutas para Nivel Ocupacional
router.get("/nivel-ocupacional", getNivelOcupacional);
router.post("/nivel-ocupacional", createNivelOcupacional);

// Rutas para Personal
router.get("/personal", getPersonal);
router.post("/personal", createPersonal);

// Rutas para Presupuesto
router.get("/presupuesto", getPresupuesto);
router.post("/presupuesto", createPresupuesto);

// Rutas para Puesto
router.get("/puesto", getPuesto);
router.post("/puesto", createPuesto);

// Rutas para Puesto Adicional
router.get("/puesto-adicional", getPuestoAdicional);
router.post("/puesto-adicional", createPuestoAdicional);

// Rutas para Régimen Laboral
router.get("/regimen-laboral", getRegimenLaboral);
router.post("/regimen-laboral", createRegimenLaboral);

// Rutas para RMU
router.get("/rmu", getRMU);
router.post("/rmu", createRMU);

// Rutas para Sucursal
router.get("/sucursal", getSucursal);
router.post("/sucursal", createSucursal);

// Rutas para Unidad Orgánica
router.get("/unidad-organica", getUnidadOrganica);
router.post("/unidad-organica", createUnidadOrganica);

export default router;
