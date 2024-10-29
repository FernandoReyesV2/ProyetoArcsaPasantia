import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Modalidad_Laboral {
  @ObjectIdColumn()
  ID_Modalidad_Laboral!: ObjectId;

  @Column()
  Codigo_Mod!: number;

  @Column()
  Modalidad!: string;
}
