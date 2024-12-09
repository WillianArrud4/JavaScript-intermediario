//seletor por id
document.querySelector('#titulo').innerHTML = 'Exemplo'

//seletor por tag
document.querySelector('a').innerHTML = 'teste ancora'

// Slecionando mais de 1 item por tag
let ancora = document.querySelectorAll('a')

ancora.forEach(function(elemento){ // função anonima/ callback
  elemento.innerHTML = 'Teste'
})

// selecionado mais de 1 item por calsse
let boxes = document.querySelectorAll('.box')

let count = 0 
boxes.forEach(function(box, index){
    count++
 
    box.innerHTML = 'box' + (index + 1)
})