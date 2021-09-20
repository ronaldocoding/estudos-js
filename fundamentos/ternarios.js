/**
 * 27. Operadores: ternário #javascript
 * 
 * O operador ternário pode ser usado em Javascript para diminuir ou
 * simplificar um trecho de código. Esse operador é composto por dois
 * caracteres: o ponto de interrogação ("?") e os dois pontos (":").
 * 
 * Ele funciona como uma estrutura condicional: se uma determinada proposição 
 * lógica for verdadeira, o valor após o ponto de interrogação é retornado, se 
 * não for verdadeira, o valor após os dois pontos é retornado.
 * 
 * No exemplo abaixo é definida uma função que recebe como parâmetro a nota de
 * um aluno e determina se ele está aprovado ou reprovado usando o operador
 * ternário.
 * 
 * Repare que é feita uma proposição lógica: a nota é maior ou igual a 7. Se
 * for verdadeira, a função retorna a string "Aprovado", se for falsa, a função 
 * retorna a string "Reprovado".
 */

// Cria arrow function "resultado"
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// Testes
console.log(resultado(7.1)) // 'Aprovado'
console.log(resultado(6.9)) // 'Reprovado'