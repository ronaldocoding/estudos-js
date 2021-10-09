/**
 * Callback, que significa "chamar de volta", é uma função passada como 
 * parâmetro de outra, por exemplo, e, na execução desta que a chamou, ela é 
 * chamada a cada ocorrência de um determinado evento.
 * 
 * Um bom exemplo de uso de uma função callback é o método forEach().
 * Esse método recebe uma função (anônima ou não) como parâmetro e a chama para 
 * executar uma tarefa para cada um dos elementos de um array.
 */

/**
 * Para exemplificar, são definidos um array e uma função. O array chama-se
 * "empresas" e armazena três elementos, cada um contém o nome de uma empresa
 * famosa. Enquanto a função chama-se "imprimir" e, dado um nome e um índice, 
 * imprime informações na tela:
 */
const empresas = ['Google', 'Apple', 'Facebook']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

/**
 * Dessa forma, o forEach() é usado para percorrer o array "empresas" e executar 
 * a função "imprimir" para cada elemento. 
 * 
 * Repare que os parâmetros "nome" e "indice" representam, implicitamento, o 
 * valor e o índice de um elemento do array "empresas", sendo assim, é 
 * impresso o índice (somado em uma unidade) e o conteúdo de cada um deles:
 */
empresas.forEach(imprimir)

// Output
// 1. Google
// 2. Apple
// 3. Facebook

/**
 * Como dito antes, também é possível passar uma função anônima, tradicional ou 
 * arrow, como parâmetro do forEach(). 
 * 
 * A arrow function definida abaixo imprime uma frase mais elaborada para cada 
 * elemento do array "empresas":
 */

empresas.forEach((nome, indice) => {
    console.log(`O nome da ${indice + 1}ª empresa é: ${nome}`)
})

// Output
// O nome da 1ª empresa é: Google
// O nome da 2ª empresa é: Apple
// O nome da 3ª empresa é: Facebook

/**
 * Observação: o forEach é um método do objeto Array, logo, só pode ser usado em
 * arrays.
 */