/**
 * 23. Operadores: aritméticos #javascript
 * 
 * Nessa thread eu vou apresentar os operadores aritméticos do Javascript. Eles
 * servem, entre outras coisas, para somar, subtrair, multiplicar e dividir 
 * valores e extrair o módulo de uma divisão entre inteiros.
 */

// Os operadores aritméticos são binários, isso significa que eles operam sobre
// dois operandos.

// Usando o operador destructuring, declara quatro constantes em uma única linha
const [a, b, c, d] = [3, 5, 1, 15]

// Além de serem binários, os aritméticos são operadores infix, ou seja, ele é
// usado entre os operandos.

// No caso abaixo ocorre o seguinte: é feita a soma de "a" e "b", o resultado é
// somado com "c" e depois com "d".
const soma = a + b + c + d // 24

// Dessa forma, acontece o mesmo com as outras operações.
const subtracao = d - b // 10
const multiplicacao = a * b // 15
const divisao = d / a // 5
const modulo = a % 2 // 1 -> o resto de 3/2 é igual a 1

console.log(soma, subtracao, multiplicacao, divisao, modulo)