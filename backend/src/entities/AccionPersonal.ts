// src/entities/AccionPersonal.ts
import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class AccionPersonal {
  @ObjectIdColumn()
  ID_AccionPersonal!: ObjectId;

  @Column()
  NumeroIdentificacion!: number;

  @Column()
  FechaElaboracion!: string;

  @Column()
  SituacionActual!: boolean;

  @Column()
  SituacionPropuesta!: boolean;

  @Column()
  Motivo!: string;

  @Column()
  DeclaracionJurada!: boolean;

  @Column()
  ProcesoInstitucional!: string;

  @Column()
  NivelGestion!: string;

  @Column()
  Tipo!: string;
}
