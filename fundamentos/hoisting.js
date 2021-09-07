/**
 * Entendendo o Hoisting #javascript
 * 
 * Hoisting significa elevar, içar. Em Javascript uma variável "var" pode ser 
 * chamada antes mesmo de ser declarada, basta que ela seja declarada logo em 
 * seguida. Isso se chama hoisting: é a elevação da declaração de 
 * uma variável para o topo.
 */

// Exemplo
console.log('a = ', a)
var a = 2
console.log('a = ', a)

// Output
// undefined
// 2

// Como o Javascript interpreta
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

// Por outro lado, o hosting não ocorre com variáveis "let"

console.log('b = ', b)
let b = 2
console.log('b = ', b)

// Output
// ReferenceError: Cannot access 'b' before initialization