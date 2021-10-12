/**
 * Closure é o escopo criado quando uma função é declarada. Esse escopo permite
 * que a função acesse e manipule variáveis externas à ela. Isso tudo está 
 * relacionado ao conceito de contexto léxico já apresentado: o local físico
 * em que uma função é declarada importa muito.
 * 
 * Para exemplicar o uso de closures, são definidas duas constantes constantes
 * chamadas "x": a primeira tem escopo global e valor "Global", enquanto a 
 * segunda tem escopo local e valor "Local", está dentro da função outside()
 */

const x = 'Global' // constante global

function outside() {
    const x = 'Local'

    function inside() {
        return x
    }

    return inside
}

const myFunction = outside()
console.log(myFunction())