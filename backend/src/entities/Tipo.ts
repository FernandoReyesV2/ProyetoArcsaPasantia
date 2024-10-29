import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Tipo {
  @ObjectIdColumn()
  ID_Tipo!: ObjectId;

  @Column()
  Titulo!: string;

  @Column()
  Tipo!: string;
}
