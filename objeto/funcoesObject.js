/**
 * Em Javascript, funções podem ter outras funções. Essa thread vai listar 
 * algumas funções importantes que estão contidas na função Object.
 * 
 * Objeto utilizado nos exemplos:
 */

const pessoa = {
    nome: 'João',
    idade: 2,
    peso: 13
}

/**
 * keys() -> retorna todas as "chaves" do objeto, ou seja, todos os
 * identificadores dos atributos:
 */

console.log(Object.keys(pessoa))

// [ 'nome', 'idade', 'peso' ]

/**
 * values() -> retorna todos os "valores" do objeto, ou seja, todos os conteúdos
 * dos atributos:
 */

console.log(Object.values(pessoa))

// [ 'Rebeca', 2, 13 ]

/**
 * entries() -> retorna todos os pares chave/valor do objeto:
 */

console.log(Object.entries(pessoa))

// [ [ 'nome', 'João' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

// Percorrendo o array resultante de entries()
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/**
 * defineProperty() -> define uma propriedade de um objeto, ou seja, um par 
 * chave/valor, com maior nível de personalização:
 */

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // permite que a propriedade seja listada
    writable: true, // permite que a propriedade tenha seu conteúdo alterado
    value: '01/01/2017' // define o valor da propriedade
})

/**
 * "enumerable", "writable" e "value" são propriedades descritivas. Elas 
 * permitem ter maior controle sobre a propriedade que será adicionada ao 
 * objeto.
 */

/**
 * assign() -> copia os valores de todas as propriedades enumeráveis de um ou 
 * mais objetos-fonte para um objeto-alvo e o retorna:
 */

const destino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const objFinal = Object.assign(destino, obj1, obj2)

/**
 * No caso acima, o objeto-alvo é "destino" e os objetos-fonte são "obj1" e 
 * "obj2". Como o objeto-alvo tem um atributo de mesmo identificador de um do
 * "obj2", o "a", o valor do atributo do objeto-alvo é sobrescrito.
 */

console.log(objFinal)

// { a: 4, b: 2, c: 3 }

console.log(destino)
    // { a: 4, b: 2, c: 3 }

/**
 * freeze() -> "congela" o objeto passado como parâmetro, impedindo que as
 * propriedades sejam modificadas e que novas propriedades sejam adicionadas.
 * Em outras palavras, freeze() torna constante um objeto:
 */

Object.freeze(objFinal)
objFinal.c = 1234
objFinal.d = 61
console.log(objFinal)

// { a: 4, b: 2, c: 3 } -> inalterado