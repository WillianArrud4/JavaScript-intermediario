

let testebto = document.querySelector('#testebto')

let conatdor = 0 

function cliqueBotao() {
        contador++

    console.log('mensagen 1')

    if (contador >=5 ) {
        testebto.removeEventListener('click', cliqueBotao )

    }
}

// addEventListener
testebto.addEventListener('click', cliqueBotao)


//onclick
//testebto.onclick = cliqueBotao