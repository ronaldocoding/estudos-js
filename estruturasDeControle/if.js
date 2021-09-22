/**
 * 29. Usando estrutura IF #javascript
 * 
 * Em Javascript existem estruturas para controlar como um determinado trecho de
 * código deve ser executado. Nessa thread eu vou falar sobre a estrutura
 * condicional IF.
 * 
 * A estrutura IF ("se", em português), serve para determinar se uma parte do
 * programa deve ou não ser executada a partir de uma condição/proposição
 * lógica.
 * 
 * No primeiro exemplo é definida uma função que recebe uma nota de um estudante 
 * e somente a imprime se ela for maior ou igual a 7 (sete):
 */

function boaNota(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

// A função é testada passando uma nota maior que 7 (sete) e outra menor. Repare
// que na segunda tentativa nada é impresso na tela, já a condição lógica não
// foi satisfeita:

boaNota(8.1) // 'Aprovado com 8.1'
boaNota(6.1) // (não imprime nada)

// Esse segundo exemplo serve para mostrar que a estrutura IF não verifica
// apenas se uma condição lógica é verdadeira, mas também se um determinado
// valor é visto como verdadeiro ou falso em Javascript. (Assunto que foi 
// tratado) nessa thread aqui:

// A função "verdade" imprime uma mensagem ao usuário apenas se o valor passado
// como parâmetro for verdadeiro.

function verdade(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

// Testes da função
verdade() // nada é passado -> undefined -> false -> nada é impresso
verdade(null) // null -> false -> nada é impresso
verdade(NaN) // NaN (Not a Number) -> false -> nada é impresso
verdade('') // string vazia -> false -> nada é impresso
verdade(0) // 0 -> false -> nada é impresso
verdade(-1) // -1 -> true -> 'É verdade... -1'
verdade('?') // string preenchida -> true -> 'É verdade... ?'
verdade([]) // array -> true -> 'É verdade... '
verdade([1, 2]) // array -> true -> 'É verdade... 1,2'
verdade({}) // object -> true -> 'É verdade... [objetct Object]

// É importante entender como funciona a definição do bloco de código da
// estrutura IF para evitar erros: se você decidir não usar chaves, apenas a 
// sentença de código exatamente após o IF será considerada parte dele.

// No terceiro exemplo é definida uma função "teste1" em que não são usadas
// chaves na estrutura IF: somente se o número passado como parâmetro for maior 
// que 7 ele será impresso, porém, a próxima sentença de código será sempre
// executada, imprimindo 'Final'. 

function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')
}

// Como testes à função, são feitas duas chamadas: na primeira é passado um
// número menor que 7, já na segunda é passado um número maior. Repare que a
// mensagem 'Final' sempre é impressa, visto que ela não faz parte da estrutura
// IF.

teste1(6)

// Output
// 'Final'

teste1(8)

// Output
// 8
// 'Final'