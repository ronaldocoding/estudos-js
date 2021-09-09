/**
 * Par Nome/Valor #javascript
 * 
 * Quando uma constante, variável ou função é declarada todas elas apresentam o
 * par nome/valor (ou chave/valor), em que o nome é o identificador e o valor é
 * o conteúdo.
 */

// Nesse exemplo é definida uma constante chamada "saudacao" (nome) e com o
// conteúdo 'Olá' (valor) e uma função chamada "exec". Dentro dessa função há 
// outra constante com par nome/valor idênticos ao anterior. Isso é possível 
// porque as constantes estão em contextos léxicos diferentes.

// Um contexto léxico é um local ou nível no qual a constante ou variável foi 
// definida no código. Sendo assim, dentro de um programa existem vários
// contextos léxicos sendo executados.
const saudacao = 'Olá' // Contexto léxico 1

function exec() { // Contexto léxico 2
    const saudacao = 'Oi'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = { // Contexto léxico 3
    nome: 'Pedro', // par nome/valor
    idade: 32, // par nome/valor
    peso: 90, // par nome/valor
    endereco: { // Contexto léxico 4
        logradouro: 'Rua muito Legal', // par nome/valor
        numero: 123 // par nome valor
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)