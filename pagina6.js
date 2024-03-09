const botaoVoltar = document.getElementById("botaovoltar2")
const botaoNext = document.getElementById("fim")

botaoVoltar.addEventListener("click", voltarPagina)

function voltarPagina() {
    window.location.href = '/texto5.html'
}

botaoNext.addEventListener("click", avancarPagina)

function avancarPagina() {
    window.location.href = '/teamo.html'
}