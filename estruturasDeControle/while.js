/**
 * Em Javascript, e em quase todas as linguagens de programação, existem as 
 * estruturas de repetição. Essas estruturas são usadas em situações em que um 
 * determinado trecho de código deve ser executado diversas vezes.
 * 
 * A estrutura de repetição WHILE é indicada às situações nas quais não se sabe ao certo o número de repetições 
 * necessárias para se realizar uma certa tarefa.
 * 
 * Como exemplo é definida uma função que retorna um inteiro pseudoaleatório 
 * dentro de um intervalo numérico e usa-se a estrutura WHILE para gerar esses 
 * números enquanto eles forem diferentes de -1.
 */

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let num = 0

while (num != -1) {
    num = getInteiroAleatorioEntre(-1, 10)
    console.log('O número gerado foi:', num)
}

console.log('Acaba aqui a geração de números!')

// Exemplo de output
// O número gerado foi: 9
// O número gerado foi: 6
// O número gerado foi: 6
// O número gerado foi: 1
// O número gerado foi: 9
// O número gerado foi: 2
// O número gerado foi: -1
// Acaba aqui a geração de números!