function criarPessoa(nome, anoNascimento, cpf, cidade, estado, logadouro) {
    const pessoa = {
        Nome: nome,
        Ano_de_nascimento: anoNascimento,
        CPF: cpf,
        Cidade: cidade,
        Estado: estado,
        Logadouro: logadouro
    };

    return pessoa;
}

function criarEscola(nome, cnpj, areaAtuacao, cidade, estado, logadouro, curso) {
    const escola = {
        Nome: nome,
        CNPJ: cnpj,
        Área_de_atuação: areaAtuacao,
        Cidade: cidade,
        Estado: estado,
        Logadouro: logadouro,
        Curso: curso
    };
    return escola;
}

function criarCurso(nome, duracao, turma, modulos){
    const curso = {
        Nome: nome,
        Duração_em_anos: duracao,
        Turma: turma,
        Módulos: modulos
    };
    return curso;
}

function criarEndereco(cidade, estado, logadouro, cep){
    const endereco = { 
        Cidade: cidade,
        Estado: estado,
        Logadouro: logadouro,
        Cep: cep
    };
    return endereco;
}

// let meuEndereco = criarEndereco("São Paulo", "SP", "Carlos Barbosa Santos", 04852515);
// console.table(meuEndereco);

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true

}
    
function obterPlaca(){
    return carro.placa;
};

const resultado1 = obterPlaca();
console.log(`obter placa: ${resultado1}`);

function verificarClasses(){
    if (carro.classes.length > 1){
        return carro.classes;
    }
    return carro.classes[0];
};

const resultado2 = verificarClasses();
console.log(`Verificar Classes: ${resultado2}`);

function potenciaReal() {
    if (carro.luxo){
        carro.potencia = carro.potencia ** 2;
    }
    return carro.potencia;
};

const resultado3 = potenciaReal();
console.log(`Potencia real: ${resultado3}`);

function adicionarNovaClasse(nomeDaClasse){
    if (carro.classes.length >= 3){
        return "Este carro não pode ter mais classes";
    }

    const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover','cupê'];

    if (!classesPermitidas.includes(nomeDaClasse.toLowerCase())){
        return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê";
    }
    if (carro.classes.includes(nomeDaClasse.toLowerCase())) {
        return `O carro já possui a classe ${nomeDaClasse}`;
    }
    carro.classes.push(nomeDaClasse);
    return `Classe ${nomeDaClasse} adicionada com sucesso`;
};

const resultado4 = adicionarNovaClasse('cupê');
console.log(`adicionar nova classe: ${resultado4}`);

function naoMaisLuxo(){
    if (!carro.estacionado) {
        return `O carro ${carro.placa} não está estacionado`;
    }
    if (!carro.luxo) {
        return `O carro ${carro.placa} não é luxuoso`;
    }
    if (carro.estacionado && carro.luxo) {
        carro.luxo = false;
        return `O carro ${carro.placa} não é considerado mais um carro luxuoso`;
    }
};

const resultado5 = naoMaisLuxo();
console.log(`Não mais luxo: ${resultado5}`);