/**
 * Um dos pilares da Programação Orientada à Objetos (POO) é o conceito de 
 * herança. A herança ocorre quando uma classe herda todos os atributos e 
 * métodos de outra classe. Podemos chamar a primeira de "classe filha" e a
 * segunda de "classe mãe".
 */

/**
 * Como exemplo, vamos criar uma classe chamada Mae e outra chamada Filha, em 
 * que a classe Filha herda os atributos e métodos da classe Mae.
 */

/**
 * Na classe Mae temos três atributos e um método:
 */

class Mae {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    identidade() {
        return `Nome: ${this.nome} ${this.sobrenome}, idade: ${this.idade} anos`
    }
}

/**
 * Na classe Filha temos os mesmos atributos da classe Mae e o atributo 
 * "escola":
 */

class Filha extends Mae {
    constructor(nome, sobrenome, idade, escola) {
        super(nome, sobrenome, idade)
        this.escola = escola
    }
}

/**
 * Duas coisas importantes: (1) a palavra-chave "extends"
 * indica que uma classe herda a outra, no caso abaixo, "Filha herda Mae", (2)
 * super() serve para reusar a função constructor() da classe Mae.
 */

/**
 * Sendo assim, instanciamos um objeto da classe Filha da seguinte forma:
 */

const lara = new Filha('Lara', 'Costa', 3, 'ABC')

// Quando o imprimimos, podemos ver que ele herdou todos os atributos da classe
// Mae

console.log(lara)

/**
 * Filha {
 *  nome: 'Lara', 
 *  sobrenome: 'Costa', 
 *  idade: 3, 
 *  escola: 'ABC' 
 * }
 */

// E, por fim, podemos usar a funcao identidade, que foi definida na classe Mae,
// mas podemos usar usar em um objeto da classe Filha, que ela "herdou Mae":

console.log(lara.identidade())

// Nome: Lara Costa, idade: 3 anos

// Código das threads: https://github.com/ronaldocoding/estudos-js

// As threads sobre objeto, em específico, acabam aqui. Amanhã vamos começar as
// threads sobre array. Até lá 😴