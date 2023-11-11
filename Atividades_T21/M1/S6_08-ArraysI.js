// Exercícios 
function stringToArray(word) {
    if (word.length <= 5) {
        let array = [];
        
        for (let index = 0; index < word.length; index++) {
            array.push(word[index]);
        }
        return array;
    }
    return `A string '${word}' possui mais que 5 caracteres`;
}

// Exercício 02 
let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];

function acessaArray(indice) {
    if (indice < arr.length) {
        return arr[indice];
    }
    return alert("Valor não encontrado");
}

// Exercício 03
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numeroInteiro(numero) {

    if (numero >= 0 && numero < arrayNumeros.length) {
        if (numero % 2 == 0){
            return "O valor encontrado nessa posição é par";
        } else {
        return "O valor encontrado nessa posição é impar";
        }
    }
    return "Índice invalido";
}

// Exercício 04
let nomes = ["Pedro", "Rafael", "José"];
function qualNomeEOMaior(listaDeNomes) {
    let maior = "";
    for (nome in listaDeNomes) {
        if (listaDeNomes[nome].length > maior.length){
            maior = listaDeNomes[nome];
        }
    }
    return `O nome ${maior} é o maior da lista`;
}

// Exercíco 05
let numeros = [1,4,6,9,11,8];

function somaValores(listaDeNumeros) {
    let soma = listaDeNumeros[listaDeNumeros.length - 1] + listaDeNumeros[listaDeNumeros.length - 2]; 

    if (soma % 2 == 0) {
        return "A soma é um múltiplo de 2";
    }
    return "A soma não é um múltiplo de 2";
}

// Exercício 06
let nomesArray = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];

function verificaNome(listaDeNomes, nomeRecebido, numero){
    let nome = listaDeNomes[numero];

    if (nomeRecebido.toLowerCase() === nome.toLowerCase()){
        return "Acertei";
    }
    return "Não é quem eu pensava";
}

// Exercício 07
let numeros1 = [1,2,3,4,5,6,10,7];
let outrosNumeros = [5,7,9,4,2,3,9];

function qualArrayEOMaior (array1, array2){
    if (array1.length > array2.length){
        return `A maior lista é a lista cujo último elemento é: ${array1[array1.length - 1]}`;
    }
    return `A maior lista é a lista cujo último elemento é: ${array2[array2.length - 1]}`;
}

console.log(qualArrayEOMaior(outrosNumeros, numeros1));