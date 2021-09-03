/**
 * Uma função é um bloco de código nomeado, com identidicador, que agrupa uma ou
 * mais sentenças, em que são estabelecidos parâmetros de entrada (ou não), os 
 * ingredientes, que podem passados em todas as ocasiões em que a função é
 * chamada, para que no fim algo seja retornado (ou não).
 * 
 * Para se definir uma função basta utilizar a palavra reservada "function",
 * estabelecer um identificador, os seus parâmetros (ou não) e escrever o seu 
 * algoritmo.
 */

//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}


imprimirSoma(2, 3)

//Output
//5

/**
 * É possível passar apenas um parâmetro à função, ou nenhum, nesse caso o outro
 * parâmetro será definido como undefined e ao somar um número com o undefined 
 * o resultado será NaN (Not a Number), mesma situação se nenhum parâmetro
 * fosse passado.
 */

imprimirSoma(2)

//Output
//NaN

/**
 * Também é possível passar vários parâmetros, o resultado será a soma dos dois
 * primeiros, como foi definido no corpo da função, e os outros parâmetros serão
 * ignorados.
 */

imprimirSoma(2, 10, 12, 34, 1023)

//Output
//12

//Função com retorno
function soma(a, b = 0) { //inicializa b como 0
    return a + b
}

console.log(soma(1, 5))

//Output
//6

//Se passar apenas um parâmetro, o b será considerado como 0
console.log(soma(2))

//Output
//2

//Se nenhum parâmetro for passado, será retornado um NaN
console.log(soma())

//Output
//NaN