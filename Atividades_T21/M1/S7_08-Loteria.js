// Exercício 01
let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

function verificaGanhador (nome, cpf) {
    nomeMaiusculo = nome[0].toUpperCase();

    for (let i = 1; i < nome.length; i++){
        nomeMaiusculo += nome[i];
    }
    if (ganhador.nome == nomeMaiusculo &&
        ganhador.cpf == cpf){

            return "É ganhador";
    }

    return "Não é ganhador"
}

// 02
let infRecebedores = [];

function possiveisGanhadores (nome, cpf, lista) {
    const possivelGahador = {
        Nome: nome,
        Cpf: cpf
    }

    if (verificaGanhador(nome, cpf) == "Não é ganhador") {
        lista.push(possivelGahador);
    }
    return lista.length.toString();
}


    
    
    
    
