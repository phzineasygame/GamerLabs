import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAW6IqBBiwiA2hgzDPt_s4_P_nk-8GTEfA",
  authDomain: "buildcore-labs.firebaseapp.com",
  projectId: "buildcore-labs",
  storageBucket: "buildcore-labs.firebasestorage.app",
  messagingSenderId: "413017471596",
  appId: "1:413017471596:web:83edcc580848ec2452b649"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // 🚨 ESSENCIAL

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            window.location.href = "compatibilidade.html";
        })
        .catch((error) => {

            if (error.code === "auth/email-already-in-use") {
                alert("Este email já está cadastrado!");
            } else if (error.code === "auth/invalid-email") {
                alert("Email inválido!");
            } else if (error.code === "auth/weak-password") {
                alert("A senha precisa ter pelo menos 6 caracteres!");
            } else {
                alert("Erro ao criar conta.");
            }

            console.log(error);
        });
});