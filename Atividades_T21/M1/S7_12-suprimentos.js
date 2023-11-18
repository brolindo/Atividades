const listaDeAmigos = [

]
let higiene = ['sabonete', 'shampoo', 'escova de dente', 'papel higienico', 'sabão'];
let alimentacao = ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate'];
let farmacia = ['Dipirona', 'anti-alérgico', 'repelente', 'dorflex', 'dramin'];
let lazer = ['Violao', 'baralho', 'dominó', 'cerveja', 'bola', 'qualquer coisa'];


const caixaDeSuprimentos = [
    higiene, // Higiene
    alimentacao, // Alimentação
    farmacia, // farmácia
    lazer // Lazer
];

function verificaTamanhoDaCaixa() {
    let retorno = "";
    if (caixaDeSuprimentos. length === 4) {
    
        for (let i = 0; i < caixaDeSuprimentos.length; i++) {
            if (caixaDeSuprimentos[i].length > 5) {
                retorno += "Tem itens demais, não precisamos de tantos";
            } else if (caixaDeSuprimentos[i].length < 5){
                retorno += "Precisamos de mais itens desta seção.";
            }
            retorno += "Podemos acampar"
        }
    }

    if (caixaDeSuprimentos.length < 4){
        returno += "Algum amigo ainda não retornou com os itens.";
    }

    if (caixaDeSuprimentos.length > 4) {
        retorno +=  "Acho que temos um intruso.";
    }
    return retorno;
}

console.log(verificaTamanhoDaCaixa());



