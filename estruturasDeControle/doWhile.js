/**
 * A estrutura DO WHILE ("faça enquanto") é uma variante da estrutura de 
 * repetição WHILE. Seu principal diferencial é que ao menos uma execução do
 * laço é garantida, ou seja, vai acontecer.
 */

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let num = 0

do {
    num = getInteiroAleatorioEntre(-1, 10)
    console.log('O número gerado foi:', num)
} while (num != -1)

console.log('Acaba aqui a geração de números!')

// Possível output
// O número gerado foi: -1
// Acaba aqui a geração de números!