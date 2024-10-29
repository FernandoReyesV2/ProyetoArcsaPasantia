import React, { useState, useEffect } from 'react';
import { login, loginWithGoogle, signInWithPhone, configureRecaptcha } from '../autenticacion/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { getAuth } from 'firebase/auth';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const initializeRecaptcha = () => {
      setTimeout(() => {
        configureRecaptcha('recaptcha-container');
      }, 0); 
    };
  
    initializeRecaptcha();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      if (err.message.includes('auth/wrong-password')) {
        setError('La contraseña es incorrecta.');
      } else if (err.message.includes('auth/user-not-found')) {
        setError('No se encontró el usuario.');
      } else {
        setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Ocurrió un error al iniciar sesión con Google. Por favor, inténtalo de nuevo.');
    }
  };

  const handlePhoneLogin = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError('Número de teléfono inválido. Asegúrate de usar el formato internacional.');
      return;
    }
    try {
      const recaptchaVerifier = window.recaptchaVerifier;
      if (!recaptchaVerifier) {
        setError('El reCAPTCHA no está configurado correctamente.');
        return;
      }
      const confirmationResult = await signInWithPhone(phoneNumber, recaptchaVerifier);
      navigate('/otp-verification', { state: { verificationId: confirmationResult.verificationId } });
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error al enviar el código de verificación. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
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
              placeholder="Contraseña"
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
              Iniciar Sesión
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Iniciar Sesión con Google
            </button>
          </div>
          <div>
            <p>
              ¿Olvidaste tu contraseña? <Link to="/auth/forgot-password" className="text-blue-500 hover:underline">Recupérala aquí</Link>
            </p>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-400" />
            <span className="mx-4 text-gray-400">O</span>
            <hr className="flex-1 border-gray-400" />
          </div>
          <div className="mt-4">
            <PhoneInput
              placeholder="Ingresa número de teléfono"
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="US"
              className="w-full "
            />
            <button
              type="button"
              onClick={handlePhoneLogin}
              className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Continuar con Teléfono
            </button>
          </div>
          <div>
            <p className='text-center'>
              ¿Ya tienes cuenta?
              <Link
                to="/auth/register"
                className="w-auto mt-1 block bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-center">
                Regístrate</Link>
            </p>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}

export default Login;
