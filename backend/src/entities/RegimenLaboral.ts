import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Regimen_Laboral {
  @ObjectIdColumn()
  ID_Regimen_Laboral!: ObjectId;

  @Column()
  Codigo_La!: number;

  @Column()
  Regimen!: string;
}
