import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class Personal {
  @ObjectIdColumn()
  ID_Personal!: ObjectId;

  @Column()
  DocumentoIdentificacion!: string;

  @Column()
  NumeroIdentificacion!: number;

  @Column()
  DesdeFecha!: string;

  @Column()
  HastaFecha!: string;

  @Column()
  UnidadAdministrativa!: string;

  @Column()
  LugarTrabajo!: string;

  @Column()
  DenominacionPuesto!: string;

  @Column()
  GrupoOcupacional!: string;

  @Column()
  Grado!: string;

  @Column()
  RemuneracionMensual!: string;

  @Column()
  PartidaIndividual!: string;
}
