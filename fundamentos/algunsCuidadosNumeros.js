/**
 * Javascript tem um tipo para uma operação matemática que resulte em um valor
 * infinito. Esse tipo é o "Infinity".
 * 
 * Em uma divisão, quanto mais o divisor se aproxima de zero maior o resultado
 * da divisão, então o Javascript entende que o resultado da divisão de um
 * número por zero é o infinito.
 */
console.log(7 / 0)

//Output
//Infinity

/**
 * Nesse caso, o Javascript converte a string '10' para um número e realiza a
 * divisão, resultando no valor 5
 */
console.log('10' / 2)
    //console.log('10,2' / 2) -> ERRADO

//Output
//5

/**
 * Em Javascript não é possível multiplicar uma string apenas usando o operador
 * "*", como em Python
 */
console.log("Show!" * 2)

//Output
//NaN (Not a Number)

/**
 * Por conta da especificação do tipo de operação de ponto flutuante que o 
 * Javascript suporta priorizar rapidez à precisão, algumas operações 
 * gerarão imprecisões.
 */
console.log(0.1 + 0.7)

//Output
//0.7999999999999999

/**
 * Não é possível usar um número literal e aplicar uma função "toString()" a
 * ele, mas se colocá-lo entre parênteses é possível
 */
//console.log(10.toString()) -> ERRADO
console.log((10).toString()) // -> CORRETO

//Output
//10