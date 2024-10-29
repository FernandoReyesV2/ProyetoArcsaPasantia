import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Identificacion {
  @ObjectIdColumn()
  ID_Identificacion!: ObjectId;

  @Column()
  Tipo_ID!: string;

  @Column()
  Numero_ID!: number;
}
