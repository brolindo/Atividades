//Exercício 01
function buscaPalavraAntiga(frase, palavraAntiga, palavraNova){
    
    return frase.replaceAll(`${palavraAntiga}`, `${palavraNova}`);
}

console.log(buscaPalavraAntiga('a casa da casada é melhor que minha casa', 'casa', 'mala'));

// Exercício 02
function calculaMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    return media.toFixed();
}
console.log(calculaMedia(10.5,11,12));

// Exercício 03
function valorTotalCompra(valorUnitario, quantidade){
    let desconto = 1;
    if ( quantidade >= 5){
        desconto = 0.9;
    }
    if (quantidade >= 10) {
        desconto = 0.8;
    }
    let valorTotal = `${(valorUnitario * quantidade * desconto).toFixed(2)}`;
    valorTotal = valorTotal.replaceAll('.', ',');
    return `O valor total da compra é R$ ${valorTotal}`;
}
console.log(valorTotalCompra(10,3))
console.log(valorTotalCompra(10,6))
console.log(valorTotalCompra(10,25))