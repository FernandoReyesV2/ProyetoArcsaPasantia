import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

// ENTIDADES
import { Tipo } from './entities/Tipo';
import { AccionPersonal } from './entities/accionPersonal';

// RUTAS
import tipoRoutes from './routes/tipoRoutes';
import accionRoutes from './routes/accionRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; 

// Configuración de la base de datos
export const dataSource = new DataSource({
  type: 'mongodb',
  url: process.env.DB_URL,
  database: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [Tipo, AccionPersonal],
  synchronize: true, 
  logging: true 
});

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/tipos', tipoRoutes);
app.use('/api/accion', accionRoutes);

// Inicializar la base de datos y luego arrancar el servidor
dataSource.initialize().then(async () => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to database:', error);
});
