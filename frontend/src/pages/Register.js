import React, { useState } from 'react';
import { register, loginWithGoogle } from '../autenticacion/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
    } catch (err) {
      if (err.message.includes('auth/email-already-in-use')) {
        setError('El correo electrónico ya está en uso. Por favor, elige otro.');
      } else {
        setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      setError('Ocurrió un error al registrarse con Google. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Registro</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Constraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-0 px-3 flex items-center"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Regístrate
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Regístrate con Google
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            ¿Ya tienes cuenta? <Link to="/auth/login" className="text-blue-500 hover:underline">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
