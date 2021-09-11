/**
 * Operadores: atribuição #javascript
 * 
 * Em Javascript existe apenas um operador de atribuição, o "=", mas existem
 * variantes desse operador através de operações aritméticas.
 */

const a = 7 // Atribuição normal usando "="
let b = 3

// Atalhos para atribuição

// Uma atribuição aditiva pode ser feita usando os operadores "+" e "="
b += a // b = b + a
console.log(b) // 10

// Uma atribuição subtrativa pode ser feita usando os operadores "-" e "="
b -= 4 // b = b - 4
console.log(b) // 6

// Uma atribuição multiplicativa pode ser feita usando os operadores "*" e "="
b *= 2 // b = b * 2
console.log(b) // 12 

// Uma atribuição divisiva pode ser feita usando os operadores "/" e
// "="
b /= 2 // b = b / 2
console.log(b) // 6

// E, por fim, uma atribuição modular pode ser feita usando os operadores "%" e 
// "="
b %= 2 // b = b % 2 -> b recebe o resto da sua divisão por 2, ou seja, 0
console.log(b)