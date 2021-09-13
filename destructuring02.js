/**
 * 20. Operadores: destructuring - Parte 2 #javascript
 * 
 * Como explicado na thread anterior, o operador destructuring serve para
 * desestruturar, retirar algo de uma estrutura. Além de ser usado em objetos,
 * ele também pode ser usado em arrays, como será demonstrado agora.
 */

// Array utilizado nos dois primeiros exemplos
const numeros = [10, 7, 9, 8]

// Para retirar elementos de um array basta usar o operador com colchetes
const [n1, n2, n3, n4] = numeros
console.log(n1, n2, n3, n4) // 10 7 9 8 

// Também é possível pular elementos que não deseja retirar. Basta deixar o 
// espaço entre as virgulas vazio
const [a, , c] = numeros // Pula o segundo elemento.
console.log(a, c) // 10 9

// E, por fim, um exemplo de desestruturação aninhada de arrays
const notas = [
    [7.1, 7.4, 6.4],
    [9.1, 5.4, 2.1]
]
const [, [, nota]] = notas // retira apenas o segundo elemento do segundo array
console.log(nota) // 5.4