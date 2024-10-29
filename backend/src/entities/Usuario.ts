import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Usuario {
  @ObjectIdColumn()
  ID_Usuario!: ObjectId;

  @Column()
  Usuario!: string;

  @Column()
  Contraseña!: string;
}
