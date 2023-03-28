const enviar = document.querySelector(".enviar")
const cartao1 = document.querySelector(".principal")
const cartao2 = document.querySelector(".secundaria")
const nota = document.querySelector(".numeros")
const avaliacao = document.querySelectorAll("#avaliacao")

enviar.addEventListener ("click", () => {
    cartao2.classList.remove("hidden")
    cartao1.style.display = "none"
})

nota.forEach((numero) => { 
    numero.addEventListener("click", () => {
        avaliacao.innerHTML = numero.innerHTML
    })
})