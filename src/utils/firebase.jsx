// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQlks_hwzphHOnzvnwAk_mx0hhyxQTDNU',
  authDomain: 'reactnetflixgpt-1.firebaseapp.com',
  projectId: 'reactnetflixgpt-1',
  storageBucket: 'reactnetflixgpt-1.firebasestorage.app',
  messagingSenderId: '1051566580827',
  appId: '1:1051566580827:web:845b55d38e1e648c600b7e',
  measurementId: 'G-E4KH3JDQYV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
