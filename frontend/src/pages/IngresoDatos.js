import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import PrintContent from '../components/PrintContent';
import '../css/style.css'

function IngresoDatos() {

  // Referencia para el componente que se va a imprimir
  const printRef = useRef();
  
  // Estados para manejar los valores seleccionados e ingresados
  const [tipoSeleccionado, setTipoSeleccionado] = useState(''); // Tipo seleccionado
  const [tipoDescripcion, setTipoDescripcion] = useState(''); // Descripcion de Tipo
  const [titulo, setTitulo] = useState(''); // Titulo ingresado
  const [file, setFile] = useState(null); // Archivo cargado
  const [loading, setLoading] = useState(false); // Estado de carga
  const [tipos, setTipos] = useState([]); // Lista de tipos
  const [seleccionado, setSeleccionado] = useState(''); // Seleccionado
  const [otro, setOtro] = useState(''); // Seleccionado Otro
  const [situacion, setSituacion] = useState(''); // Seleccion de Situacion CheckBoxes
  const [declaración, setDeclaracion] = useState('');

  // Declaracion Jurada
  const manejarCambioDeclaracion = (e) =>{
    const value = e.target.value;
    setDeclaracion(value);
    console.log(value);
  }
  
  // Situacion Propuesta y Situacion Actual
  const manejarCambioSituacion = (e) => {
    const value = e.target.value;
    setSituacion(value);
    console.log(value); 
  }

  // Efecto para cargar los tipos desde la base de datos al montar el componente
  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tipos');
        setTipos(response.data); // Guardar tipos en el estado
      } catch (error) {
        console.error('Error al cargar los tipos', error);
      }
    };

    fetchTipos(); // Llamada a la función para obtener tipos
  }, []);

  // Manejar el cambio en la selección del tipo
  const manejarCambio = (e) => {
    const value = e.target.value; // Obtener valor seleccionado
    setTipoSeleccionado(value); // Actualizar el estado con el tipo seleccionado
    const tipo = tipos.find((t) => t.ID_Tipo === value); // Buscar el tipo en la lista
    if (tipo) {
      setTipoDescripcion(tipo.Tipo); // Actualizar la descripcion del tipo
      setTitulo(tipo.Titulo); // Actualizar título
    } else {
      // Si no se encuentra el tipo, reiniciar los valores de ingreso y título
      setTipoDescripcion('');
      setTitulo('');
    }
  };

  // Manejar la seleccion de la opcion otro
  const manejarCambioSeleccionado = (e) => {
    const value = e.target.value;
    setSeleccionado(value);
    const seleccion = "Otro";
    if (value === seleccion){
      console.log(value);
    }else{
      console.log(value);
    }
  }

  // Manejar cambios en el campo de descripcion del tipo
  const manejarCambioTipoDescripcion = (e) => {
    setTipoDescripcion(e.target.value);
  };

  // Manejar cambios en el campo de título
  const manejarCambioTitulo = (e) => {
    setTitulo(e.target.value);
  };

  // Manejar el cambio de archivo
  const manejarCambioArchivo = (e) => {
    setFile(e.target.files[0]); // Guardar el archivo cargado
    setLoading(true); // Activar el estado de carga
    setTimeout(() => {
      setLoading(false); // Desactivar el estado de carga después de 2 segundos
    }, 2000);
  };

  // Crear un nuevo tipo en la base de datos
  const crearTipo = async () => {
    setLoading(true);
    const tipoData = { Titulo: titulo, Tipo: tipoDescripcion }; // Datos del nuevo tipo
    try {
      await axios.post('http://localhost:3001/api/tipos', tipoData); // Enviar datos a la API
      await cargarTipos(); // Recargar la lista de tipos
      resetForm(); // Reiniciar el formulario
    } catch (error) {
      console.error('Error al crear el tipo', error);
    }finally{
      setLoading(false);
    }
  };

  // Actualizar un tipo existente
  const actualizarTipo = async () => {
    setLoading(true);
    const tipoData = { Titulo: titulo, Tipo: tipoDescripcion }; // Datos a actualizar
    try {
      await axios.put(`http://localhost:3001/api/tipos/${tipoSeleccionado}`, tipoData); // Enviar actualización a la API
      await cargarTipos(); // Recargar la lista de tipos
      resetForm(); // Reiniciar el formulario
    } catch (error) {
      console.error('Error al actualizar el tipo', error);
    }finally{
      setLoading(false);
    }
  };

  // Función para cargar tipos nuevamente
  const cargarTipos = async () => {
    const response = await axios.get('http://localhost:3001/api/tipos');
    setTipos(response.data); // Actualizar el estado con los nuevos tipos
  };

  // Reiniciar los valores del formulario
  const resetForm = () => {
    setTipoSeleccionado('');
    setTipoDescripcion('');
    setTitulo('');
  };

  // Eliminar un tipo seleccionado
  const eliminarTipo = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3001/api/tipos/${tipoSeleccionado}`); // Enviar solicitud de eliminación a la API
      const response = await axios.get('http://localhost:3001/api/tipos'); // Cargar tipos nuevamente
      setTipos(response.data); // Actualizar el estado con los tipos
      resetForm(); // Reiniciar el formulario
    } catch (error) {
      console.error('Error al eliminar el tipo', error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && (
        <div className="loader-container"> {/* Mostrar loader mientras se carga */}
          <div className="loader"></div>
        </div>
      )}
      <div className='flex items-start mt-4 mx-16'>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={manejarCambioArchivo} // Manejar cambio de archivo
          className='hidden'
          id='file-input'
        />
        <label
          htmlFor='file-input'
          className='flex items-center p-2 bg-green-500 text-white rounded font-semibold hover:bg-green-600 cursor-pointer'
        >
          <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
          Cargar Excel
        </label>
        <div className='flex flex-col items-center ml-4'>
          <div className='text-center text-sm'>Última Actualización:</div>
          <div className='text-center text-sm'></div>
        </div>
        <div className='ml-auto mx-18'>
          <ReactToPrint
            trigger={() => (
              <button className='p-2 bg-blue-500 text-white rounded hover:bg-blue-700 font-semibold'>
                Imprimir
              </button>
            )}
            content={() => printRef.current} // Definir contenido a imprimir
          />
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <PrintContent ref={printRef} /> {/* Componente a imprimir */}
      </div>
      <div className='shadow-lg shadow-neutral-300 mt-2 mb-5 mx-16 rounded-lg bg-[#FBFCF8] p-2'>
        <ol className='grid grid-cols-2'>
          {/* NUMERO IDENTIFICACION */}
          <li className='flex items-center justify-center my-2'>
            <label className="font-semibold p-2 w-48"> Ingrese Número de Identificación: </label>
            <input
              className='w-full max-w-72 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Número de Identificación'
              type='number'
              maxLength={10} // Limitar a 10 caracteres
            />
          </li>
          {/* FECHA ELABORACION */}
          <li className='flex items-center justify-center my-2'>
            <label className="font-semibold p-2 w-48"> Ingrese Fecha de Elaboración: </label>
            <input
              className='w-full max-w-72 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='date'
            />
          </li>
          {/* SITUACION ACTUAL  y PROPUESTA*/}
          <li className='flex items-center justify-center my-2'>
            {/* ACTUAL */}
            <label className="font-semibold p-2 w-48" htmlFor='situacion-actual'> Situación Actual: </label>
            <input
              className='border border-gray-300 rounded-lg w-4 h-4 mx-4'
              type='checkbox'
              id='situacion-actual'
              value={"Situacion Actual"}
              onChange={manejarCambioSituacion}
            />
            {/* PROPUESTA */}
            <label className="font-semibold py-2 w-48" htmlFor='situacion-propuesta'> Situación Propuesta: </label>
            <input
              className='border border-gray-300 rounded-lg w-4 h-4 mx-4'
              type='checkbox'
              id='situacion-propuesta'
              value={"Situacion Propuesta"}
              onChange={manejarCambioSituacion}
            />
          </li>
          {/* SELECCIONADO */}
          <li className='flex items-center justify-center my-2'>
            <label className='font-semibold p-2 w-48' htmlFor="tipo">Seleccione: </label>
            <select
              className='w-full max-w-72 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              id='seleccionado'
              value={seleccionado}
              onChange={manejarCambioSeleccionado}
              >
              <option value="">Seleccione una opción: </option>
              <option value="Ingreso">Ingreso</option>
              <option value="Reingreso">Reingreso</option>
              <option value="Restitucion">Restitución</option>
              <option value="Ascenso">Ascenso</option>
              <option value="Traslado">Traslado</option>
              <option value="Traspaso">Traspaso</option>
              <option value="Cambio">Cambio Administrativo</option>
              <option value="Intercambio">Intercambio Voluntario</option>
              <option value="Licencia">Licencia</option>
              <option value="Comision">Comision de Servicios</option>
              <option value="Sanciones">Sanciones</option>
              <option value="Incremento">Incremento RMU</option>
              <option value="Subrogacion">Subrogacion</option>
              <option value="Encargo">Encargo</option>
              <option value="Cesacion">Cesación de Funciones</option>
              <option value="Destitucion">Destitución</option>
              <option value="Vacaciones">Vacaciones</option>
              <option value="Otro">Otro: </option>
            </select>
          </li>
          {/* DECLARACION JURIDICA */}
          <li className='flex items-center justify-center my-2'>
            <label className="font-semibold p-2 w-72 mr-3" htmlFor='declaracion-jurada'> Presentó la declaración jurada: </label>
            <label>Si</label>
            <input
              className='border border-gray-300 rounded-lg w-4 h-4 mx-4'
              type='checkbox'
              id='declaracion-jurada'
              value={"Si"}
              onChange={manejarCambioDeclaracion}
            />
            <label>No aplica</label>
            <input
              className='border border-gray-300 rounded-lg w-4 h-4 mx-4'
              type='checkbox'
              id='declaracion-jurada'
              value={"No"}
              onChange={manejarCambioDeclaracion}
            />
          </li>
          {/* PROCESO INSTITUCIONAL */}
          <li className='flex items-center justify-center my-2'>
            <label className="font-semibold p-2 w-48"> Ingrese Proceso Institucional: </label>
            <input
              className='w-full max-w-72 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Proceso Institucional'
              type='text'
            />
          </li>
          {/* NIVEL DE GESTION */}
          <li className='flex items-center justify-center my-2'>
            <label className="font-semibold p-2 w-48"> Ingrese Nivel de Gestión: </label>
            <input
              className='w-full max-w-72 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Nivel de Gestión'
              type='text'
            />
          </li>
          {/* SELECCIONE TIPO */}
          <li className='flex items-center justify-center my-2'>
            <label className='font-semibold p-2 w-48' htmlFor="tipo">Seleccione Tipo: </label>
            <select
              className='w-full max-w-72 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              id='tipo'
              value={tipoSeleccionado} // Valor del tipo seleccionado
              onChange={manejarCambio} // Manejar cambio en la selección
            >
              <option value="">Seleccione una opción: </option>
              {tipos.map((tipo) => (
                <option key={tipo.ID_Tipo} value={tipo.ID_Tipo}>
                  {tipo.Titulo}
                </option>
              ))}
              <option value="nuevoTipo">Nuevo Tipo</option>
            </select>
          </li>
        </ol>
        {/* SELECCION
        {seleccionado && (
          <input placeholder='Ingrese el'></input>
        )} */}
        {/* SELECCION DEL TIPO */}
        {tipoSeleccionado && ( // Mostrar campos adicionales si se seleccionó un tipo
          <div className='flex items-center justify-center my-2'>
            <label className="font-semibold p-2 w-full max-w-48"> Ingrese Título: </label>
            <input
              className='w-full max-w-4xl border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Ingrese título aquí...'
              value={titulo} // Valor del título ingresado
              onChange={manejarCambioTitulo} // Manejar cambio en el título
            />
          </div>
        )}
        {tipoSeleccionado && (
          <div className='flex items-center justify-center'>
            <label className="font-semibold p-2 w-full max-w-48"> Ingrese Tipo: </label>
            <textarea
              className='w-full max-w-4xl border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Ingrese tipo aquí...'
              value={tipoDescripcion} // Valor del tipo de ingreso
              onChange={manejarCambioTipoDescripcion} // Manejar cambio en la descripcion del tipo
              rows={4} // Número de filas del textarea
            />
          </div>
        )}
      </div>
      <div className='flex items-center justify-center'>
        {tipoSeleccionado && tipoSeleccionado !== "Seleccione una opción" && (
          <>
            <button
              type='button'
              onClick={tipoSeleccionado === "nuevoTipo" ? crearTipo : actualizarTipo} // Crear o actualizar según el tipo seleccionado
              className={`w-72 ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white font-semibold py-2 px-4 rounded-md shadow-md hover:${loading ? '' : 'bg-blue-700'}`}
              disabled={loading} // Deshabilitar el botón si está en estado de carga
            >
              {tipoSeleccionado === "nuevoTipo" ? "Crear Tipo" : "Actualizar Tipo"}
            </button>
            {tipoSeleccionado && (
              <button
                type='button'
                onClick={eliminarTipo} // Eliminar el tipo seleccionado
                className='w-72 bg-red-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-700 ml-4'
              >
                Eliminar Tipo
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default IngresoDatos;
