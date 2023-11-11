const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];
// Exercício 01
function retornaTodosElementos() {
    alert(listaDeElementos);
}

// Exercício 02
function retornaValorEspecifico(valor) {
    if (valor < listaDeElementos.length){
        return `O valor contido nesta posição é ${listaDeElementos[valor]}`
    }
    return 'Valor inválido';
}

// Exercício 03 
function retornarTipoElemento(valor) {
    if (typeof listaDeElementos[valor] === "number") {
        return alert(`O elemento ${listaDeElementos[valor]} é um elemento do tipo número`);
    }
    if (typeof listaDeElementos[valor] === "string") {
        return alert(`O elemento ${listaDeElementos[valor]} é um elemento do tipo texto`);
    }
}

// Exercício 04
function removeUltimoElementoString(){
    if (typeof listaDeElementos[listaDeElementos.length - 1] === "string"){
        listaDeElementos.pop()
    }
    return listaDeElementos;
}

// Exercicio 05 
function consultaPosicao(valor) {
    for(indice in listaDeElementos) {
        if (listaDeElementos[indice] === valor) {
            return `O valor procurado está na posição ${indice}`
        }
    }
    return "Valor não encontrado";
}

// Exercício 06
function removerElementoEspecifico(valor) {
    if (!listaDeElementos.includes(valor)){
        return `Elemento não encontrado`;
    } else {
        let remover = listaDeElementos.indexOf(valor);
        listaDeElementos.splice(remover, 1);
        return `Elemento ${valor} deletado com sucesso`;
    }
}

// Exercício 07
function inserirNaPosicaoCorreta(valor){
    if (typeof valor === "number" &&
        valor >= 0 &&
        valor <= 10) {
        listaDeElementos.splice(0, 0, valor);
        return "Lista atualizada com sucesso";
    } else if (typeof valor === "string") {
        listaDeElementos.push(valor);
        return "Lista atualizada com sucesso";
    }
    return "Valor invalido";
}
