import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

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

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            window.location.href = "compatibilidade.html";
        })
        .catch((error) => {
            if (error.code === "auth/user-not-found") {
                alert("Usuário não encontrado.");
            } else if (error.code === "auth/wrong-password") {
                alert("Senha incorreta.");
            } else if (error.code === "auth/invalid-email") {
                alert("Email inválido.");
            } else {
                alert("Erro ao fazer login.");
            }
            console.log(error);
        });
});

// Toggle mostrar/ocultar senha
const eyeSVG = `
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const eyeSlashSVG = `
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7 1.5-2.5 4-4.5 7-5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 1l22 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const toggleSenha = document.getElementById('toggleSenha');
if (toggleSenha) {
    const senhaInput = document.getElementById('senha');
    toggleSenha.addEventListener('click', () => {
        const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
        senhaInput.setAttribute('type', type);
        toggleSenha.setAttribute('aria-label', type === 'password' ? 'Mostrar senha' : 'Ocultar senha');
        toggleSenha.innerHTML = type === 'password' ? eyeSVG : eyeSlashSVG;
    });
}