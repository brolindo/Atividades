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
function filtraPorAcessorio(acessorio) {
    let acessorioDoCarro = [];

    for (let i = 0; i < carros.length; i++){
        if (carros[i].acessorios.includes(acessorio)) {
            acessorioDoCarro.push(carros[i]);
        } 
    }
    if(acessorioDoCarro.length === 0) {
        return `Nenhum carro possui ${acessorio}`;
    }
     return acessorioDoCarro;
}

console.log(filtraPorAcessorio("alarme"))