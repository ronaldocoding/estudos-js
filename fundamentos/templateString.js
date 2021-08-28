//Template string é uma forma mais indicada de realizar interpolação 

const nome = "Rebeca"
const concatenacao = "Olá, " + nome + "!"
const template = `Olá, ${nome}!` //código mais intelegível
console.log(concatenacao)
console.log(template)

//Output
//Olá, Rebeca!
//Olá, Rebeca!

//É possível fazer interpolação de operações matemáticas
console.log(`1 + 1 = ${1 + 1}`)

//Output
//1 + 1 = 2

/**
 * Também é possível chamar uma função dentro de um template string.
 * 
 * No caso abaixo é declarada uma arrow function, que será explicada
 * futuramente, para converter letras minúsculas para maiúsculas. 
 */
const up = texto => texto.toUpperCase()

console.log(`Ei...${up("cuidado")}!`)

//Output
//Ei...CUIDADO!