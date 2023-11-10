// Exercicio 01 
function renderUpToTwenty() {
    for (let i =0; i<=20; i++) {
        console.log(i);
    }
}
renderUpToTwenty();

// Exercício 02
function tenInTenToAHundred() {
    for (let i = 10; i <= 100; i += 10) {
        console.log(i);
    }
}
tenInTenToAHundred();

// Exercício 03
function oddUpToTwenty(){
    for(let i = 0; i < 20; i++) {
        if( i % 2 != 0) {
            console.log(i);
        }
    }
}
oddUpToTwenty();

function evenUpToTwenty() {
    for(let i = 0; i <= 20; i++) {
        if( i % 2 == 0) {
            console.log(i);
        }
    }
}
evenUpToTwenty();

// Exercício 05
function fromNegativeToPositive(){
    let i = -10;
    while (i <= 0){
        console.log(i);
        i++;
    }
}
fromNegativeToPositive();

//Exercício 06
function inDescendingDirection() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}
inDescendingDirection();

//Exercício 07
function toSquare(){
    for (let i = 1; i <= 10; i++) {
        console.log(i**2);
    }
}
toSquare();