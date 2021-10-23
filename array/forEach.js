/**
 * O método forEach() é uma ótima forma de se percorrer arrays em Javascript.
 * Vou mostrar alguns exemplos de uso dessa função nessa thread.
 * 
 * De início, é importante dizer que o método forEach() não só percorre o array,
 * como também retorna o conteúdo do elemento, o índice do elemento e o próprio
 * array a cada iteração, nessa ordem.
 * 
 * Array usado nos exemplos:
 */
const pessoas = ['João', 'Maria', 'Pedro', 'Roberto']

/**
 * No exemplo a seguir, definimos uma função anônima tradicional e "inline", ou
 * seja, ela é definida no momento em que é passada como parâmetro para o 
 * forEach(). Ela é uma "callback function", assunto iniciado nessa thread:
 * https://twitter.com/ronaldocoding/status/1446679608955445257?s=20
 */

/**
 * Sendo assim, a cada iteração de elementos do array "pessoas", a função é 
 * chamada e uso os retornos do forEach() para nos mostrar três informações:
 * o conteúdo do elemento iterado, o índice do elemento iterado e o próprio 
 * array:
 */

pessoas.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
})

// 1: João
// [ 'João', 'Maria', 'Pedro', 'Roberto' ]
// 2: Maria
// [ 'João', 'Maria', 'Pedro', 'Roberto' ]
// 3: Pedro
// [ 'João', 'Maria', 'Pedro', 'Roberto' ]
// 4: Roberto
// [ 'João', 'Maria', 'Pedro', 'Roberto' ]

/**
 * No próximo exemplo fazemos algo mais simples: passamos como parâmetro do
 * forEach() uma arrow function, assunto iniciado na thread abaixo, que imprime
 * o conteúdo de cada elemento iterado: 
 * https://twitter.com/ronaldocoding/status/1445223844361510917?s=20
 */

pessoas.forEach(nome => console.log(nome))

// João
// Maria
// Pedro
// Roberto

/**
 * E, como último exemplo, armazenamos uma função anônima tradicional em uma 
 * constante e a passamos como parâmtro do forEach(). Essa função faz algo 
 * simples: mostra uma pequena mensagem, a cada elemento iterado, usando o 
 * conteúdo e o índice dos elementos:
 */

const exibirPessoas = function(nome, indice) {
    console.log(`${indice + 1}ª pessoa: ${nome}`)
}

pessoas.forEach(exibirPessoas)

// 1ª pessoa: João
// 2ª pessoa: Maria
// 3ª pessoa: Pedro
// 4ª pessoa: Roberto

/**
 * Obs: é importante ressaltar que o forEach() retorna o conteúdo, o índice e o
 * array à callback function NESSA ORDEM. Ou seja, se você quiser usar apenas o
 * índice, vai ter que usar uma callback function que tenha dois parâmetros: um
 * para receber o conteúdo, que você não quer usar, e outro para receber o 
 * índíce, que esse sim você quer usar.
 */

pessoas.forEach((nome, indice) => console.log(indice))

// 0
// 1
// 2
// 3

/**
 * Código das threads: https://github.com/ronaldocoding/estudos-js
 * 
 * Até amanhã 🥶🥶🥶
 */