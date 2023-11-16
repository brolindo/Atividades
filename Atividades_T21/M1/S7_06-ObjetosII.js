const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
];

// Exercício 01
function contaTotal() {
    return carros.length;
}

console.log(contaTotal());

// Exercício 02
function precoTotal() {
    let soma = 0;

    for (let i = 0; i < carros.length; i++){
        soma += carros[i].preco;
    }
    return `A soma do preço de todos os veículos é R$${soma.toFixed(2).toString().replace('.',',')}`;
}

console.log(precoTotal());

// Exercício 03
function filtraPorMarca(marca) {
    let carrosDessaMarca = [];

    for (let i = 0; i < carros.length; i++){
        if (carros[i].marca.toLowerCase() == marca.toLowerCase()){
            carrosDessaMarca.push(carros[i]);
        }
    }
    if(carrosDessaMarca.length === 0) {
        return "Marca inexistente";
    }
    return carrosDessaMarca;
}

console.log(filtraPorMarca('ford'));

// Exercício 04

function arrayToLowerCase(arr) {
    let arrLowerCase = [];
    if (arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            arrLowerCase.push(arr[i].toLowerCase());
        }
    }
    return arrLowerCase;
}
function filtraPorAcessorio(acessorio) {
    let carrosComAcessorio = [];

    for (let i = 0; i < carros.length; i++){
        let acessorioDoCarro = arrayToLowerCase(carros[i].acessorios);

        if (acessorioDoCarro.includes(acessorio.toLowerCase()) && 
            acessorioDoCarro.length != 0) {
                carrosComAcessorio.push(carros[i]);
        } 
    }
    if(carrosComAcessorio.length === 0) {
        return `Nenhum carro possui ${acessorio}`;
    }
     return carrosComAcessorio;
}

console.log(filtraPorAcessorio("alarme"));

// Exercício 05
function eCarroCompleto() {
    let carrosCompletos = [];
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].completo) {
            carrosCompletos.push(carros[i]);
        }
    }
    return carrosCompletos;
}
console.log("ex 05");
console.log(eCarroCompleto());

// Exercício 06
function adicionaCarro() {
    let novoCarro = {
        modelo: "",
        marca: "",
        ano: "",
        cor: "",
        completo: false,
        acessorio: "",
        preco: 0
    };
    carros.push(novoCarro);
    return carros;
}

let novalista = adicionaCarro();
console.log(novalista);

// Exercício 07
function removeCarro(lista, indice) {
    if (indice >= lista.length) {
        return "Indice inválido"
    }
    
    let novaLista = [];  
    /*  Não consegui usar o metodo splice
        depois editar essa logica aqui*/
    for(let i = 0; i < lista.length; i++){
        if (i != indice) {
            novaLista.push(lista[i]);
        }
    }
    return novaLista;
}

console.log("ex 07")
console.log(carros);
console.log(removeCarro(carros, 50));

// Exercício 08
function contaCarrosNovos() {
    let carrosNovos = [];

    for (let i = 0; i < carros.length; i++){
        let anoDoCarro = parseInt(carros[i].ano);

        if (2023 - anoDoCarro <= 10) {
            carrosNovos.push(carros[i]);
        }
    }
    return carrosNovos;
}
console.log(contaCarrosNovos());

//Exercício 09
console.log("quem são os donos");
function criaPessoa(nome, telefone){
    const pessoa = {
        Nome: `${nome}`,
        Telefone: `${telefone}`
    };
    return pessoa;
}

let dono = criaPessoa("Brolin", 31996883269);

function quemSaoOsDonos (listaDeCarros, indice, pessoa) {
    listaDeCarros[indice].Donos = pessoa;
    return listaDeCarros;
}

console.log(quemSaoOsDonos(carros, 3, dono));