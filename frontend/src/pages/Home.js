import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'; 

function Home() {
  const printRef = useRef();

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-4'>
        <button className='flex items-center p-2 bg-green-500 text-white rounded font-semibold'>
          <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
          Cargar Excel
        </button>
      </div>
    </div>
  );
}

export default Home;
