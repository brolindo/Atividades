function fibonacciNumbers() {

    let anterior = 0;
    let atual = 1;
    let proximo = 0

    console.log(anterior);
    console.log(atual);

    for (let i = 0 ; i<= 15; i++) {
        anterior = atual;
        atual = proximo;
        proximo = atual + anterior;
        console.log(proximo);
    }
}
fibonacciNumbers();

// Exercício 02 
function numeroDeGraos(){
    let graos = 1;

    for ( i = 2; i< 64; i++) {
        console.log(graos)      
        graos += graos*2;
    }
    console.log(graos);
}
numeroDeGraos();