//Exercício 1
const nome1 = 'João';
const nome2 = 'Silva'
console.log(`Olá, ${nome1} ${nome2}!`);

//Exercício 2
const string1 = 'Hello';
const string2 = 'world';
console.log(string1 + string2);

// Exercício 3, 4
let numero = prompt('Digite um numero qualquer');
console.log(typeof(numero));
console.log(numero);
numero = parseInt(numero);
console.log(typeof(numero));
alert('A parte inteira seria: ' + numero);

// Exercício 5
window.alert('Agora iremos realizar a soma de dois numeros!');

let numero1 = prompt('Digite um número');
let numero2 = prompt('Agora digite outro');
const soma = parseInt(numero2) + parseInt(numero1);
window.alert(`A soma de ${numero1} + ${numero2} é igual a ${soma}`);