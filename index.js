window.addEventListener("scroll", () => {
    const imagem = document.querySelector(".foto");
    let scroll = window.scrollY;

    let escala = 1 + scroll * 0.0005;

    escala = Math.min(escala, 1.1); // limite máximo

    imagem.style.transform = `scale(${escala})`;
});