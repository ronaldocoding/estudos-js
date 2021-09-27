/**
 * A estrutura FOR ("para") serve para realizar tarefas com um número 
 * predeterminado de repetições. Exemplo: imprimir uma palavra dez vezes ou 
 * imprimir os dez primeiros números naturais.
 * 
 * Uma característica importante dessa estrutura é que a condição é testada 
 * antes da primeira execução, mas o incremento da variável só é iniciado após 
 * ela. Desse modo o laço FOR não garante nem mesmo uma execução, como o DO 
 * WHILE.
 * 
 * Como primeiro exemplo é definido um array que armazena as notas de um 
 * estudante e usa-se a estrutura FOR para percorrer esse array e imprimir 
 * uma nota de cada vez.
 * 
 * Note que é usada a propriedade "length" do array para se obter o seu tamanho 
 * e a variável "i" é usada como índice para acessar os elementos do array.
 */

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]}`)
}

// Output
// Nota: 6.7
// Nota: 7.4
// Nota: 9.8
// Nota: 8.1
// Nota: 7.7

/**
 * É possível omitir a inicialização de uma variável e seu incremento na 
 * definição de um FOR, o usando como um WHILE, mas isso não é recomendado e nem
 * faz sentido:
 */

let j = 0
for (; j <= 10;) {
    console.log(j)
    j++
}

// Output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10