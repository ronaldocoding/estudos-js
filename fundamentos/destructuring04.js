/**
 * 22. Operadores: destructuring - Parte 4 #javascript
 * 
 * Nessa thread vou finalizar o assunto do operador destructuring mostrando como
 * usá-lo em um array como parâmetro de uma função.
 */

// Usa o operador destructuring para: (1) definir os parâmetros, (2) definir o 
// argumento da função como array e (3) inicializar os parâmetros caso eles
// sejam passados como nulos.
function rand([min = 0, max = 1000]) {
    // Aqui o operador destructuring é usado de uma forma muito inteligente para
    // trocar os valores de min e max caso min seja maior que max. No lado
    // esquerdo é usado o operador e no lado direito um array de dois elementos 
    // é criado.
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Teste passando um array com dois elementos -> aqui o min é maior que max
console.log(rand([50, 40]))

// Teste passando apenas o primeiro elemento -> aqui o max por padrão é 1000
console.log(rand([992]))

// Teste passando apenas o segundo elemento -> aqui o min por padrão é 0
console.log(rand([, 10]))

// Teste passando um array vazio -> aqui min e max ficam com o valor padrão
console.log(rand([]))