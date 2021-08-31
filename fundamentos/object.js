/**
 * O object em Javacript é uma coleção de chave-valor, em que há o nome de um
 * atributo, um identificador, e um valor para esse atributo.
 * 
 * Se define um objeto por meio de um par de chaves. No exemplo
 * abaixo há uma declaração literal de um objeto de nome "prod1".
 */
const prod1 = {}

//É possível gerar atributos de forma dinâmica, ou seja, sem declaração prévia.
prod1.nome = 'Celular X'
prod1.preco = 4998.90

//Também é posível usar nome de indentificadores com espaço
prod1['Desconto Legal'] = 0.40

console.log(prod1)

//Output
//{ nome: 'Celular X', preco: 4998.9, 'Desconto Legal': 0.4 }

/**
 * Outra forma de criar um object, mais indicada. Também é possível criar
 * objetos dentro de outros objetos.
 * 
 * Atenção: os nomes dos identificadores de um objeto precisam ser únicos, mas 
 * eles não interferem nos nomes dos indentificadores de um objeto que está 
 * dentro de outro objeto.
 */

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    desconto: 0.40,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

//Output

/**
 * {
 *   nome: 'Camisa',
 *   preco: 79.9,
 *   desconto: 0.4,
 *   obj: { blabla: 1, obj: { blabla: 2 } }
 * }
 */

/**
 * JSON (Javascript Object Notation) é um formato textual para realizar 
 * interoperabilidade (comunicação) entre sistemas.
 * 
 * Sendo assim, JSON não é o mesmo que object em Javascript, apesar da notação 
 * literal de objetos ser bem semelhante a um.
 */