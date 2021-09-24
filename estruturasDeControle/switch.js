/**
 * 31. Estrutura SWITCH #javascript
 * 
 * Existem casos em que será necessário criar uma estrutura de seleção muito
 * grande, com muitas condições encadeadas, nesses casos é preferível usar a
 * estrutura SWITCH ao invés de usar IF/ELSE.
 * 
 * Como exemplo é definida uma função que recebe a nota de um estudante, a
 * arredonda para baixo usando a função floor() de Math e a qualifica por meio
 * de vários casos. Por fim, caso a nota passada seja maior que 10 ou menor que
 * 0, uma mensagem é exibida ao usuário informando que a nota é inválida.
 */
const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) { // arredonda nota para baixo
        case 10:
        case 9:
            console.log('Ótima nota')
            break
        case 8:
        case 7:
            console.log('Boa nota!')
            break
        case 6:
        case 5:
        case 4:
            console.log('Má nota!')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Péssima nota!')
            break
        default:
            console.log('Nota inválida')
    }
}

// Testes à função

imprimirResultado(10) // Ótima nota!
imprimirResultado(8.9) // Boa nota!
imprimirResultado(6.55) // Má nota!
imprimirResultado(2.3) // Péssima nota!
imprimirResultado(-1) // Nota inválida
imprimirResultado(11) // Nota inválida

/**
 * Observações importantes:
 * 
 * 1. Não é possível usar expressões lógicas em um SWITCH
 * 2. Não é possível usar intervalos numéricos em um SWITCH
 * 3. Caso não queira escrever um caso "default" como último caso, lembre-se de
 * usar a palavra "break" no seu final, exemplo:
 */

valor = 10
switch (valor) {
    case 1:
        console.log("É 1 (um)")
        break
    default:
        console.log("Não é 1 nem 2")
        break
    case 2:
        console.log("É 2 (dois)")
}