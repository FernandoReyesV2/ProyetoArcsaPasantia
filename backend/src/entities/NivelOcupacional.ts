import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Nivel_Ocupacional {
  @ObjectIdColumn()
  ID_NiveL_Ocupacional!: ObjectId;

  @Column()
  Codigo_Ocu!: number;

  @Column()
  Nivel!: string;
}
