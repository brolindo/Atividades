// Exercício 01
function quadradoDe15A200() {
    for (let i=15; i<=200; i++){
        console.log(i**2);
    }
}
//quadradoDe15A200();

// Exercício 02
function somaAteCem(){
    let soma = 0;
    for (let i =1; i<= 100; i++) {
        soma += i;
    }
    return soma;
}
console.log(somaAteCem());

// Exercício 03
function divisoresDeQuatro(){
    for (let i=0; i<=200; i++) {
        if (i % 4 == 0){
            console.log(i);
        }
    }
}
divisoresDeQuatro();

// Exercício 04
function somaEMedia(){
    let soma = 0;
    let media = 0;
    let contador = 0;

    for (let i = 50; i <= 70; i += 2){
        soma += i;
        contador++;
    }
    console.log(`contador = ${contador}`);
    media = soma / contador;
    console.log(`A soma é ${soma} e a média é ${media}`);
}
somaEMedia();