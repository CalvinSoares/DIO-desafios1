let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for (let i in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
        element.classList.add('selected');

    }, Number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//checa se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nvocê acertou! iniciando próximo nivel`);
        nextLevel();
    }
}

//funcao para o click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => {
        createElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createElement = (color) => {
    if (color == 0) {
        return green;
    }else if (color == 1) {
        return red;
    }else if (color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();

}

//funcao para game over
let lose = () => {
    alert(`Pontuação ${score}\nVocê perdeu o jogo\nclique em ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playgame();
}

//funcao para iniciar
let playgame = () => { 
    alert('bem vindo ao Genesis! iniciando novo jogo!');
    score = 0;

    nextLevel();
    
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playgame();