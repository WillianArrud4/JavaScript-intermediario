
let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false //flag

function abrirOuFechar() {

    if (aberto === true) {
        menuMobile.classList.remove('aberto')
        botaoMenu.innerText = 'abrir menu'
    } else if (aberto === false){ 
        aberto = true
        menuMobile.classList.add('aberto')
        botaoMenu,innerText = 'fechar menu'
    }

   
}