/**
 * Operadores: destructuring - Parte 1 #javascript
 * 
 * Introduzido no ES2015, o operador destructuring serve para desestruturar. Ele
 * pode ser usado, por exemplo, para retirar os atributos de um objeto ou
 * elementos de um array.
 * 
 * Existem duas formas de escrita desse operador: no contexto de objetos ele é
 * escrito usando chaves e no âmbito de arrays usa-se colchetes.
 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/**
 * Usando chaves define-se quais atributos devem ser extraídos e após o sinal 
 * de atribuição o objeto do qual se quer extrair
 */
const { nome, idade } = pessoa

// Agora é possível acessar as variáveis nome e idade de forma mais simples
console.log(nome, idade) // Ana 5

// Outra forma de nomear as variáveis
const { nome: n, idade: i } = pessoa
console.log(n, i) // Ana 5

/**
 * Também é possível inicializar as variáveis para caso o atributo não exista 
 * no objeto. Caso não seja inicializado, o valor retornado pode ser undefined.
 */
const { sobrenome = 'Carla', bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // Carla true

// Para acessar atributos de um objeto dentro de outro objeto também é simples
const { endereco: { logradouro } } = pessoa
console.log(logradouro) // Rua ABC

/**
 * Por fim, um erro é gerado se tentar acessar, de forma aninhada, atributos que 
 * não existem.
 */
const { conta: { ag, conta } } = pessoa

// TypeError: Cannot destructure property `ag` of 'undefined' or 'null'.