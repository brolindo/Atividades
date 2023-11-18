// 01
function inserirNovosElementos (lista, elemento) {
    if (lista.length < 10  && (typeof elemento === "string" && elemento.length < 7)){
        lista.push(elemento);
        
        return `Elemento inserdo com sucesso, a lista agora é ${lista}`;
    }
    return "Não foi possivel inserir esse valor";
}

// 02
let listA = [];
let listB = [];

for (let i = 0; i < 15; i++) {
    listA.push(i);
}

console.log(listA);

function elevaAoQuadrado(listaA) {
    if (listaA.length != 15) {
        return "Tamanho da lista invalido";
    }
    for ( let i = 0; i < 15; i++) {
        listB.push(listaA[i] ** 2);
    }
}
elevaAoQuadrado(listA);
console.log(listB);