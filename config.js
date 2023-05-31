// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBgHCOEA-rGt5MhfSRmKEQ8NgVT0inWAP8",
  authDomain: "reactnativeproject-ac8ab.firebaseapp.com",
  databaseURL: "https://reactnativeproject-ac8ab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactnativeproject-ac8ab",
  storageBucket: "reactnativeproject-ac8ab.appspot.com",
  messagingSenderId: "532851664308",
  appId: "1:532851664308:web:1aa90192c5e60745a4bee1",
  measurementId: "G-DPNZLNLB4D"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
