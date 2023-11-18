function numerosParesEImpares (lista) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }
    return `A lista recebida possui ${pares} elementos pares e ${impares} elementos ímpares.`;
}


// 02
function imparesEPorcentagem (lista) {
    let impar = 0
    let totalElementos = 0;

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista[i].length; j++) {
            if (!lista[i][j] % 2 == 0) {
                impar++;
            }
            totalElementos++;
        }
    }
    let porcentagem = impar / totalElementos;

    return `O total de valores ímpares é ${impar} e corresponde a ${porcentagem}% da lista`;
}

function verificaPadrao(listaA, listaB) {
    if (listaA.length !== 10 && listaB.length !== 10){
        return "Lista fora dos padrões necessários";
    }
    let retorno = [];

    for (let i = 0; i < 10; i++) {

        if ((listaA[i] % 2 == 0 && listaB[i] % 3 == 0) 
        || listaB[i] % 5 == 0) {

        console.log(`${listaA[i]%2} ${listaA[i]%3} ${listaB[i]%5}`);
        
            retorno.push(true);
        }
        else {
            retorno.push(false);
        }
    }
    
    if (retorno.includes(false)) {
        return "Valores não permitidos encontrados";
    }
    return "Lista válida"
}

