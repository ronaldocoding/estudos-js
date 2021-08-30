/**
 * O array é uma estrutura de dados unidirecional, uma cadeia de elementos
 * semelhante a um vetor na geometria.
 * 
 * Sendo assim, é possível agrupar diversos elementos em um array e acessá-los
 * através de índices que se iniciam com 0.
 * 
 * Além disso, o array em Javascript é heterogêneo, o que significa que é
 * possível armazenar todos os tipos discutidos anteriormente em um mesmo array,
 * e o tamanho de um array em Javascript também é variável, podendo crescer ou
 * diminuir.
 */

/**
 * Se usa vírgula para separar os elementos de um array durante a declaração
 */
const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])

//Output
//7.7 9.2

/**
 * Se tentar acessar um valor que não existe em um array, será retornado
 * "undefined", que será explicado futuramente.
 */

console.log(valores[4])

//Output
//undefined

/**
 * É possível adicionar um elemento a um array apenas utilizando um índice que
 * ainda não existe e indicando um valor. No exemplo abaixo o elemento
 * valores[5] é mostrado como "undefined". E ao acessar o array como um todo,
 * o elemento faltante é mostrado como <1 empty item>, indicando que um elemento
 * está vazio.
 */

valores[4] = 10
valores[6] = 15

console.log(valores[4], valores[5], valores[6])
console.log(valores)

//Output
//10 undefined 15
//[ 7.7, 8.9, 6.3, 9.2, 10, <1 empty item>, 15 ]

/**
 * Para acessar a quantidade de elementos em um array basta usar a propriedade
 * length
 */

console.log(valores.length)

//Output
//7

/**
 * Outra forma de adicionar valores a um array é utilizando a função push(). No
 * exemplo abaixo são adicionados um objeto, que será explicado no futuro, um 
 * valor booleano, um número e uma string.
 */
valores.push({ id: 3 }, false, 5, 'teste')
console.log(valores)

//Output
/**
 * [ 7.7, 8.9, 6.3, 9.2, 10, <1 empty item>, 15, { id: 3 }, false, 5, 'teste' ]
 */

/**
 * Atenção, apesar de ser possível criar arrays heterogêneos, o mais indicado é
 * criar arrays homogêneos, ou seja, um para cada tipo de dado.
 */

/**
 * Para retirar o último valor do array basta utilizar a função pop()
 */
console.log(valores.pop())

/**
 * Tenta acessar valor retirado
 */
console.log(valores[valores.length])

//Output
//undefined

/**
 * Outra forma de retirar um elemento é usar a palavra reservada delete e 
 * acessar o valor que se deseja.
 */
delete valores[9] //deleta último elemento

console.log(valores[valores.length]) //tenta acessar valor deletado

//Output
//undefined

/**
 * Em Javascript, o array é do tipo object
 */
console.log(typeof valores)

//Output
//object