import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

// ENTIDADES
import { Aportes } from './entities/Aportes';
import { Ciudad } from './entities/Ciudad';
import { Escala_Ocupacional } from './entities/EscalaOcupacional';
import { Identificacion } from './entities/Identificacion';
import { Modalidad_Laboral } from './entities/ModalidadLaboral';
import { Nivel_Ocupacional } from './entities/NivelOcupacional';
import { Personal } from './entities/Personal';
import { Presupuesto } from './entities/Presupuesto';
import { Puesto } from './entities/Puesto';
import { Puesto_Adicional } from './entities/PuestoAdicional';
import { Regimen_Laboral } from './entities/RegimenLaboral';
import { RMU } from './entities/RMU';
import { Sucursal } from './entities/Sucursal';
import { Unidad_Organica } from './entities/UnidadOrganica';
import { Tipo } from './entities/Tipo';
import { Usuario } from './entities/Usuario';

// RUTAS
import entityRoutes from './routes/entityRoutes';
import tipoRoutes from './routes/tipoRoutes'
import usuarioRoutes from './routes/usuarioRoutes'
dotenv.config();

console.log('Database URL:', process.env.DB_URL);
console.log('Database Name:', process.env.DB_NAME);

export const dataSource = new DataSource({
  type: 'mongodb',
  url: process.env.DB_URL,
  database: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [Aportes, Ciudad, Escala_Ocupacional, Identificacion, Modalidad_Laboral, Nivel_Ocupacional, Personal, Presupuesto, Puesto, Puesto_Adicional, Regimen_Laboral, RMU, Sucursal, Tipo, Unidad_Organica, Usuario],
  synchronize: true,
  logging: false
});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', entityRoutes);
app.use('/api/tipos', tipoRoutes);
app.use('/api/usuario', usuarioRoutes)


// Inicializar la base de datos y luego arrancar el servidor
dataSource.initialize().then(async () => {
  console.log('Database connected');

  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });

}).catch(error => {
  console.log('Error connecting to database', error);
});
