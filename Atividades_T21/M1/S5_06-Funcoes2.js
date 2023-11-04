// Exercício 01
function verificaValor(valor) {
    if(valor > 0) {
        return 'P';
    } else {
        return 'N';
    }
}
const positivo = 2;
const negativo = -1;
const neutro = 0;

console.log(`Valor negativo: ${verificaValor(negativo)}`);
console.log(`Valor neutro: ${verificaValor(neutro)}`);
console.log(`Valor positivo: ${verificaValor(positivo)}`);

// Exercício 02
function numeroDeDigitos(numero) {
    numero = numero.toString();
    return numero.length;
}

let numero = prompt('Digite um numero');
alert(`O numero ${numero} possui ${numeroDeDigitos(numero)} digitos`);

// Exercício 03
function somaNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1 + numero2;
    } else {
        return "O primeiro número não é maior que o segundo.";
    }
}

console.log(somaNumeros(5, 10));
console.log(somaNumeros(10, 5));

// Exercicio 04
function verificaInicial(palavra, letra) {
    palavra = palavra.toLowerCase();
    letra = letra.toLowerCase();
    if(palavra[0] === letra) {
        return true;
    } else {
        return false;
    }
}
console.log(verificaInicial('brolin', 'b'));
console.log(verificaInicial('Brolin', 'b'));
console.log(verificaInicial('brolin', 'B'));
console.log(verificaInicial('brolin', 'a'));

// Exercício 05
function horaAtendimento(hora){
    if (hora >= 11 && hora <= 23){
        return "O /pergunta está em horário de funcionamento.";
    } else {
        return "O /pergunta não está em horário de funcionamento.";
    }
}

console.log(horaAtendimento(12));
console.log(horaAtendimento(23));
console.log(horaAtendimento(5));
console.log(horaAtendimento(24));