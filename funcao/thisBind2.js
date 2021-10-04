/**
 * Na thread passada foi mostrada uma forma de se usar bind ao passar uma
 * função, que pertencia a um objeto e usava "this", para uma constante. Mas há
 * casos em que é necessário chamar essa mesma função dentro de outra na 
 * definição do objeto.
 * 
 * No exemplo abaixo é criada uma função que contém um atributo chamado "idade".
 * Em seguida é chamada uma função chamada setInterval(), ela serve para fazer
 * algo repetidas vezes a cada certo intervalo de tempo passado como parâmetro 
 * (em milissegundos). Nesse caso, uma função anônima é o parâmetro de
 * setInterval().
 * 
 * É aí que está o problema: essa função anônima acessa o atributo "idade" da 
 * função Pessoa(), o incrementa em uma unidade e o imprime em seguida. Com o 
 * uso de setInterval(), é esperado que o atributo seja incrementado e impresso 
 * na tela repetidas vezes, mas isso não acontece, porque, ao instanciar a 
 * função Pessoa() e executar a chamada à função setInterval(), a referência que
 * "this" fazia ao atributo "idade" é perdida.
 */

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
            console.log(this.idade)
    }, 1000)
}

// Como resultado, a cada repetição que setInterval() executa, é impresso NaN
// (Not a Number).
new Pessoa

// Output
// NaN
// NaN
// NaN
// .
// .
// .

/**
 * Existem duas formas para se resolver esse problema: usando a função bind() ou
 * usando uma constante que guarda a referência original de "this".
 * 
 * Usando bind(), o código fica assim:
 */

function Pessoa2() {
    this.idade = 0

    setInterval(function() {
        this.idade++
            console.log(this.idade)
    }.bind(this), 1000)
}

// Como resultado, tem-se o esperado: o atributo "idade" é impresso e 
// incrementado repetidas vezes:
new Pessoa2

// Output
// 1
// 2
// 3
// 4
// 5
// .
// .
// .

/**
 * A outra forma, também muito utilizada, é declarar uma constante, normalmente
 * chamada de "self", para armazenar a referência original de "this" à função
 * Pessoa(). Fazendo isso, o código fica assim:
 */

function Pessoa3() {
    this.idade = 0
    const self = this

    setInterval(function() {
        self.idade++
            console.log(self.idade)
    }, 1000)
}

// Como esperado, tem-se o mesmo resultado de se usar a função bind(): o
// atributo é impresso e incrementado repetidas vezes:

new Pessoa3
// Output
// 1
// 2
// 3
// 4
// 5
// .
// .
// .