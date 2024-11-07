import React, { useState, useEffect }from "react";

function AccionPersonal2(){

    return(
        <div className='flex justify-center items-center min-h-screen'>
            <div className='text-xs w-[190mm] h-[275mm]'>
                <section>

                    <div className="block font-bold text-center p-1 border-black border-2 bg-neutral-200 mb-2">RESPONSABLES DE FIRMAS</div>

                    <div className="grid grid-cols-2 border-black border-2">
                        <div className='text-left'>
                            <label className='mb-14 w-full text-center font-bold p-1 border-black block border-r-2 border-b-2 bg-neutral-200'>ACEPTACION Y/O RECEPCIÓN DEL SERVIDOR PÚBLICO</label>
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
                            <label className='mb-14 w-full text-center font-bold p-1 border-black block border-b-2 bg-neutral-200'>EN CASO DE NEGATIVA DE LA RECEPCIÓN (TESTIGO)</label>
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
                            <div className="grid grid-cols-6 my-2">
                                <label className="ml-2 font-bold col-span-1">RAZÓN:</label>
                                <label className="col-span-5 text-center text-tiny mr-2">En presencia del testigo se deja constancia de que la o el servidor público tiene la negativa de recibir la comunicación de registro de esta acción personal</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mt-2 border-black border-2 text-tiny">
                    {/* ELABORACION */}
                        <div className='text-left border-black border-r-2'>
                            <label className='mb-14 w-full text-center font-bold p-1 border-black block border-b-2 bg-neutral-200'>RESPONSABLE DE ELABORACIÓN</label>
                            <label className='flex items-center pl-2'>
                                <strong>FIRMA:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                            <label className='flex items-center pl-2'>
                                <strong>NOMBRE:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                            <label className='flex items-center pl-2 mb-4'>
                                <strong>PUESTO:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                        </div>
                        {/* REBVISION */}
                        <div className='text-left border-black border-r-2'>
                            <label className='mb-14 w-full text-center font-bold p-1 border-black block border-b-2 bg-neutral-200'>RESPONSABLE DE REVISIÓN</label>
                            <label className='flex items-center pl-2'>
                                <strong>FIRMA:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                            <label className='flex items-center pl-2'>
                                <strong>NOMBRE:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                            <label className='flex items-center pl-2 mb-4'>
                                <strong>PUESTO:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                        </div>
                        {/* REGISTRO Y CONTROL */}
                        <div className='text-left'>
                            <label className='mb-14 w-full text-center font-bold p-1 border-black block border-b-2 bg-neutral-200'>RESPONSABLE DE REGISTRO Y CONTROL</label>
                            <label className='flex items-center pl-2'>
                                <strong>FIRMA:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                            <label className='flex items-center pl-2'>
                                <strong>NOMBRE:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                            <label className='flex items-center pl-2 mb-4'>
                                <strong>PUESTO:</strong>
                                <span className='flex-1 border-b border-black mx-2 text-center'></span>
                            </label>
                        </div>
                    </div>
                </section>
                <section className="mt-20">
                    <label className="block font-bold text-lg">--------------------------------------------------------------------------------------------------</label>
                    <label className="text-lg font-bold">** USO EXCLUSIVO PARA TALENTO HUMANO</label>
                    <label className="block font-bold text-lg">--------------------------------------------------------------------------------------------------</label>

                    <div className="border-black border-2">
                        <label className="text-tiny block border-black border-b-2 bg-neutral-200 p-2"><strong>REGISTRO DE NOTIFICACION AL SERVIDOR PÚBLICO DE LA ACCIÓN DE PERSONAL</strong> (primero inciso del art. 22 RGLOSEP, art 101 CDA, art.66 y 126 ERJAFE)</label>
                        <div className="pt-7 pl-16 flex">
                            <label className="font-bold" htmlFor="comunicacion_elec">COMUNICACIÓN ELECTRÓNICA: </label>
                            <input className="ml-2 items-center" type="checkbox" id="comunicacion_elec"></input>
                        </div> 
                        <div className="grid grid-cols-2 font-bold p-5">
                            <div className="text-center">
                                <label className="block pb-6">FECHA:_________________________________</label>
                                <label className="block">**MEDIO:_______________________________</label>
                                <label className="pl-14 block">_______________________________</label>
                                <label className="pl-14 block">_______________________________</label>

                            </div>
                            <div className="text-center">
                                <label className="block">HORA:_________________________________</label>
                            </div>
                        </div>
                        <div className="text-center text-tiny font-bold pt-20">
                            <label className="block">____________________________________________________</label>
                            <label className="">FIRMA DEL RESPONSABLE QUE NOTIFICÓ</label>
                            <label className="block pt-5">NOMBRE: ________________________________</label>
                            <label className="block pt-1">PUESTO: ________________________________</label>
                            <label className="font-normal py-5 block">**Si la comuniación fue electrónica se deberá colocar pel medio por el cual se notificó al servidor, así como, el número del documento.</label>
                    </div>
                    </div>
                </section>
                <footer className='grid grid-cols-2'>
                <label className='text-center text-stiny font-bold'>Elaborado por el Ministerio del Trabajo</label>
                <label className='text-center text-stiny'> <strong>Fecha de actualización de formato:</strong> 2024-08-23 / Versión: 01.1 / Página 2 de 2</label>
            </footer>
            </div>
        </div>
    )
}
export default AccionPersonal2;