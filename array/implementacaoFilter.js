// Vamos tentar implementar a função filter()

Array.prototype.filtra = function(callback, thisArg) {
    const novoArray = [] // cria novo array vazio
    for (let i = 0; i < this.length; i++) { // percorre array original
        if (callback.call(thisArg, this[i], i, this)) { // testa se verdadeiro para o filtro
            novoArray.push(this[i]) // adiciona o elemento no novo array
        }
    }
    return novoArray // retorna o novo array
}

const pessoas = [
    { nome: 'Pedro', idade: 17 },
    { nome: 'Maria', idade: 19 },
    { nome: 'Joao', idade: 15 },
    { nome: 'Carlos', idade: 25 }
]

const menores = pessoas.filtra(p => p.idade < 18)

console.log(menores)

const produtos = [
    { nome: 'Bolsa', preco: 500, fragil: true },
    { nome: 'Caderno', preco: 20, fragil: true },
    { nome: 'Mochila', preco: 350, fragil: false },
    { nome: 'Pasta de plástico', preco: 10, fragil: false },
    { nome: 'Caneta Montblanc', preco: 3500, fragil: true }
]

const caro = p => p.preco > 300
const fragil = p => p.fragil

const carosFrageis = produtos.filtra(caro).filtra(fragil)

console.log(carosFrageis)