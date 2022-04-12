var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('x');

function escolherQuadrado(id) {

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    } 

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'x') {
        jogador = 'o';
    }else {
        jogador = 'x';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadrado1 = document.getElementById('b1');
    var quadrado2 = document.getElementById('b2');
    var quadrado3 = document.getElementById('b3');
    var quadrado4 = document.getElementById('b4');
    var quadrado5 = document.getElementById('b5');
    var quadrado6 = document.getElementById('b6');
    var quadrado7 = document.getElementById('b7');
    var quadrado8 = document.getElementById('b8');
    var quadrado9 = document.getElementById('b9');

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado4);
    }


}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f8';
    quadrado2.style.background = '#0f8';
    quadrado3.style.background = '#0f8';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}