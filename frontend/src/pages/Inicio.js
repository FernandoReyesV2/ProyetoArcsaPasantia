import React, { useState } from 'react';

function InicioSesion() {
    const Usuario = "user";
    const Contraseña = "12345";
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar si las credenciales son correctas
        if (username === Usuario && password === Contraseña) {
            alert('Inicio de sesión exitoso');
            // Aquí puedes redirigir al usuario a otra página o manejar el estado de autenticación
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className='bg-neutral-300 flex items-center justify-center min-h-screen'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
                <h1 className='text-2xl font-bold mb-4'>Iniciar Sesion</h1>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            placeholder='Ingrese Nombre de Usuario'
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='relative'>
                        <input
                            type='password'
                            placeholder='Ingrese Contraseña'
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Iniciar Sesion
                    </button>
                </form>
            </div>
        </div>
    );
}

export default InicioSesion;
