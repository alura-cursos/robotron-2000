const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca =  controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}


{
bracos {
    forca
    poder
    energia
    velocidade
}
blindagem {
    forca
    poder
    energia
    velocidade
}
nucleos
pernas
foguetes
}


forca
poder
energia
velocidade