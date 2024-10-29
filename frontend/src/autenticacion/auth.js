import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { firebaseConfig } from './firebase';
import { initializeApp } from 'firebase/app';

// Inicializa Firebase
initializeApp(firebaseConfig); // Reutiliza la configuración de Firebase
const auth = getAuth(); // Obtén la instancia de autenticación

// Función para registrar un nuevo usuario
export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Función para iniciar sesión
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Función para cerrar sesión
export const logout = () => {
  return signOut(auth);
};

// Función para enviar un correo de restablecimiento de contraseña
export const sendPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Correo de restablecimiento de contraseña enviado.');
      })
      .catch((error) => {
        console.error('Error al enviar el correo de restablecimiento de contraseña:', error);
        throw error;
      });
};

// Función para iniciar sesión con Google
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Función para enviar un SMS de verificación y configurar la verificación
export const signInWithPhone = async (phoneNumber, recaptchaVerifier) => {
  return await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
};

// Función para configurar Recaptcha
export const configureRecaptcha = (containerId) => {
  if (!auth) {
    throw new Error('Firebase Auth no está inicializado.');
  }

  window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
    size: 'invisible',
    callback: (response) => {
    },
    'expired-callback': () => {
    },
  });
};
