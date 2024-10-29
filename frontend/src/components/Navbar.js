import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function Navbar() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <nav className="bg-[#FBFCF8] dark:bg-gray-700 shadow-lg">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <Link to="/">ARCSA</Link>
            </li>
            {user && (
              <li>
                <Link to="/usuarios/lista">Usuarios</Link>
              </li>
            )}
          </ul>
          <ul className="flex space-x-4 font-medium text-sm">
            {user ? (
              <>
                <li className="text-sm font-medium">
                  Hola, {user.displayName || user.email}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-blue-500 hover:underline"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/auth/login" className="text-blue-500 hover:underline">
                    Inicia Sesión
                  </Link>
                </li>
                <li>
                  <Link to="/auth/register" className="text-blue-500 hover:underline">
                    Regístrate
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
