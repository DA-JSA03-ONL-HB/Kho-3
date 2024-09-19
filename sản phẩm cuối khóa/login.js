// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "http://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnXIpv7h7LvbGB7JjDBm3lRVaBNWefZro",
    authDomain: "spck-3ef92.firebaseapp.com",
    projectId: "spck-3ef92",
    storageBucket: "spck-3ef92.appspot.com",
    messagingSenderId: "168618497545",
    appId: "1:168618497545:web:e1a83c92defec4ee478ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//  const userName = document.getElementById('userName').value;

//submit
const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
    event.preventDefault()

    //input
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('Creating account ...')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})
function toggleForm() {
    const formContainer = document.getElementById('form-container');
    const formTitle = document.getElementById('form-title');
    const form = document.getElementById('form');

    if (formTitle.innerText === "Login") {
        formTitle.innerText = "Register";
        form.innerHTML = `
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password">
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm password">
            </div>
            <input type="button" value="Register" onclick="register()">
            <div class="toggle-link">
                Already have an account? <a href="#" onclick="toggleForm()">Login here</a>
            </div>
        `;
    } else {
        formTitle.innerText = "Login";
        form.innerHTML = `
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password">
            </div>
            <input type="button" value="Login" onclick="login()">
            <div class="toggle-link">
                Don't have an account? <a href="#" onclick="toggleForm()">Register here</a>
            </div>
        `;
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (!username || !password) {
        alert("Yêu cầu điền đầy đủ thông tin.");
        return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert(`Login successful: ${username}`);
        window.location.href = 'homepage.html';
    } else {
        alert("Tên hoặc pass ko đúng.");
    }
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!username || !password || !confirmPassword) {
        alert("Yêu cầu điền đầy đủ thông tin.");
        return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username) {
        alert("Tên đăng nhập đã được sử dụng.");
        return;
    }

    if (password.length < 6) {
        alert("Pass cần 6 ký tự.");
        return;
    }

    if (password === confirmPassword) {
        const newUser = {
            username: username,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(newUser));
        alert(`Registration successful: ${username}`);
        window.location.href = 'homepage.html';
    } else {
        alert("Passwords do not match!");
    }
}

