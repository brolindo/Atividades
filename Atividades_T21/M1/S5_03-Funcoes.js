//Exercício 01
function hello() {
    console.log('Hello World!');
}
hello();

//Exercício 02
function testeMonitor() {
    const notaEntrega = 100;
    const notaEntrevista = 100;
    const notaPresenca = 100;

    if (notaEntrega >=100 && notaEntrevista >= 100 && notaPresenca >= 100) {
        console.log('Possivel monitor(a)');
    } else {
        console.log('Selecionar outro(a) aluno(a)');
    }
}
testeMonitor();

//Exercício 03
function qualEOMaior(numero1, numero2, numero3) {
    let maior = numero1;

    if(numero2 >= numero1 && numero2 > numero3) {
        maior = numero2;
    } else if (numero3 >= numero2 && numero3 > numero1) {
        maior = numero3;
    }
    return maior;
}
console.log(`O maior entre 5, 6 e 7 é ${qualEOMaior(5, 6, 7)}`);

//Exercício 04
function saudacao() {
    const nome = 'Brolin';
    const idade = 28;
    const sobrenome = 'Wrangler';

    alert(`Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos`);
}
saudacao();