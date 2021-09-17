/**
 * Operadores: relacionais #javascript
 * 
 * Quando se faz um comparação entre dois valores usando um operador relacional 
 * o resultado sempre será verdadeiro ou falso. Nessa thread vou mostrar quais 
 * são esses operadores e como usá-los.
 */

// O operador "==" compara se dois valores são iguais, não importando os seus
// tipos. No exemplo abaixo se compara a string "1" com o número 1. Então, 
// apesar de serem de tipos diferentes, o resultado será verdadeiro.
console.log('1' == 1) // true

// Por outro lado, o operador "===" compara se dois valores são iguais tanto em
// valor quanto em tipo. Usando o mesmo exemplo anterior, apenas trocando o
// operador, podemos ver que o resultado agora é falso.
console.log('1' === 1) // false

// Da mesma forma, existe o operador que compara se dois valores são diferentes
// apenas em valor e outro se são diferentes tanto em valor quanto em tipo.

// O operador "!=" compara apenas se são diferentes em valor
console.log('1' != 1) // false

// O operador "!==" compara se são diferentes tanto em tipo quanto em valor
console.log('1' !== 1) // true

// E os operadores ">", "<", ">=" e "<=" comparam se um valor é maior, menor, 
// maior ou igual e menor ou igual ao outro, respectivamente.
console.log(3 > 2) // true
console.log(3 < 2) // false
console.log(3 >= 2) // true
console.log(3 <= 2) // false

// Casos especiais

// Usando o comparador apenas de valor, undefined e null são iguais já que
// "praticamente" representam a mesma coisa
console.log(undefined == null) // true

// Por outro lado, usando o comparador de tipo e valor, eles não são iguais, já
// que undefined e null não são do mesmo tipo.
console.log(undefined === null) // false -> comparação estrita

// Por fim, é recomendado usar o operador que compara tipo e valor "===", para
// evitar possíveis problemas futuros no código.