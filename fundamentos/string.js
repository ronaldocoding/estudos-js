/**
 * Uma string é uma cadeia de caracteres. Em Javascript pode-se delimitar uma
 * string com aspas duplas, aspas simples e crases
 */

let nome1 = "Maria" //delimitação com aspas duplas
let nome2 = 'João' //delimitação com aspas simples
let nome3 = `Pedro` //delimitação com crases

const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna caractere do índice 4 da string

//Ouput
//r

console.log(escola.charCodeAt(3)) //retorna o valor do caractere na tabela ASCII

//Output
//51

console.log(escola.indexOf("3")) //retorna o índice do caractere no parâmetro

//Output
//3

console.log(escola.substring(1)) //retorna a string a partir do índice 1

//Output
//od3r

console.log(escola.substring(0, 3)) //retorna 3 caracteres a partir do índice 0

//Output
//Cod

console.log("Escola ".concat(escola).concat("!")) //concat() junta os caracteres
console.log("Escola " + escola + "!") //outra forma de fazer a mesma coisa

//Output
//Escola Cod3r!
//Escola Cod3r!

console.log(escola.replace(3, "e")) //substitui o caracter do índice 3 por "e"

//Output
//Coder

/**
 * A função split() separa os elementos de uma string a partir de um caracter
 * como parâmetro e a transforma em um array, uma estrutura de dados que será
 * explicada no futuro.
 */
console.log("Ana, Maria, Pedro".split(","))

//Output
//[ 'Ana', ' Maria', ' Pedro' ]

console.log("3" + 2) //operador "+" tem preferência às strings -> concatenação
console.log("3" - 2) //operador "-" tem preferência aos numbers -> subtração

//Output
//32
//1