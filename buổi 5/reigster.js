
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAlCks9qb3kegls_eL4t01xYbjhrFvd-SM",
    authDomain: "login-example-4aa01.firebaseapp.com",
    projectId: "login-example-4aa01",
    storageBucket: "login-example-4aa01.appspot.com",
    messagingSenderId: "705394567159",
    appId: "1:705394567159:web:fa6df8e09ce32ca89ff0f2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {

    event.preventDefault()
    const email = document.getElementById('email').value;

    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            // Signed up

            const user = userCredential.user;
            alert("creating account...")
            window.location.href = "Grand.html";
        })
        .catch((erroг) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

        });
})