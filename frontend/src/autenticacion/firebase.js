import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCGnLQugwENEARvKBQwTdbltyakSWYGiZ8",
  authDomain: "pasante-demo.firebaseapp.com",
  projectId: "pasante-demo",
  storageBucket: "pasante-demo.appspot.com",
  messagingSenderId: "756282304303",
  appId: "1:756282304303:web:efff4d76e5b1580deb23da",
  measurementId: "G-968KTPD2MQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta las instancias de autenticación y firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, firebaseConfig };
