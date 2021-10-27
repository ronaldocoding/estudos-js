/**
 * O método concat() serve para concatenar (juntar) arrays. Funciona da seguinte
 * forma: a função é chamada a partir de um array e são passados, como 
 * parâmetros, uma lista de arrays a serem concatenados ao array original. 
 * Por fim, o array resultante é retornado.
 * 
 * Como primeiro exemplo vamos unir um array de vogais a um array de consoantes, 
 * usando concat(), e ordenar os seus elementos, por meio da função sort(), para 
 * formar o alfabeto:
 */

const vogais = ['A', 'E', 'I', 'O', 'U']
const consoantes = [
    'B', 'C', 'D', 'F', 'G',
    'J', 'K', 'L', 'M', 'N',
    'P', 'Q', 'R', 'S', 'T',
    'V', 'W', 'X', 'Y', 'Z'
]
const alfabeto = vogais.concat(consoantes).sort()
console.log(alfabeto)

// [
//     'A', 'B', 'C', 'D', 'E',
//     'F', 'G', 'I', 'J', 'K',
//     'L', 'M', 'N', 'O', 'P',
//     'Q', 'R', 'S', 'T', 'U',
//     'V', 'W', 'X', 'Z'
// ]

/**
 * Como explicado em uma das primeiras threads, um array em Javascript pode ter
 * elementos de diferentes tipos, então, para o nosso segundo exemplo, vamos
 * juntar os arrays de vogais e de consoantes a um array de números, criando um
 * array alfanumérico:
 */

const numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]
const alfanumerico = numeros.concat(
    vogais, consoantes
)
console.log(alfanumerico)

// [
//     1,   2,   3,   4,   5,   6,   7,   8,
//     9,   'A', 'E', 'I', 'O', 'U', 'B', 'C',
//     'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N',
//     'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X',
//     'Z'
// ]

/**
 * Obs: o método concat() não altera nenhum dos arrays existentes, apenas 
 * retorna um array resultante da união dos arrays envolvidos na sua chamada.
 */

/**
 * Código das threads: https://github.com/ronaldocoding/estudos-js
 * 
 * Até amanhã 😎👊
 */