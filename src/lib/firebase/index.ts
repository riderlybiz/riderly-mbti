import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBthjX1-i8wdnBhf_uufyChe0QC2ukqfns",
    authDomain: "riderly-2cda0.firebaseapp.com",
    projectId: "riderly-2cda0",
    storageBucket: "riderly-2cda0.firebasestorage.app",
    messagingSenderId: "874358645048",
    appId: "1:874358645048:web:20bac4af2d462c158461cd"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };