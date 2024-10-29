import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Unidad_Organica {
  @ObjectIdColumn()
  ID_Unidad_Organica!: ObjectId;

  @Column()
  Codigo_Uni!: number;

  @Column()
  Unidad!: string;
}
