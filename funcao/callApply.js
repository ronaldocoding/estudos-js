/**
 * Como já mostrado em threads anteriores, existem diversas formas de se chamar
 * uma função, seja diretamente no escopo global, a partir de um objeto ou até
 * mesmo por meio de outras funções.
 * 
 * Os métodos call() e apply() são mais outras formas de se chamar funções em 
 * Javascript. Eles fazem a mesma coisa mas de uma forma diferente: aplicam 
 * uma função, pertencente ao objeto do contexto léxico em que foi declarada, a
 * outro objeto.
 * 
 * Exemplo: definimos uma função chamada getPreco() que recebe por parâmetro o
 * valor do imposto e a moeda de um determinado produto e retorna uma string 
 * formatada do preço desse produto com desconto:
 */

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

/**
 * Repare que getPreco() foi definida no escopo global, ou seja, as propriedades
 * "preco" e "desconto" devem pertencer a esse escopo.
 * 
 * Desse modo, antes de chamarmos essa função no contexto léxico global, devemos
 * criar e definir os valores dessas propriedades: 
 */

global.preco = 20
global.desconto = 0.1

// Ao chamarmos getPreco(), no escopo global, temos como resultado o valor 20, 
// com desconto de 10%, imposto zero (padrão) e moeda Real(padrão):
console.log(getPreco()) // R$ 18

// E se quisermos aplicar essa função getPreco() a outro objeto que não seja o
// "global"? Basta usarmos call() ou apply().

/**
 * Para esse exemplo, definimos um objeto chamado "carro", com atributos 
 * homônimos às propriedades usadas em getPreco():
 */

const carro = { preco: 50000, desconto: 0.20 }

/**
 * Se os valores-padrão dos parâmetros "imposto" e "moeda" forem suficientes, 
 * basta fazer isso:
 */

console.log(getPreco.call(carro)) // R$ 4000
console.log(getPreco.apply(carro)) // R$ 4000

/**
 * Caso contrário, é preciso se atentar às diferenças entre call() e apply().
 */

// Ao usar call(), os argumentos da função a ser chamada são passados
// diretamente, cada um, como parâmetros do método: 
// (inserir exemplo com pseudocódigo)

// Ao usar apply(), os argumentos da função a ser chamada são passados
// todos dentro de um único array como parâmetro do método:
// (inserir exemplo com pseudocódigo)

// Sendo assim, usando call(), para 15% de desconto e moeda Dólar, ficaria 
// assim:
console.log(getPreco.call(carro, 0.15, '$')) // $ 46000

// E usando apply(), para os mesmos pârametros anteriores, ficaria assim:
console.log(getPreco.apply(carro, [0.15, '$'])) // $ 46000

// Todos os códigos de exemplo dessa thread e das anteriores estão disponíveis
// nesse repositório do meu github: https://github.com/ronaldocoding/estudos-js

/**
 * Essa foi a última thread sobre funções, em específico, as próximas vão ser
 * sobre objeto (orientação à objeto) e array.
 * 
 * Até amanhã 🤓✌
 */