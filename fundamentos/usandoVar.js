/**
 * As variáveis declaradas usando a palavra reservada "var" são visíveis mesmo
 * fora do bloco em que foram declaradas, ou seja, elas são de escopo global.
 */


{
    {
        {
            { var sera = 'Será:??' }
        }
    }
}

console.log(sera)

/**
 * No entanto, quando se declara uma varíavel dentro de uma função, mesmo uma
 * declarada com "var", o seu escopo é limitado a esse bloco de código, não
 * podendo ser acessada fora dele.
 */

function teste() {
    var local = 123
}

teste()

//console.log(local) -> ERRO

/**
 * Dessa forma, se uma variável for declarada com "var" fora de uma função, ela
 * se torna uma variável global, podendo ser acessada em qualquer lugar do 
 * código. Isso pode se tornar um problema em programas grandes, já que o
 * programador pode acabar sobrescrevendo uma varíavel importante e nem vai
 * saber disso, visto que o Javascript não vai apontar erro.
 * 
 * Amanha vou fazer uma thread explicando porque usar "let" é melhor.
 */