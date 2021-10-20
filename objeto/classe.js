class Produto {
    constructor(nome = 'Sem nome', preco = 0) {
        this.nome = nome
        this.preco = preco
    }
}

class Loja {
    constructor(nome = 'Sem nome',
        endereco = 'Sem endereço'
    ) {
        this.nome = nome
        this.endereco = endereco
        this.produtos = []
    }

    addProdutos(...produtos) {
        produtos.forEach(
            p => this.produtos.push(p)
        )
    }

    nomesProdutos() {
        const nomes = []
        this.produtos.forEach(
            p => nomes.push(p.nome)
        )
        return nomes
    }

    valorProdutos() {
        let total = 0
        this.produtos.forEach(
            p => total += p.preco
        )
        return total
    }
}

const sapato = new Produto('Sapato', 149.9)
const camisa = new Produto('Camisa', 49.9)
const abc = new Loja('ABC', 'Rua A')
abc.addProdutos(sapato, camisa)
console.log(`Valor dos produtos: R$ ${abc.valorProdutos()}`)
console.log(`Nomes dos produtos: ${abc.nomesProdutos()}`)

// Valor dos produtos: R$ 199.8
// Nomes dos produtos: Sapato,Camisa