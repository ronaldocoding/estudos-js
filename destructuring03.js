/**
 * 21. Operadores: destructuring - Parte 3 #javascript
 * 
 * Como todo objeto é um função, o operador destruturing também pode ser usado
 * em funções. Nessa thread vou mostrar o uso do operador destructuring como 
 * parâmetro de uma função.
 */

// Objeto utilizado no exemplo
const obj = {
    max: 50,
    min: 40,
    medio: 45
}

// Aqui usa-se o destructuring para: (1) definir os parâmetros da função, (2)
// estabelecer quais atributos serão retirados do objeto que será passado 
// como parâmetro e (3) inicializa os valores caso eles sejam nulos.
function rand({ min = 0, max = 1000 }) {
    // Gera um valor pseudoaleatório entre "min" e "max"
    const valor = Math.random() * (max - min) + min

    // Retorna o maior inteiro menor ou igual ao argumento passado
    return Math.floor(valor)
}

// Objeto é passado
console.log(rand(obj))

// É possível passar um objeto de forma mais "explícita"
console.log(rand({ min: 900, max: 950 }))

// Assim como também é possível passar um objeto vazio. Nesse caso o intervalo 
// padrão (entre 0 e 1000) é utilizado.
console.log(rand({}))

// Nesse post pudemos ver que em alguns casos o operador destructuring é bem
// útil. Segue aí pra mais threads de Javascript.