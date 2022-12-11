// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwmaqlls_TsQE_URJfItRKyOffkzDdFgg",
    authDomain: "ddfgffggf-49838.firebaseapp.com",
    projectId: "ddfgffggf-49838",
    storageBucket: "ddfgffggf-49838.appspot.com",
    messagingSenderId: "33523011235",
    appId: "1:33523011235:web:1d52ee6d41332b75b2b916"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }