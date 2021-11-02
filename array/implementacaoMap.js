// Vamos tentar implementar a função map()

Array.prototype.mapeia = function(callback) {
    const novoArray = this // novo array é inicalmente idêntico ao atual
    for (let i = 0; i < this.length; i++) { // percorre array atual
        novoArray[i] = callback(this[i], i, this) // modifica novo array
    }
    return novoArray // retorna novo array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Borracha", "preco": 7.50 }'
]

const converteParaObjeto = json => JSON.parse(json)
const isolaPreco = objeto => objeto.preco
const precosCarrinho = carrinho.mapeia(converteParaObjeto).mapeia(isolaPreco)
console.log(precosCarrinho)