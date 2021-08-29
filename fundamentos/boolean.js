/**
 * O tipo boolean serve para armazenar valores verdadeiros e falsos para
 * facilitar verificações na programação.
 * 
 * Diferentemente de outras linguagens, o Javacript não suporta apenas true ou
 * false para definir constantes e variáveis do tipo boolean.
 */

/**
 * Literal false para definir um valor falso para a variável
 */
let isAtivo = false
console.log(isAtivo)

/**
 * Literal true para definir um valor verdadeiro para a variável
 */
isAtivo = true
console.log(isAtivo)

/**
 * Nesse caso o número 1 representa um valor verdadeiro. Em seguida é usado o
 * operador da negação da linguagem, representado por uma exclamação "!". A
 * negação serve para verdadeiro se um valor é "não verdadeiro", ou seja falso e
 * "não falso", ou seja verdadeiro. 
 * 
 * Além disso, o operador de negação também tem propriedade acumulativa. Por
 * exemplo, para se verificar se um valor é verdadeiro pode se escrever
 * "!!valor" e assim por diante.
 */
isAtivo = 1
console.log(!isAtivo) // "não verdadeiro" -> falso
console.log(!!isAtivo) // "não não verdadeiro" -> verdadeiro

/**
 * Como pode-se ver abaixo, o número 0 representa um valor falso. Sendo assim, 
 * todos os números inteiros, em contextos de uso de verdadeiro ou falso,
 * representam valores verdadeiros com exceção do 0.
 */
isAtivo = 0
console.log(!!isAtivo) //"não não falso" -> falso

/**
 * Casos em que o resultado é verdadeiro
 */
console.log(!!'verdadeiro') //string
console.log(!![1, 2, 3]) //um array
console.log(!!{}) //um objeto
console.log(!!Infinity) //o tipo Infinity

/**
 * O resultado de uma atribuição verdadeira
 */
console.log(!!(isAtivo = true))

/**
 * Casos em que o resultado é falso
 */
console.log(!!0) //número zero
console.log(!!'') //string vazia
console.log(!!null) //null, será explicado futuramente
console.log(!!NaN) //Not a Number

/**
 * undefined, será explicado futuramente
 */
console.log(!!undefined)

/**
 * O resultado de uma atribuição falsa
 */
console.log(!!(isAtivo = false))

/**
 * Usou do operador OU, "||". O operador lógico serve para verficar se ao menos
 * um valor em uma expressão é verdadeiro.
 */

/**
 * No caso abaixo o valor resultante será verdadeiro, já que ao menos um dos
 * valores resulta em verdadeiro, nesse caso a string. 
 */
console.log(!!('' || null || 0 || 'verdadeiro'))

/**
 * Em Javascript, ao usar o operador lógico OU em uma expressão da forma como
 * está abaixo resulta, se houver, o único valor verdadeiro.
 * 
 * Repare que não foi usado o operador de negação.
 */
console.log('' || null || 0 || 'verdadeiro' || 'falso')