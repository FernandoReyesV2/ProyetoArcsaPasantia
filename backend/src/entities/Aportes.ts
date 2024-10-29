import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Aportes {
  @ObjectIdColumn()
  ID_Aportes!: ObjectId;

  @Column()
  Aporte_Ind!: number;

  @Column()
  Aporte_Patronal!: string;
  
  @Column()
  Fondos_Reserva!: string;
  
  @Column()
  Acum_Decimo_Terc!: boolean;
  
  @Column()
  Acum_Decimo_Cuarto!: boolean;
}
