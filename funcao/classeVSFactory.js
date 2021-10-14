// Classe
class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa1('João')
p1.falar()

console.log(typeof p1)

// Função construtora
function Pessoa2(nome) {
    this.nome = nome

    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}

const p2 = new Pessoa2('Pedro')
p2.falar()

console.log(typeof p2)

// Função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = criarPessoa('Maria')
p3.falar()

console.log(typeof p3)