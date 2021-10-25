/**
 * A função filter() serve justamente para filtrar um array: o percorre e 
 * retorna um sub-array, este podendo ser menor ou igual ao array 
 * original.
 * 
 * Esse método recebe uma callback function como parâmetro (deve ser uma com 
 * retorno lógico) e disponibiliza o conteúdo e o índice dos elementos a cada 
 * iteração, assim como o próprio array para a callback function.
 */

/**
 * Como primeiro exemplo vamos filtrar todos os menores de idade de um array de
 * pessoas.
 * 
 * O nosso array é de objetos e cada objeto tem dois atributos: nome e idade:
 */

const pessoas = [
    { nome: 'Pedro', idade: 17 },
    { nome: 'Maria', idade: 19 },
    { nome: 'Joao', idade: 15 },
    { nome: 'Carlos', idade: 25 }
]

/**
 * Em seguida nós usamos filter() passando uma arrow function que retorna 
 * verdadeiro se o atributo "idade" tiver valor menor que 18:
 */

const menores = pessoas.filter(p => p.idade < 18)

console.log(menores)

// [ { nome: 'Pedro', idade: 17 }, { nome: 'Joao', idade: 15 } ]

/**
 * Como segundo exemplo nós vamos filtrar todos os produtos "caros" e frágeis
 * de uma array de produtos:
 */

const produtos = [
    { nome: 'Bolsa', preco: 500, fragil: true },
    { nome: 'Caderno', preco: 20, fragil: true },
    { nome: 'Mochila', preco: 350, fragil: false },
    { nome: 'Pasta de plástico', preco: 10, fragil: false },
    { nome: 'Caneta Montblanc', preco: 3500, fragil: true }
]

/**
 * Vamos considerar como "caros" os produtos com preço acima de 300. Então 
 * podemos criar duas funções para chamar o filter() de forma aninhada:
 */

const caro = p => p.preco > 300
const fragil = p => p.fragil


/**
 * Agora basta aplicar o filtro ao array:
 */

const carosFrageis = produtos.filter(caro).filter(fragil)

console.log(carosFrageis)

// [
//     { nome: 'Bolsa', preco: 500, fragil: true },
//     { nome: 'Caneta Montblanc', preco: 3500, fragil: true }
// ]

/**
 * Obs: filter() aceita um segundo parâmetro opcional: um "this" que referencia 
 * o contexto léxico em que a callback function deve ser executada.
 */

/**
 * Código das threads: https://github.com/ronaldocoding/estudos-js
 * 
 * Até amanhã 😎👊
 */