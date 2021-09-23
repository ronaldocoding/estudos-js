/**
 * 30. Estrutura IF/ELSE #javascript
 * 
 * Na última thread a estrutura IF foi apresentada, nessa a estrutura IF/ELSE
 * será introduzida. 
 * 
 * IF/ELSE é a forma completa de uma estrutura condicional em Javascript: 
 * podemos determinar o que vai acontecer se uma condição for verdadeira usando 
 * o IF e o que vai acontecer se ela for falsa usando o ELSE ("se não", em 
 * português).
 */

/**
 * Como primeiro exemplo é definido uma função que recebe a nota de um aluno e 
 * imprime na tela se ele foi aprovado ou reprovado. Nesse caso, o aluno está
 * aprovado caso tenha nota maior ou igual a 7 e está reprovado caso o contrário
 * aconteça.
 */

const imprimirResultado = function(nota) {
    if (nota >= 7) { // SE nota for maior ou igual a 7
        console.log('Aprovado!')
    } else { // SE NÂO
        console.log('Reprovado!')
    }
}

imprimirResultado(10) // 'Aprovado!'
imprimirResultado(7) // 'Aprovado!'
imprimirResultado(6) // 'Reprovado!'

/**
 * Como segundo exemplo é feito um programa que classifica a nota de um 
 * estudante com base em intervalos.
 */

/**
 * Inicialmente, cria-se uma função associada a Number para facilitar o processo
 * de verificação. Essa função determina se um número está entre um intervalo.
 * (Aqui é usado "prototype", uma forma de associar uma função a um tipo; será 
 * explicada futuramente)
 */
Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

/**
 * Finalmente a função principal é implementada: considerando vários intervalos,
 * a nota do aluno é classificada. Caso a nota passada seja inválida, uma
 * mensagem é exibida ao usuário:
 */

const imprimirResultado02 = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Ótima nota!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Boa nota!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Má nota!')
    } else if (nota.entre(0, 3.99)) {
        console.log('Péssima nota!')
    } else {
        console.log('Nota inválida!')
    }

    console.log('FIM')
}

// Testes
imprimirResultado02(10)

// Output
// 'Ótima nota!'
// 'FIM'

imprimirResultado02(7.5)

// Output
// 'Boa nota!'
// 'FIM'

imprimirResultado02(5.85)

// Output
// 'Má nota!'
// 'FIM'

imprimirResultado02(2.1)

// Output
// 'Péssima nota!'
// 'FIM'

imprimirResultado02(-1)

// Output
// 'Nota inválida!'
// 'FIM'