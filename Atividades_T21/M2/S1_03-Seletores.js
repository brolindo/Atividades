// exercício 01
const ingredientes = document.getElementById("ingredients");

console.log(ingredientes);

// Exercício 02
const titulo_1 = document.querySelector("h1");
console.log(titulo_1);

// Exercicio 03
const receita = document.getElementsByClassName("recipe");
console.log(receita);

// Exercício 04
const subtitles = document.getElementsByTagName("h2");

for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].style.color = "blue";
}

// Exercício 04
const inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.borderColor = "red";
}