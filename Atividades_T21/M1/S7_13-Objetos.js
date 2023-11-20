// Exercício 01

let listaAlunos = [
    {
      nome: 'João',
      curso: 'Ciencia da Computação',
      turno: 'Noturno',
      mediaCorte: 7,
      materias: [
        {
          nome: 'Calculo I',
          avaliacoes: [6, 8, 10, 8]
        },
        {
          nome: 'Pensamento Computacional',
          avaliacoes: [6, 8, 6, 8]
        },
        {
          nome: 'Linguagem Orientada a Objetos',
          avaliacoes: [7, 8, 9, 10]
        },
        {
          nome: 'Arquitetura de Organização de Computadores',
          avaliacoes: [6, 8, 7, 8]
        }
      ]
    }
]

function foiAprovadoEmQuais(listaDeAlunos, indice) {
    const aluno = listaAlunos[indice];

    for (let i = 0; i < aluno.materias.length; i++) {
        let materias = aluno.materias[i];
        let arraySoma = materias.avaliacoes;
        let soma = arraySoma[0];
        let j = arraySoma.length;

        while (j > 1){ 
            j--;       
            soma += arraySoma[j];
        }
    
        
        let media = soma / arraySoma.length;
        console.log(`media: ${media}`)

        if (media < aluno.mediaCorte) {
            console.log(`Aluno reprovado em: ${materias.nome} e media ${media}`);
        } else {
            console.log(`Aluno aprovado em: ${materias.nome}`);
        }
    }
}

function calculaMedia(listaAlunos, indice) {
    let materiasDoAluno = listaAlunos[indice].materias;
    let notasDoAluno = [];
    let j = materiasDoAluno.avaliacoes.length

    for (let i = 0; i < materiasDoAluno.length; i++){
        while (j > 0) {
            j--;
            notasDoAluno.push(materiasDoAluno[i].avaliacoes[j])

        }

    }
}


calculaMedia(listaAlunos, 0)