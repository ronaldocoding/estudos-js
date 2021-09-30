/**
 * 37. Introdução à função #javascript
 * 
 * Função em Javascript é First-Class Object. Isso significa que uma função pode
 * ser tratada como um dado. Desse modo, ela pode ser passada como parâmetro, 
 * ser tratada como retorno, ser armazenada, assim como também pode conter
 * outras funções em sua própria definição.
 * 
 * Essa thread vai mostrar as várias formas que uma função pode ser criada e
 * tratada.
 */

/**
 * Função literal: usa-se a palavra reservada "function", atribui um 
 * identificador à função, pode-se, ou não, definir parâmetros e um retorno e, 
 * obrigatoriamente, usa-se as chaves para definir o bloco de código:
 */
function fun1() {}

/**
 * Observação: uma função em Javascript sempre irá retornar algo, mesmo que a
 * palavra "return" não seja usada. Nesse caso a função retorna "undefined".
 */

/**
 * Armazenamento de uma função: é possível armazenar funções em variáveis ou
 * constantes. A diferença da função literal é que nesse caso o identificador 
 * da variável, ou constante, se torna também o identificador da função.Chama-se
 * esse tipo de função de "função anônima":
 */

const fun2 = function() {}

/**
 * Função em array: é possível armazenar uma função em um array. Para
 * executá-la basta usar o identificador do array, o índice em que está a função
 * e os parênteses (onde você pode colocar os parâmetros):
 */

const array = [function(a, b) { return a + b }, function(a, b) { return a - b }]

console.log(array[0](1, 1)) // 2
console.log(array[1](2, 1)) // 1

/**
 * Função em objeto: é possível armazenar funções em atributos de objetos. Para
 * executá-la basta usar o identificador do objeto, o ponto ("."), o identificador
 * do atributo em que a função está armazenada e os parênteses.
 */

const obj = {}
obj.falar = function() { return 'Olá' }
console.log(obj.falar()) // Olá

/** 
 * Função como parâmetro: uma função pode ser passada como parâmetro para outra.
 * No exemplo abaixo uma função é usada como parâmetro e executada dentro da
 * função que a usou.
 */
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') }) // Executando...

/**
 * Função como retorno: por fim, uma função pode tanto retornar quanto conter
 * outra função. Para invocá-la, basta chamar a função-mãe e em
 * seguida definir os valores como parâmetros para a função-filha:
 */
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3) // 6

/**
 * Também é possível armazenar a função-mãe em uma variável ou constante e
 * depois chamar a função-filha:
 */

const cincoMais = soma(2, 3)
cincoMais(4) // 9