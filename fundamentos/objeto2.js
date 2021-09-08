/**
 * Função vs objeto - #javascript
 * 
 * Uma função em Javascript não é apenas um bloco de código que exerce
 * determinada funcionalidade simples, como somar inteiros, ela também pode ser 
 * um molde, uma abstração da realidade com seus próprios atributos e rotinas 
 * (comportamentos).
 * 
 * Por outro lado, um objeto é uma instância de uma função. É quando se define os
 * valores dos atributos antes declarados. Uma função pode ser instanciada 
 * quantas vezes forem necessárias.
 */

// Instancia um objeto a partir de um função da API padrão
console.log(typeof Object) // function
console.log(typeof new Object) // object

const Cliente = function() {}

// Instancia um objeto a partir de uma função definida pelo programador
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

/**
 * No Ecmascript 2015 introduziu-se as classes. Uma classe em Javascript é 
 * apenas um detalhe de sintaxe, no fundo continua sendo uma função. Em outras
 * palavras: é um sintax suggar, um tipo de construção feita para "adocicar" o 
 * código, ou seja, fazer algo de maneira mais simples. Nesse caso serve para 
 * indicar que aquela função é uma abstração da realidade, uma classe.
 */
class Produto {} // ES 2015 (ES6)

// Instancia um objeto a partir de uma classe
console.log(typeof Produto) // funtion
console.log(typeof new Produto) //object