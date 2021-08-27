/* Em Javascript os números são do tipo "number".
 * Existem alguns métodos dentro de "Number", uma função que representa números
 * de todos os tipos, que facilitam a verificação de alguns casos.
 * 
 * Um exemplo de método é o "Number.integer()" que retorna "true" se o número
 * for inteiro e "false" se ele não for. 
 */

//Uma forma simples de criar uma constante ou variável do tipo "number"
const peso1 = 1.1

/**
 * Outra forma é usando a função "Number" e passando como argumento uma string
 * que represente o número
 */
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

//Output
//1 2
//true
//true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //imprime o valor com duas casas decimais
console.log(media.toString(2)) //imprime o valor como binário 

//Output
//7.87
//111.11011110111110011101101100100010110100001110010101

console.log(typeof media)

//Output
//number