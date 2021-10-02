/**
 * Um parâmetro padrão, ou valor padrão de um parâmetro, serve para garantir
 * que uma função não retorne undefined ou null, o que poderia gerar erros em um
 * programa.
 * 
 * Antes da última versão da especificação da linguagem Javascript, o 
 * ECMAScript 2015 (ou ES6), existiam diversas formas de se definir um valor
 * padrão para um parâmetro de um função, mas todas elas eram suscetíveis a
 * erros.
 * 
 * Desse modo, graças ao ES6, hoje é possível definir um valor padrão de forma 
 * bem mais elegante e segura: (mostra exemplo)
 * 
 * Como exemplo, uma função retorna a soma de três valores é definida. O valor 
 * padrão de cada parâmetro é o número 1:
 */
function soma(a = 1, b = 1, c = 1) {
    return a + b + c
}

//Testes à função
console.log(soma()) // usa o valor padrão para todos => retorna 3
console.log(soma(3)) // usa o valor padrão para b e c => retorna 5
console.log(soma(1, 2, 3)) // não usa o valor padrão => retorna 6
console.log(soma(0, 0, 0)) // não usa o valor padrão => retorna 0