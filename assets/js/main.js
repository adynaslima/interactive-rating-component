const enviar = document.querySelector('.enviar')
const cartao1 = document.querySelector('.principal')
const cartao2 = document.querySelector('.secundaria')
const nota = document.querySelector('.numeros')
const avaliar = document.querySelector('#avaliacao')

enviar.addEventListener ("click", () => {
    cartao2.classList.remove("hidden")
    cartao1.style.display = 'none'
})