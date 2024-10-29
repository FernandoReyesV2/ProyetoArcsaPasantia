import { Entity, ObjectIdColumn, Column, ObjectId, OneToOne } from 'typeorm';
import { Identificacion } from './Identificacion';
import { Puesto } from './Puesto'
import { Sucursal } from './Sucursal';
import { RMU } from './RMU';
import { Aportes } from './Aportes';
import { Presupuesto } from './Presupuesto';

@Entity()
export class Personal {
  @ObjectIdColumn()
  ID_Personal!: ObjectId;

  @Column()
  Nombres!: string;
  
  @Column()
  Apellidos!: string;

  @Column()
  Partida_ind!: number;

  @OneToOne(() => Puesto, puesto => puesto.ID_Puesto, { eager: true})
  Puesto!: Puesto;

  @OneToOne(() => Sucursal, sucursal => sucursal.ID_Sucursal, { eager: true})
  Sucursal!: Sucursal;

  @OneToOne(() => Identificacion, identificacion => identificacion.ID_Identificacion, { eager: true})
  Identificacion!: Identificacion;

  @OneToOne(() => RMU, rmu => rmu.ID_RMU, { eager: true})
  RMU!: RMU;

  @OneToOne(() => Presupuesto, presupuesto => presupuesto.ID_Presupuesto, { eager: true})
  Presupuesto!: Presupuesto;

  @OneToOne(() => Aportes, aportes => aportes.ID_Aportes, { eager: true})
  Aportes!: Aportes;
}
