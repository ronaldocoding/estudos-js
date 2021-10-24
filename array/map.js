/**
 * A função map() serve para mapear um array e retornar um outro a partir 
 * deste. Este array retornado tem o mesmo tamanho do original, mas cada um dos
 * seus elementos foi modificado por meio de uma callback function passada como
 * parâmetro de map().
 */

/**
 * Como primeiro exemplo vamos criar um array de números e usar map() para 
 * transformá-lo em outro de mesmo tamanho, mas com os valores de seus 
 * elementos dobrados:
 */
let nums = [1, 2, 3, 4]
nums = nums.map(n => 2 * n)
console.log(nums)

// [ 2, 4, 6, 8 ]

/**
 * Observe que map() não transforma o array, mas sim retorna um array 
 * transformado. Por isso foi necessária a atribuição na segunda linha.
 */

/**
 * Assim como forEach(), map() também retornar alguns valores para serem usados
 * pela callback function. Os valores são: o conteúdo do elemento iterado, o 
 * índice do elemento iterado e o próprio array, NESSA ORDEM.
 */

/**
 * Como segundo exemplo vamos transformar um array de números em um array de 
 * "dinheiros", ou seja, vamos transformar cada elemento em uma string no 
 * formato da moeda Real:
 */

const valores = [9.9, 15.7, 10.4]
const dinheiros = valores.map(e => {
    return `R$ ${e.toFixed(2).replace('.', ',')}`
})

console.log(dinheiros)

// [ 'R$ 9,90', 'R$ 15,70', 'R$ 10,40' ]

const nomes = ['Pedro', 'Maria']
const ordena = s => [...s].sort().join('')
const maiuscula = s => s.toUpperCase()

const nomesModificados = nomes.map(ordena).map(maiuscula)

console.log(nomesModificados)

// [ 'PDEOR', 'MAAIR' ]

/**
 * Código das threads: https://github.com/ronaldocoding/estudos-js
 * 
 * Até amanhã 😎🖖
 */