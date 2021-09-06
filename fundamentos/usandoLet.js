/**
 * Diferentemente de "var", uma varíavel declarada com "let" tem três escopos: o
 * global, o de função e o de bloco.
 * 
 * No exemplo abaixo é mostrada a diferença: enquanto uma variável "var" poderia
 * ser acessada tanto dentro quanto fora do bloco, a variável "let" pode ser
 * acessada apenas dentro de seu bloco, não podendo ser redeclarada dentro dele.
 *  
 * Essa característica traz muito mais segurança ao seu uso, já que o Javascript
 * indicaria um erro se o programador tentasse declarar uma variável "let"
 * novamente dentro do seu bloco de origem.
 */

var numero = 1

{
    let numero = 2
    console.log('Dentro: ', numero)

}

console.log('Fora: ', numero)

//Output
//Dentro: 2
//Fora: 1

//Exemplo avançado

/**
 * Abaixo segue um exemplo que evidencia totalmente o problema de se usar "var".
 * Inicialmente um array é declarado e um loop é feito para adicionar valores a
 * ele: cada adição é uma função que imprime na tela o valor da variável "i"
 * naquele momento. E aí está o problema. A variável "i" é de escopo global,
 * então ao tentar acessar qualquer valor do array fora do loop, sempre será
 * impresso o valor de "i" atual, no caso, 10 (dez).
 */

const funcs = []

for (var i = 0; i < 10; i++) {
    /**
     * Uma função anônima é definida. Será explicada no futuro.
     */
    funcs.push(function() {
        console.log(i)
    })
}

funcs[0]() //Deveria imprimir o valor 0
funcs[9]() //Deveria imprimir o valor 9

//Output
//10
//10

//Exemplo usando "let"

/**
 * Por outro lado, ao se usar uma variável "let" o resultado esperado é 
 * alcançado. Como o escopo de "i" é limitado ao bloco em que foi definido, ao
 * tentar acessar qualquer valor do array é impresso o valor de "i" no momento
 * em que a função dentro do loop foi executada e não o valor atual, já que "i"
 * não é mais visível.
 */

const funcs2 = []

for (let i = 0; i < 10; i++) {
    funcs2.push(function() {
        console.log(i)
    })
}

funcs2[0]() //Imprime 0 corretamente
funcs2[9]() //Imprime 9 corretamente