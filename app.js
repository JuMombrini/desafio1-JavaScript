let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}

function mostrarMensagem() {
    alert('Eu amo JS'); 
} 

function cidadeBrasil() {
    let nomedaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito :'); 
    alert(`Estive em ${nomedaCidade} e lembrei de você!`); 
}

function somaNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número:')); 
    let segundoNumero = parseInt(prompt('Digite o segundo número:')); 
    let resultado = primeiroNumero + segundoNumero; 
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`); 
} 
