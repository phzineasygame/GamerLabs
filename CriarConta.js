///aqui verifica se os campos estão preenchidos devidamente

const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const botao = document.getElementById("botao");

function verificarCampos() {
    if (
        usuario.value.trim() !== "" &&
        email.value.trim() !== "" &&
        senha.value.trim() !== "" &&
        confirmarSenha.value.trim() !== "" &&
        senha.value === confirmarSenha.value
    ) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

usuario.addEventListener("input", verificarCampos);
email.addEventListener("input", verificarCampos);
senha.addEventListener("input", verificarCampos);
confirmarSenha.addEventListener("input", verificarCampos);

///Aqui é um verificador se o email que o usuário colocou é válido, pra liberar o botão

function verificarCampos() {
    const emailValido = email.value.includes("@") && email.value.includes(".");

    if (
        usuario.value.trim() !== "" &&
        emailValido &&
        senha.value.trim() !== "" &&
        confirmarSenha.value.trim() !== "" &&
        senha.value === confirmarSenha.value
    ) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}


