import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Puesto_Adicional {
  @ObjectIdColumn()
  ID_Puesto_Adicional!: ObjectId;

  @Column()
  Codigo_Adicional!: number;

  @Column()
  Estado!: string;

  @Column()
  Puesto_Adic!: string;
}
