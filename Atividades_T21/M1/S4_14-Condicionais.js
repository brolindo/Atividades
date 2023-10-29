//Exercício 01
const A = 10;
const B = 20;
const C = 30;
if (A + B < C) {
    console.log(`A soma de ${A} + ${B} é menor que ${C}`);
} else {
    console.log(`A soma de ${A} + ${B} não é menor que ${C}`);
}

//Exercício 02
let numero = window.prompt('Digite um numero inteiro qualquer');
if (numero == parseInt(numero)) {
    if (parseInt(numero) % 2 == 0) {
        alert(`O número ${numero} é par`);
    } else {
        alert(`O número ${numero} é impar`);
    }
} else {
    alert('Você não digitou um número inteiro =(');
}

// Exercício 03
let logico1 = true;
let logico2 = false;

if(logico1 && logico1) {
    console.log('Ambas as variaveis sao verdadeiras');
} else if (!logico1 && !logico2) {
    console.log('Ambas as variaveis sao falsas');
}

// Exercício 04
alert('Digite três números diferentes');
const valor1 = prompt('Primeiro numero: ');
const valor2 = prompt('Segundo numero: ');
const valor3 = prompt('Terceiro numero: ');

if (valor1 > valor2){
    if (valor2 > valor3){
        alert(`O numeros digitados foram ${valor1}, ${valor2}, ${valor3}`);
    } else if (valor1 > valor3) {
        alert(`O numeros digitados foram ${valor1}, ${valor3}, ${valor2}`);
    }else {
        alert(`O numeros digitados foram ${valor3}, ${valor1}, ${valor2}`);
    }
}else {
    if (valor3 > valor2){
        alert(`O numeros digitados foram ${valor3}, ${valor2}, ${valor1}`);
    }else if (valor1 > valor3) {
        alert(`O numeros digitados foram ${valor2}, ${valor1}, ${valor3}`);
    } else {
        alert(`O numeros digitados foram ${valor2}, ${valor3}, ${valor1}`);
    }
}   

// Exercício 5
const number1 = prompt('Digite um numero');
const number2 = prompt('Digite outro numero');
if (parseInt(number1) >= parseInt(number2)) {
    alert(`O numero ${number1} é maior que o número ${number2}`); 
} else {
    alert(`O numero ${number2} é maior que o número ${number1}`);
}