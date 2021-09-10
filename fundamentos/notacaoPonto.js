/**
 * 17. Notação ponto #javascript
 * 
 * A notação ponto é muito importante, é através dela que
 * acessamos membros de uma função, de um objeto ou de uma classe.
 */

// Notação ponto sendo usada para acessar o método log() do objeto "console" e o 
// método ceil() do objeto "Math", ambos da API da linguagem
console.log(Math.ceil(6.1))

// Notação ponto usada tanto para definir dinamicamente um atributo do objeto 
// "obj1" quanto para acessá-lo
const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

// Notação ponto usada para definir e acessar um atributo de uma função
function Obj(nome) {
    this.nome = nome
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)