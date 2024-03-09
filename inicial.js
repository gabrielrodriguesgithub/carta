const botao1 = document.querySelector('#botao1')

botao1.addEventListener("click", passarTela)

function passarTela() {
    window.location.href = '/texto1.html';
}
