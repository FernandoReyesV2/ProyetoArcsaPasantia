import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Ciudad {
  @ObjectIdColumn()
  ID_Ciudad!: ObjectId;

  @Column()
  Canton!: string;

  @Column()
  Codigo_Canton!: number;

  @Column()
  Provincia!: string;
}
