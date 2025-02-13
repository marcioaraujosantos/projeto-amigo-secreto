//let titulo = document.querySelector('h1');1111
//titulo.innerHTML = 'jogo do Número secreto.';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Digite um número Entre 1 e 10.';

let numeroSecreto = gerarNumeroAleatorio;

//Ativando o comando dos botão com onclik, utilizando funções.
function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Acerte o Número Secreto');
exibirTextoNaTela('p', 'Escolha um Número entre 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}