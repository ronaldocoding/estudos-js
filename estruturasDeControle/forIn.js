/**
 * Em diversos momentos será necessário percorrer os atributos de objetos, ou
 * de arrays, usando laços de repetição. Nesse contexto, utilizar a variável do
 * loop FOR como índice para se acessar os elementos de um array, por exemplo, 
 * não é  recomendável. Já que erros podem ser gerados ao se usar índices que
 * ultrapassem os limites da estrutura de dados.
 * 
 * Problemas ocorrem ao se usar índices que ultrapassem os limites dessa 
 * estrutura de dados. Exemplo: em um array de tamanho 5, chamado "vogais", se 
 * tenta acessar o elemento "vogais[5]".
 * 
 * No exemplo abaixo um erro é cometido apenas por se confundir na definição da 
 * condição do FOR, usando "<=" ao invés de "<". 
 * 
 * Desse modo, tenta-se obter o elemento "numero[10]", que não existe, e  
 * "undefined" é retornado:
 */

numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= 10; i++) { // erra definição da condição
    console.log(numero[i]) // usa variável do loop como índice 
}

// Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// undefined

/**
 * 
 * Por outro lado, na estrutura FOR/IN, o código fica mais limpo e menos 
 * suscetível a erros.  
 * 
 * Ela é escrita da seguinte forma: a variável do loop é declarada, usa-se a 
 * palavra reservada "in" ("dentro") e indica-se a estrutura a ser percorrida.
 * 
 * Como consequência, a cada repetição do laço, a variável do loop recebe o 
 * índice do elemento do array automaticamente, não sendo necessário o uso 
 * perigoso da condição e do incremento manual.
 */

for (let j in numero) {
    console.log(numero[j])
}

// Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

/**
 * 
 * Observação: existem alternativas bem mais interessantes ao uso do FOR/IN para
 * se percorrer arrays, como, por exemplo, a função forEach(), que será 
 * explicada futuramente.
 */

/**
 * 
 * O uso da estrutura FOR/IN em objetos faz mais sentido. Já que ele foi criado 
 * para percorrer atributos, não índices.
 * 
 * Como exemplo, define-se um objeto pessoa com diversos atributos e estes são 
 * impressos através do usos da crase e da cifra "$" no "console.log()":
 */

const pessoa = {
    nome: 'João',
    sobrenome: "Marcos",
    idade: 40,
    peso: 80
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// Output
// nome = João
// sobrenome = Marcos
// idade = 40
// peso = 80