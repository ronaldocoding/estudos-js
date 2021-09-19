/**
 * 26. Operadores: unários #javascript
 * 
 * Operadores unários são aqueles que atuam apenas sobre um operando. Existem, 
 * basicamente, quatro operadores unários em Javascript: o operador de 
 * subtração, que pode mudar o sinal de um valor, o operador de negação, já 
 * comentado na última thread, e os operadores de incremento e decremento.
 * 
 * Os operadores de incremento ("++") e decremento ("--") são usados para 
 * aumentar ou diminuir um valor em uma unidade, respectivamente. Eles podem ser
 * usados de forma pós-fixada ou pré-fixada, ou seja, depois ou antes do 
 * operando.
 */

// Declara duas variáveis
let num1 = 1
let num2 = 2

num1++ // Incremento usado de forma pós-fixada
console.log(num1) // 2

--num1 // Decremento usado de forma pré-fixada
console.log(num1) // 1

// É recomendado usar a forma pós-fixada, pois ela tem menor 
// precedência sobre outros operadores de tal forma que torna o código menos 
// suscetível a erros e mais inteligível.

// O exemplo abaixo demonstra como esses erros podem ocorrer: é feito o 
// decremento de num2, que está com o valor 2, e o incremento de num1, que está 
// com o valor de 1, e eles são comparados. Pensando logicamente, o valor de 
// num2 passaria a ser 1 e o de num1 passaria a ser 2, resultando em falso, mas
// isso não acontece se o operador de decremento for usado de forma pós-fixada.

console.log(--num2 === num1++) // true

// Por causa da precedência do operador de decremento, num2 passa a ser igual a
// 1 e é comparado diretamente ao num1, antes do incremento, sendo assim, com o 
// valor 1. Esse erro ocorreu porque os operadores foram usados dentro de uma
// comparação, algo totalmente desaconselhável de se fazer.