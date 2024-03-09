const botaoVoltar = document.getElementById("botaovoltar2")
const botaoNext = document.getElementById("botaonext2")

botaoVoltar.addEventListener("click", voltarPagina)

function voltarPagina() {
    window.location.href = '/texto1.html'
}

botaoNext.addEventListener("click", avancarPagina)

function avancarPagina() {
    window.location.href = '/texto3.html'
}