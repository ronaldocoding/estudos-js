/**
 * A função reduce() percorre um array com o intuito de extrair dele uma 
 * informação, seja a quantidade de alguma coisa, algo que cada elemento do 
 * array tem, etc. (Ela um pouquinho complicada de entender 🥶)
 * 
 * reduce() aceita como primeiro parâmetro uma callback function, assim com os
 * métodos apresentados nas últimas threads,  e um valor opcional como segundo
 * parâmetro, que indica o valor inicial de um acumulador, por exemplo.
 * 
 * Essa callback function recebe quatro parâmetros de reduce(): "acumulador", 
 * valor inicial (ou o valor do callback anterior), "valor atual", o valor do 
 * elemento atual, "índice", o índice atual e o próprio array.
 * 
 * Como primeiro exemplo, vamos contar o número de aprovados de um array de
 * alunos.
 */

// Esse é o nosso array de objetos:
const alunos = [
    { nome: 'Joao', nota: 3.1 },
    { nome: 'Maria', nota: 9.3 },
    { nome: 'Pedro', nota: 5.4 },
    { nome: 'Carlos', nota: 7.9 },
    { nome: 'Agata', nota: 8.1 }
]

/**
 * Vamos criar uma callback function que acumula o número de alunos aprovados:
 */
const contaAprovado = (acm, atual) => {
    acm += 1
    if (atual.nota < 6.0) {
        acm -= 1
    }
    return acm
}

/**
 * Por fim usamos o método reduce() passando a nossa callback function, e 
 * definimos o número de aprovados inicial como 0 (zero):
 */
const qtdAprovados = alunos
    .reduce(contaAprovado, 0)
console.log(qtdAprovados)

// 3

/**
 * Dessa forma, reduce() percorre o array e para cada elemento dele, ou seja, 
 * para cada objeto, ele chama a função "contaAprovado" que controla o 
 * acumulador do número de aprovados e passa esse acumulador para a próxima 
 * iteração. No caso, acima, o valor retornado pelo método é 3 (três aprovados).
 * 
 * Essa aqui ficou mal explicada galerinha 🥶🥶🥶🥶. Recomendo o site da 
 * mozilla para melhor entendimento: 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 * Código das threads: https://github.com/ronaldocoding/estudos-js
 * 
 * Até amanhã 🥶🥶🥶
 */