/**
 * 08.Null e undefined - #javascript
 * 
 * Para se compreender a diferença entre null e undefined primeiro é preciso 
 * entender a diferença entre atribuição por referência e  atribuição por valor.
 * 
 * Atribuição por referência ocorre quando um objeto (object) ou função 
 * (function) recebe o endereço de memória de onde está armazenado determinado
 * valor. Dessa forma, todos as mudanças que forem feitas naquele determinado 
 * endereço de memória (por meio da mudança no objeto ou  função) serão 
 * percebidas pelos objetos ou funções que o receberam.
 * 
 * Por outro lado, a atribuição por valor ocorre quando uma varíavel 
 * ou constante de um tipo primitivo (number, boolean, string) recebe o valor de
 * outra. Nesse caso, é armazenado apenas uma cópia do valor original e não o 
 * endereço de memória que o valor está armazenado. Sendo assim, as mudanças que 
 * forem feitas em uma varíavel ou constante não serão percebidas por aquelas 
 * que receberam os seus valores copiados.
 */

/**
 * No exemplo abaixo ocorre a atribuição por referência. Note que quando se
 * muda o valor do atributo "nome" no objeto "b", essa mudança também é
 * percebida pelo objeto "a", já que ambos os objetos estão apontando para o
 * mesmo endereço de memória.
 */

const a = { nome: "Ronaldo" }

//b aponta para endereço de memória em que o valor está armazenado
const b = a

//b, tendo o endereço de memória, muda o valor do atributo "nome"
b.nome = "João"

//Mudança é percebida pelo objeto "a"
console.log(a.nome)

//Output
//João

/**
 * No exemplo abaixo ocorre a atribuição por valor. Note que quando se
 * muda o valor da variável "d", a mudança não é percebida pela variável "c", já 
 * que "d" armazena apenas uma cópia do valor original e não o endereço de
 * memória.
 */

let c = 1

//"d" recebe uma cópia do valor original
let d = c

//Valor de "d" é modificado
d = d + 1

//Valor de "c" continua o mesmo

console.log(c)

/**
 * Não inicializar uma variável significa dizer que ela é indefinida, ou seja,
 * undefined.
 */

let valor //não inicializada
console.log(valor)

//Output
//undefined

/**
 * Atribuir null a uma varíavel segnifica dizer que ela não está apontando para
 * nenhum endereço de memória.
 */
valor = null

console.log(valor)

//Output
//null

/**
 * Dessa forma, se for necessário "zerar" uma variável ou constante que está
 * apontando para um endereço de memória é recomendando utilizar null.
 */

/**
 * Cuidado ao manipular variáveis que são potencialmente nulas, erros podem ser
 * gerados
 */

//console.log(valor.toString) -> gera TypeError

//Output
//TypeError: Cannot read property 'toString' of null...

const produto = {}

/**
 * Como a constante foi definida, ao tentar acessar uma propriedade que não
 * foi definida, será retornado undefined.
 */
console.log(produto.preco)

//Output
//undefined

produto.preco = 3.5
console.log(produto)

//Output
//{ preco: 3.5 }

produto.preco = undefined //evite fazer isso
console.log(produto)

//Output
//{ preco: undefined }

produto.preco = null
console.log(produto)

//Output
//{ preco: null }