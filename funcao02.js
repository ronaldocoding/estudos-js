/**
 * Um dos recursos mais poderosos da linguagem Javascripr é a possibilidade de
 * armazenar um função em uma variável ou constante
 */

//Armazeando uma função em uma constante
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Output
//5

/**
 * O uso da arrow function permite substituir a palavra reservada function e
 * até mesmo a necessidade do par de chaves e o return ao declarar uma função 
 * para ser armazenada.
 */

//Armazenando uma arrow function em uma constante
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 4))

//Output
//9

//Retorno implícito -> substitui o return
const subtracao = (a, b) => a - b

console.log(subtracao(5, 4))

//Output
//1

/**
 * Quando há apenas um parâmetro é possível fazer uma função ainda menor -> 
 * substitui os parentêses
 */
const elevaQuadrado = a => a * a

console.log(elevaQuadrado(10))

//Output
//100