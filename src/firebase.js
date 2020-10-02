import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCN15A-t4iWZNBQZZH94LsG6WnL8A8JxaI",
    authDomain: "oscargo-portfolio.firebaseapp.com",
    databaseURL: "https://oscargo-portfolio.firebaseio.com",
    projectId: "oscargo-portfolio",
    storageBucket: "oscargo-portfolio.appspot.com",
    messagingSenderId: "959918093134",
    appId: "1:959918093134:web:876e3e699a2bb2ffb7241f",
    measurementId: "G-X19ER00Z90"
})

const db = firebaseApp.firestore()


export { db }