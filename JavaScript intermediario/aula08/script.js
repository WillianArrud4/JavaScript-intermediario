
let contador = document.querySelector('#contador')

let count = 0

let intervalo = setInterval(function() {
    count++
    contador.innerText = count
}, 1)

let bataoPuasar = document.querySelector('#botaPausar')

botaoPausar.onclick = function() {

    clearInterval(intervalo)
}