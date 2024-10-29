import React, { useState, useEffect} from 'react';
import { getPersonal } from '../services/PersonalService';
import logo from '../images/Logo.png'

function AccionPersonal() {
    const [acciones, setAcciones] = useState([]);


    useEffect(() => {
        const fetchAcciones = async () => {
            try{
                const data = await getPersonal();
                setAcciones(data);
            } catch (error) {
                console.errror( "Error fetching acciones", error);
            }
        };
    
        fetchAcciones();
    }, []);
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='text-xs w-[190mm] h-[275mm]'>
            <section className='border-2 border-black'>
                <div className='grid grid-cols-7'>
                    <div className='col-span-4 border-b-2 border-black flex justify-center items-center'> <img className='h-20' src={logo} alt='Logo Arcsa'/> </div>
                    <div className='col-span-3 border-l-2 border-b-2 border-black'>
                        <p className='font-bold border-b-2 border-black text-center text-xl'>ACCIÓN DE PERSONAL</p>
                        <div className='grid grid-cols-2'>
                            <p className='px-2 border-black border-r-2 border-b-2 font-bold text-center' >No. </p>
                            <p className='border-black border-b-2 font-bold text-center'></p>
                        </div>
                        <p className='px-2 text-center font-bold border-black border-b-2 text-tiny' >FECHA DE ELABORACIÓN</p>
                        <p className='text-center text-tiny'></p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='text-center font-bold border-black border-r-2'>
                        <label className='font-bold text-xl block leading-3 mt-1'></label>
                        <label className='text-tiny'>APELLIDOS</label>
                    </div>
                    <div className='text-center font-bold'>
                        <label className='text-xl block leading-3 mt-1'></label>
                        <label className='text-tiny'>NOMBRES</label>
                    </div>
                </div>
            </section>
            <section className='border-b-2 border-r-2 border-l-2 border-black text-xs'>
                <div className='grid grid-cols-4 text-center font-bold text-tiny'>
                    <div className='border-black border-r-2 flex flex-col justify-center h-full'>
                        <p className='border-black border-b-2 h-9 flex items-center justify-center'>DOCUMENTO DE IDENTIFICACIÓN</p>
                        <p className='font-normal'></p>
                    </div>
                    <div className='text-center font-bold border-black border-r-2 flex flex-col justify-center h-full'>
                        <p className='border-black border-b-2 h-9 flex items-center justify-center'>NRO. DE IDENTIFICACIÓN</p>
                        <p className='font-normal'></p>
                    </div>
                    <div className='col-span-2 text-tiny'>
                        <p className='pl-5 text-center border-black border-b-2'>RIGE: </p>
                        <div className='grid grid-cols-2 border-black border-b-2'>
                            <p className='border-black border-r-2'>DESDE (dd-mm-aa)</p>
                            <p>HASTA (dd-mm-aa)</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p className='border-black border-r-2'></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Checkbox text-tiny border-black border-b-2 border-x-2'>
                {/* PRIMERA SECCIÓN DE LOS CHECKBOX */}
                <p className='border-black border-b-2 pl-4'><strong>Escoja un opción</strong> (según lo estipulado en el artículo 21 del Reglamento General a la Ley Orgánica del Servicio Público)</p>
                <div className='grid grid-cols-4'>
                    <div className=''>
                        <ol className="pl-2">
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="ingreso">INGRESO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="reingreso">REINGRESO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="restitucion">RESTITUCIÓN</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="reintegro">REINTEGRO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="ascenso">ASCENSO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="traslado">TRASLADO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                        </ol>
                    </div>
                    {/* SEGUNDA SECCIÓN DE LOS CHECKBOX */}
                    <div className='px-2'>
                        <ol className="">
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="traspaso">TRASPASPO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="cambio-administrativo">CAMBIO ADMINISTRATIVO</label>
                                <input className='w-3 h-3' type="checkbox" ></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="intercambio-voluntario">INTERCAMBIO VOLUNTARIO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="licencia">LICENCIA</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="comision-servicios">COMISIÓN DE SERVICIOS</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="sanciones">SANCIONES</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                        </ol>
                    </div>
                    {/* TERCERA SECCIÓN DE LOS CHECKBOX */}
                    <div className='px-2'>
                        <ol className="">
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="incremento-rmu">INCREMENTO RMU</label>
                                <input className='w-3 h-3' type="checkbox" ></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="subrogacion">SUBROGACIÓN</label>
                                <input className='w-3 h-3' type="checkbox" ></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="encargo">ENCARGO</label>
                                <input className='w-3 h-3' type="checkbox" ></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="cesacion">CESACIÓN DE FUNCIONES</label>
                                <input className='w-3 h-3' type="checkbox" ></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="destitucion">DESTITUCIÓN</label>
                                <input className='w-3 h-3' type="checkbox" ></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="vacaciones">VACACIONES</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                        </ol>
                    </div>
                    {/* CUARTA SECCIÓN DE LOS CHECKBOX */}
                    <div>
                        <ol className="px-2">
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="revision-clasi-puesto">REVISIÓN CLASI. PUESTO</label>
                                <input className='w-3 h-3' type="checkbox"></input>
                            </li>
                            <li className='flex items-center'>
                                <label className='flex-1' htmlFor="otro">OTRO (DETALLAR)</label>
                                <input className='w-3 h-3' type="checkbox" id='otro'></input>
                            </li>
                            <li>
                                <p>_________________________________</p>
                                <p>_________________________________</p>
                                <p>_________________________________</p>
                            </li>
                        </ol>
                    </div>
                </div>
                <p className='pl-2'>EN CASO DE REQUERIR ESPECIFICACIÓN DE LO SELECCIONADO___________________________________________________________________________________________________</p>

                <div className='grid grid-cols-4 pb-2 pl-2'>
                    <label className='col-span-2'><strong>* PRESENTÓ LA DECLARACIÓN JURADA</strong> (número 2 del art. 3 RLOSEP)</label>
                    <div className='flex items-center'>
                        <label className='' id='si-aplica'>SI</label>
                        <input className='w-4 h-4 ml-2' type='checkbox' id='si-aplica'></input>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='no-aplica'> NO APLICA</label>
                        <input className='w-4 h-4 ml-2' type='checkbox' id='no-aplica'></input>
                    </div>
                    
                </div>
                
            </section>
            <section className='border-b-2 border-r-2 border-l-2 border-black'>
                <p className='text-xs border-black border-b-2 px-2'> <strong>MOTIVACIÓN: </strong>(adjuntar anexo si lo posee)</p>
                <div className='px-2 py-1 min-h-56'>
                    <p className='text-stiny text-justify'>hola este es un texto de ejemplo. Creo que es suficiente, pero vamos a probar con un dialogo más largo para ver como se ajusta. Necesito más texto, empecemos con una canción. Traigo seis millones de maneras de rimar, solo una de vivir, soy bboy hasta la muerte es lo que quiero decir, no me compares a un rapero que rima por rimar, Javier Ibarra es único, un icono del puto rap. He rimado más de mil palabras y aún quiero más, sobre el ritmo </p>
                </div>
            </section>
            <section>
                <div className='grid grid-cols-2 font-bold border-black'>
                    <p className='text-center text-xs border-black border-b-2 border-x-2'>SITUACIÓN ACTUAL</p>
                    <p className='text-center text-xs border-black border-b-2 border-r-2'>SITUACIÓN PROPUESTA</p>
                    <div className='grid grid-cols1 text-tiny border-black border-b-2 border-l-2 border-r-2 leading-3'>
                        <label className='bg-neutral-200 px-2'>PROCESO INSTITUCIONAL:</label>
                        <label className='font-normal text-center bg-white'>1</label>
                        <label className='bg-neutral-200 px-2'>NIVEL DE GESTIÓN:</label>
                        <label className='font-normal text-center bg-white'>2</label>
                        <label className='bg-neutral-200 px-2'>UNIDAD ADMNISTRATIVA:</label>
                        <label className='font-normal text-center bg-white'>3</label>
                        <label className='bg-neutral-200 px-2'>LUGAR DE TRABAJO:</label>
                        <label className='font-normal text-center bg-white'>4</label>
                        <label className='bg-neutral-200 px-2'>DENOMINACIÓN DEL PUESTO:</label>
                        <label className='font-normal text-center bg-white'>5</label>
                        <label className='bg-neutral-200 px-2'>GRUPO OCUPACIONAL:</label>
                        <label className='font-normal text-center bg-white'>6</label>
                        <label className='bg-neutral-200 px-2'>GRADO:</label>
                        <label className='font-normal text-center bg-white'>7</label>
                        <label className='bg-neutral-200 px-2'>REMUNERACIÓN MENSUAL:</label>
                        <label className='font-normal text-center bg-white'>8</label>
                        <label className='bg-neutral-200 px-2'>PARTIDA INDIVIDUAL</label>
                        <label className='font-normal text-center bg-white'>9</label>
                    </div>
                    <div className='grid grid-cols1 text-tiny border-black border-b-2 border-r-2 leading-3'>
                        <label className='bg-neutral-200 px-2'>PROCESO INSTITUCIONAL:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>NIVEL DE GESTIÓN:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>UNIDAD ADMNISTRATIVA:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>LUGAR DE TRABAJO:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>DENOMINACIÓN DEL PUESTO:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>GRUPO OCUPACIONAL:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>GRADO:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>REMUNERACIÓN MENSUAL:</label>
                        <label className='font-normal text-center bg-white'></label>
                        <label className='bg-neutral-200 px-2'>PARTIDA INDIVIDUAL</label>
                        <label className='font-normal text-center bg-white'></label>
                    </div>
                </div>
            </section>
            <section className='border-black border-x-2 border-b-2'>
                <p className='text-xs border-black border-b-2 pl-2 font-bold'>POSESIÓN DEL PUESTO</p>
                <div className='grid grid-cols-2 text-tiny'>
                    <div className='pt-1 pl-2'>
                        <label className='block'>YO, ________________________________________________________________________</label>
                        <label>JURO LEALTAD AL ESTADO ECUATORIANO</label>
                        <div className='grid grid-cols-2 font-bold text-center'>
                            <label>LUGAR:________________________</label>
                            <label>FECHA:________________________</label>
                        </div>

                    </div>
                    <div className='pt-1 pl-2'>
                       <label className='block'>CON NRO. DE DOCUMENTO DE IDENTIFICACIÓN: ____________________________</label>
                    </div>
                    <div className='pl-2'>
                        <label className='font-bold'>**(EN CASO DE GANADOR DE CONCURSO DE MÉRITOS Y OPOSICIÓN)</label>
                    </div>
                    <div></div>
                    <div className='grid grid-cols-2 font-bold text-center'>
                            <label>_________________________________</label>
                            <label>_________________________________</label>
                            <label>NRO.ACTA FINAL</label>
                            <label>FECHA</label>
                    </div>
                    <div className='text-center font-bold'>
                        <label>FIRMA:___________________________________________________________</label><br></br>
                        <label>SERVIDOR PÚBLICO</label>
                    </div>
                </div>
            </section>
            <section className='text-center border-black border-x-2 border-b-2'>
                <label className='font-bold border-black border-b-2 block'>RESPONSABLES DE APROBACIÓN</label>
                <div className='grid grid-cols-2'>
                    <div className='grid grid-cols-1 text-left border-black border-r-2'>
                        <label className='mb-10 w-full text-center font-bold border-black border-b-2'>DIRECTOR (A) O RESPONSABLE DE TALENTO HUMANO</label>
                        <label className='flex items-center pl-2'>
                            <strong>FIRMA:</strong>
                            <span className='flex-1 border-b border-black mx-2 text-center'></span>
                        </label>
                        <label className='flex items-center pl-2'>
                            <strong>NOMBRE:</strong>
                            <span className='flex-1 border-b border-black mx-2 text-center'></span>
                        </label>
                        <label className='flex items-center pl-2'>
                            <strong>PUESTO:</strong>
                            <span className='flex-1 border-b border-black mx-2 text-center'></span>
                        </label>
                    </div>
                    <div className='grid grid-cols-1 text-left'>
                        <label className='mb-10 w-full text-center font-bold border-black border-b-2 block'>AUTORIDAD NOMINADORA O SU DELEGADO</label>
                        <label className='flex items-center pl-2'>
                            <strong>FIRMA:</strong>
                            <span className='flex-1 border-b border-black mx-2 text-center'></span>
                        </label>
                        <label className='flex items-center pl-2'>
                            <strong>NOMBRE:</strong>
                            <span className='flex-1 border-b border-black mx-2 text-center'></span>
                        </label>
                        <label className='flex items-center pl-2'>
                            <strong>PUESTO:</strong>
                            <span className='flex-1 border-b border-black mx-2 text-center'></span>
                        </label>
                    </div>
                </div>
            </section>
            <footer className='grid grid-cols-2'>
                <label className='text-center text-stiny font-bold'>Elaborado por el Ministerio del Trabajo</label>
                <label className='text-center text-stiny'> <strong>Fecha de actualización de formato:</strong> 2024-08-23 / Versión: 01.1 / Página 1 de 2</label>
            </footer>
        </div>
    </div>
  );
}

export default AccionPersonal;