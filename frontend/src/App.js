import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bingo from './pages/Bingo';
import Productos from './pages/Productos';
import UserList from './pages/UserList';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import OtpVerification from './pages/OtpVerificacion';
import AccionPersonal from './pages/AccionPersonal';
import AccionPersonal2 from './pages/AccionPersonal2';
import IngresoDatos from './pages/IngresoDatos'
import InicioSesion from './pages/Inicio';
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const hideNavbarPaths = ['/otp-verification', '/accion-personal', '/accion-personal2', '/inicio-sesion'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<IngresoDatos />} />
        <Route path="/bingo" element={<Bingo />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/usuarios/lista" element={<PrivateRoute element={<UserList />} />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/accion-personal" element={<AccionPersonal />} />
        <Route path="/accion-personal2" element={<AccionPersonal2 />} />
        <Route path="/inicio-sesion" element={<InicioSesion/>} />
      </Routes>
    </>
  );
}

export default App;
