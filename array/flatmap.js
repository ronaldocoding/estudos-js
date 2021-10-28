const escola = [{
    nome: 'Turma A',
    alunos: [
        { nome: 'Maria', nota: 7.1 }, { nome: 'Pedro', nota: 8.5 }
    ]
}, {
    nome: 'Turma B',
    alunos: [
        { nome: 'Joao', nota: 9.5 }, { nome: 'Carla', nota: 7.9 }
    ]
}]

const getNotaDoAluno = aluno => {
    return aluno.nota
}
const getNotasDaTurma = turma => {
    return turma.alunos.map(getNotaDoAluno)
}

// Sem flatMap()
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// [ [ 7.1, 8.5 ], [ 9.5, 7.9 ] ]

// com flatMap()
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

// [ 7.1, 8.5, 9.5, 7.9 ]

/**
 * Código das threads: https://github.com/ronaldocoding/estudos-js
 * Até breve 🥶🥶🥶
 */