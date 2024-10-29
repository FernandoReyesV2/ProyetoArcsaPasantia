import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity()
export class AccionPersonal {
  @ObjectIdColumn()
  ID_AccionPersonal!: ObjectId;

  @Column()
  Numero_Identificacion!: number;

  @Column()
  Fecha_Elaboracion!: Date;

  @Column()
  Situacion_Actual!: boolean;

  @Column()
  Situacion_Propuesta!: boolean;

  @Column()
  Seleccion!: string;
  
  @Column()
  Declaracion!: boolean;
  
  @Column()
  ProcesoInstitucional!: string;
  
  @Column()
  NivelGestion!: string;
  
  @Column()
  Tipo_Descripcion!: string;
}
