// Função Factory com valores personalizados

function criarCarro(nome, velMax) {
    return {
        nome,
        velMax
    }
}

const ferrari = criarCarro('Ferrari Roma', 320)
const tuatara = criarCarro('SSC Tuatara', 453)

console.log(ferrari)

// { nome: 'Ferrari Roma', velMax: 320 }

console.log(tuatara)

// { nome: 'SSC Tuatara', velMax: 453 }

console.log(typeof ferrari) // object 
console.log(typeof tuatara) // object

// Função Factory com valores personalizados e um valor fixo
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.15
    }
}

const geladeira = criarProduto('Geladeira', 1500)
const fogao = criarProduto('Fogão', 1000)

console.log(geladeira)

// Output
// { nome: 'Geladeira', preco: 1500, desconto: 0.15 }

console.log(fogao)

// Output
// { nome: 'Fogão', preco: 1000, desconto: 0.15 }