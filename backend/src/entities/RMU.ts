import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class RMU {
  @ObjectIdColumn()
  ID_RMU!: ObjectId;

  @Column()
  RMU_Escala!: number;

  @Column()
  RMU_Puesto!: number;

  @Column()
  RMU_Sobre!: string;
}
