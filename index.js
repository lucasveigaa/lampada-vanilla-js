const ligarLampada = document.getElementById('ligar-lampada')
const desligarLampada = document.getElementById('desligar-lampada')
const lampada = document.getElementById('img-lampada')


function lampadaEstaQuebrada(){
    if (lampada.src.indexOf('quebrada') > -1)
    return true
}

function lampadaAcesa(){
    if (!lampadaEstaQuebrada()){
        lampada.src = './imgs/ligada.jpg'
    }
}

function lampadaApagada(){
    if (!lampadaEstaQuebrada()){
        lampada.src = './imgs/desligada.jpg'
    }
}

function lampadaQuebrada(){
    lampada.src = './imgs/quebrada.jpg'
}

ligarLampada.addEventListener('click', lampadaAcesa)
desligarLampada.addEventListener('click', lampadaApagada)

lampada.addEventListener('mouseover', lampadaAcesa)
lampada.addEventListener('mouseleave', lampadaApagada)

lampada.addEventListener('dblclick', lampadaQuebrada)


