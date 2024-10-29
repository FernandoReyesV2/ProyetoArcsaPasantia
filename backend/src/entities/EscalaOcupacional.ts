import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Escala_Ocupacional {
  @ObjectIdColumn()
  ID_Escala_Ocupacional!: ObjectId;

  @Column()
  Codigo_Escala!: number;

  @Column()
  Escala!: string;
}
