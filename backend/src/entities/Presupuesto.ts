import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Presupuesto {
  @ObjectIdColumn()
  ID_Presupuesto!: ObjectId;

  @Column()
  Codigo_Enlace!: number;

  @Column()
  Estructura_Pro!: number;

}
