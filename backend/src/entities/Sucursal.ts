import { Entity, ObjectIdColumn, Column, ObjectId, ManyToOne } from 'typeorm';
import {Ciudad} from './Ciudad'

@Entity()
export class Sucursal {
  @ObjectIdColumn()
  ID_Sucursal!: ObjectId;

  @Column()
  Codigo_Sucursal!: number;

  @Column()
  RUC_Patronal!: number;

  @ManyToOne(() => Ciudad, ciudad => ciudad.ID_Ciudad, { eager: true})
  Ciudad!: Ciudad;
}
