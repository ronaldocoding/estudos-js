/**
 * 25. Operadores: lógicos #javascript
 * 
 * Para entender os operadores lógicos é primeiro preciso entender as operações
 * lógicas e as tabela-verdade. 
 * 
 * Existem três operadores lógicos em Javascript: o de conjunção ("&&"), o de
 * disjunção ("||") e o de negação ("!").
 * 
 * Operações lógicas feitas com o operador de conjunção resultam em verdadeiro
 * apenas quando todas as proposições forem verdadeiras.
 * 
 * Operações lógicas feitas com o operador de disjunção resultam em verdadeiro
 * quando pelo menos uma das proposições é verdadeira.
 * 
 * Por outro lado, como o operador de negação é unário, então opera apenas sobre 
 * um operando. Nesse caso, a operação lógica terá valor verdadeiro quando a
 * proposição for verdadeira e vice-versa.
 * 
 * No exemplo abaixo é feita uma função para determinar a conjunção e disjunção
 * de duas proposições e a negação de uma.
 */

function tabelaVerdade(proposicao1, proposicao2) {
    const conjuncao = proposicao1 && proposicao2
    const disjuncao = proposicao1 || proposicao2
    const negacao = !proposicao1 // operador unário

    // Retorna um objeto com todas as contantes.
    return { conjuncao, disjuncao, negacao }
    // A partir do Ecmascript 2015 tornou-se possível omitir o nome dos 
    // atributos. Por padrão o nome do atributo vai ser o mesmo da constante, 
    // assim como seu valor.
}

// Resultado para duas proposições verdadeiras
console.log(tabelaVerdade(true, true))

// Output
// {
//    conjuncao: true,
//    disjuncao: true,
//    negacao: false
//  }

// Resultado para uma proposição verdadeira e a outra falsa
console.log(tabelaVerdade(true, false))

// Output
// {
//    conjuncao: false
//    disjuncao: true
//    negacao: false
//}

// Resultado para duas proposições falsas
console.log(tabelaVerdade(false, false))

// Output
//{
//    conjuncao: false
//    disjuncao: false
//    negacao: true
//}