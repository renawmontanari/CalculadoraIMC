'use strict'

const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let verificacaoIMC = '';
        if (valorIMC < 18.5) {
            verificacaoIMC = resultado.style.backgroundColor = '#00F093';
            verificacaoIMC = 'você esta abaixo do peso.';
        } else if (valorIMC < 25) {
            verificacaoIMC = resultado.style.backgroundColor = '#0BE63C';
            verificacaoIMC = 'está com peso ideal, Parabéns!';
        } else if (valorIMC < 30) {
            verificacaoIMC = resultado.style.backgroundColor = '#EBE709';
            verificacaoIMC = 'está levemente acima do peso.';
        } else if (valorIMC < 35) {
            verificacaoIMC = resultado.style.backgroundColor = '#EBCE00';
            verificacaoIMC = 'está com obesidade grau I.';
        } else if (valorIMC < 40) {
            verificacaoIMC = resultado.style.backgroundColor = '#EB8300';
            verificacaoIMC = 'está com obesidade grau II.';
        } else {
            verificacaoIMC = resultado.style.backgroundColor = '#EB2D00';
            verificacaoIMC = 'está com obesidade grau III, Cuidado!';
        }
        resultado.innerHTML = `${nome} seu IMC é de ${valorIMC} e ${verificacaoIMC}`;
    } else {
        resultado.innerHTML = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);