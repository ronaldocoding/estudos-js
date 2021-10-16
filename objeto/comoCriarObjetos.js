// Usando notação literal
const obj1 = {}
console.log(typeof obj1)

// Output
// object

// Object em JS -> Operador new 
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(typeof obj2)

// Output
// object

// Funções construtoras -> usa new mas a função é definida por nós
function Produto(nome, preco) {
    this.nome = nome
    this.getPreco = () => preco
}

const p1 = new Produto('Lápis', 1.99)
console.log(p1.nome) // Lápis
console.log(p1.getPreco()) // 1.99

// Função Factory
function criarFuncionario(nome, salario) {
    return {
        nome,
        salario
    }
}

const f1 = criarFuncionario('João', 7980)
console.log(f1) // { nome: 'João', salario: 7980 }