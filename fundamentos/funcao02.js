/**
 * Um dos recursos mais poderosos da linguagem Javascript é a possibilidade de
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
 * O uso da arrow function permite substituir a palavra reservada "function", a 
 * necessidade do par de chaves, o return e até mesmo os parênteses ao declarar 
 * uma função para ser armazenada.
 */

//Usando arrow function para substituir a palavra reservada "function"
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
 * substitui os parênteses
 */
const elevaQuadrado = a => a * a

console.log(elevaQuadrado(10))

//Output
//100