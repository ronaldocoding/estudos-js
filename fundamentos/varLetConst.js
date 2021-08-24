/*Uma variável é um local na memória que armazena um valor
que pode ser modificado*/

/*Para declarar uma variável basta usar uma palavra reservada, "var" ou "let",
um identificador, o símbolo de recebimento, "=", e o valor*/

/*Palavra reservada "var", identificador "a", 
símbolo de recebimento "=" e valor "3"*/
var a = 3

/*"let" é uma maneira mais moderna e segura de declarar variáveis,
porque o javascript permite que uma variável declarada como "var"
seja redeclarada*/
let b = 4

//Variável "a" pode ser redeclarada
var a = 6

//Variável "b" não pode ser redeclarada, mas ter seu valor modificado
b = 8

/*Uma constante é um local na memória que armazena um valor
que não pode ser modificado*/

//Palavra reservada "const"
const c = 10

//c = 20 -> erro

console.log(a, b, c)

//Output
//6 8 10