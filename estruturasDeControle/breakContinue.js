/**
 * A palavra reservada "break" já foi usada na thread sobre SWITCH. Ela é capaz 
 * de causar um desvio de fluxo no código: algumas linhas eram ignoradas e a 
 * execução do programa continuava a partir do fim da "área" do "break".
 * 
 * Dessa forma, o "continue" funciona de forma semelhante: ao usá-lo, dentro de 
 * um laço de repetição, todas as próximas linhas de código são ignoradas e 
 * inicia-se a execução seguinte do loop.
 * 
 * Como exemplo do uso de "break", é definido um array com os números naturais 
 * de 1 até 10. Após isso é feito um loop FOR, em que, ao chegar na posição 5 
 * da estrutura de dados, a repetição é parada por meio do uso dessa palavra 
 * reservada:
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) { // se o elemento for de índice 5 => nums[5] é igual a 6
        break // age sobre o loop, o parando
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}

// Output
// Índice 0 = 1
// Índice 1 = 2
// Índice 2 = 3
// Índice 3 = 4
// Índice 4 = 5

/**
 * Usando o mesmo array, é feito um loop FOR para se exemplificar o uso de 
 * "continue": ao chegar na posição 5 da estrutura de dados, a execução das 
 * próximas linhas é ignorada e a repetição segue adiante por meio do uso dessa 
 * palavra reservada:
 */

for (let y in nums) {
    if (y == 5) { // se o elemento for de índice 5 => nums[5] é igual a 6
        continue // interrompe essa execução => não imprime nums[5]
    }
    console.log(`Índice ${y} = ${nums[y]}`)
}

// Output
// Índice 0 = 1
// Índice 1 = 2
// Índice 2 = 3
// Índice 3 = 4
// Índice 4 = 5
// Índice 6 = 7
// Índice 7 = 8
// Índice 8 = 9
// Índice 9 = 10