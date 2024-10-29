import React, { useState, useEffect } from 'react';

function Bingo() {
  const [lista, setLista] = useState(new Set());
  const [listaJugadas, setListaJugadas] = useState([]);
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [numerosSorteados, setNumerosSorteados] = useState(new Set());
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const nuevaLista = new Set();
    while (nuevaLista.size < 25) {
      const num = getRandomIntInclusive(0, 90);
      nuevaLista.add(num);
    }
    setLista(nuevaLista);
  }, []);

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const handleSorteo = () => {
    let num;
    do {
        num = getRandomIntInclusive(0, 90);
    } while (numerosSorteados.has(num) && numerosSorteados.size < 91);

    if (!numerosSorteados.has(num)) {
        setNumerosSorteados((prev) => new Set(prev).add(num));
        setNumeroSorteado(num);
        actualizar(num);
    }
};


  const actualizar = (num) => {
    if (lista.has(num)) {
      const pos = Array.from(lista).indexOf(num);

      if (!listaJugadas.includes(pos)) {
        setListaJugadas((prevListaJugadas) => [...prevListaJugadas, pos]);
      }
    }
  };

  useEffect(() => {
    if (listaJugadas.length === 25) {
      setModalVisible(true);
    }
  }, [listaJugadas]);

  const mostrarMensajeGanador = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded text-center">
          <p className="text-2xl font-bold">¡Has ganado!</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => window.location.reload()}
          >
            Aceptar
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="Bingo">
      <div className="mt-20 mx-auto border-8 border-[#9FBAED] rounded-lg max-w-md w-full">
        <div className="grid grid-cols-5">
          <div className="w-50 h-30 text-center font-bold text-7xl text-[#EB564B]">B</div>
          <div className="w-30 h-30 text-center font-bold text-7xl text-[#F9E033]">I</div>
          <div className="w-30 h-30 text-center font-bold text-7xl text-[#AAE738]">N</div>
          <div className="w-30 h-30 text-center font-bold text-7xl text-[#75CFFD]">G</div>
          <div className="w-30 h-30 text-center font-bold text-7xl text-[#C15FE0]">O</div>
        </div>
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5">
            {[...Array(5)].map((_, colIndex) => {
              const id = rowIndex * 5 + colIndex;
              const numero = Array.from(lista)[id];
              const isJugada = listaJugadas.includes(id);
              return (
                <label
                  key={id}
                  className={`bg-gray-100 max-w-24 text-center font-bold text-4xl border-t-8 border-r-8 border-[#9FBAED] ${
                    isJugada ? 'bg-red-500 text-white' : ''
                  }`}
                  id={id.toString()}
                >
                  {numero}
                </label>
              );
            })}
          </div>
        ))}
      </div>
      <section>
        <div className="mx-auto mt-10 max-w-md w-full">
          <div className="flex items-center justify-center space-x-20">
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSorteo}
            disabled={numerosSorteados.size >= 91}
          >
            Sorteado
          </button>
            <label id="numero" className="text-3xl font-bold">
              {numeroSorteado !== null ? numeroSorteado : '0'}
            </label>
          </div>
        </div>
      </section>
      {modalVisible && mostrarMensajeGanador()}
    </section>
  );
}

export default Bingo;
