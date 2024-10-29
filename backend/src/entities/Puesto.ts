import { Entity, ObjectIdColumn, Column, ObjectId, ManyToOne, OneToOne } from 'typeorm';
import { Regimen_Laboral } from './RegimenLaboral';
import { Nivel_Ocupacional } from './NivelOcupacional';
import { Modalidad_Laboral } from './ModalidadLaboral';
import { Unidad_Organica } from './UnidadOrganica';
import { Escala_Ocupacional } from './EscalaOcupacional';
import { Puesto_Adicional } from './PuestoAdicional';

@Entity()
export class Puesto {
  @ObjectIdColumn()
  ID_Puesto!: ObjectId;

  @Column()
  Estado!: string;

  @Column()
  Grado!: number;

  @Column()
  Estado_servidor!: string;

  @Column()
  Dnminacion_Puesto!: string;

  @OneToOne(() => Regimen_Laboral, regimen => regimen.ID_Regimen_Laboral, { eager: true})
  Regimen!: Regimen_Laboral;

  @OneToOne(() => Nivel_Ocupacional, nivel => nivel.ID_NiveL_Ocupacional, { eager: true})
  Nivel!: Nivel_Ocupacional;

  @OneToOne(() => Modalidad_Laboral, modalidad => modalidad.ID_Modalidad_Laboral, { eager: true})
  Modalida!: Modalidad_Laboral;

  @OneToOne(() => Unidad_Organica, unidad => unidad.ID_Unidad_Organica, { eager: true})
  Unidad!: Unidad_Organica;

  @OneToOne(() => Escala_Ocupacional, escala => escala.ID_Escala_Ocupacional, { eager: true})
  Escala!: Escala_Ocupacional;

  @OneToOne(() => Puesto_Adicional, puesto_ad => puesto_ad.ID_Puesto_Adicional, { eager: true})
  Puesto_Ad!: Puesto_Adicional;
}
