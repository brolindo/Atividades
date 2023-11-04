//Exercício 01
function somaReutilizavel(a, b) {
  return a + b;
}

var resultado = 0;
resultado = somaReutilizavel(10, 10) * 5;
console.log(resultado);

//Exercicio 2
function letraInicial(nome, sobrenome) {
  nome = nome[0].toUpperCase();
  sobrenome = sobrenome[0].toUpperCase();
  return [nome, sobrenome];
}

function nomeCompleto() {
  console.log(`As letras iniciais do meu nome são ${letraInicial(nome, sobrenome)[0]} e ${letraInicial(nome, sobrenome)[1]}`)
}

let nome = 'brolin';
let sobrenome = 'wrangler';
nomeCompleto();

//Exercicio 03
function par(n){
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

function impar(n) {
  if (n % 2 != 0) {
    return true;
  }
  return false;
}

function letrasProduto(produto) {
  if (par(produto.length)){
    return `O número de letras de ${produto} é par`;
  }
  if (impar(produto.length)){
    return `O numero de letras de ${produto} é impar`;
  }
}

console.log(letrasProduto("Casa"));
console.log(letrasProduto("carro"));
console.log(letrasProduto("chocolate"));
console.log(letrasProduto("Brolin"));
console.log(letrasProduto("felicidade"));
console.log(letrasProduto("impar"));