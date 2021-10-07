/**
 * Após todas as threads sobre arrow function, algumas perguntas podem surgir:
 * até que ponto o "this" é fixo? Ele vai continuar fixo mesmo se usarmos a
 * função bind() para tentar mudar sua referência? Essa thread busca sanar
 * essas dúvidas:
 */

/**
 * No caso abaixo, tem-se o seguinte: é definida uma arrow function que compara
 * a referência do "this" ao o parâmetro passado e retorna verdadeiro, se for
 * o objeto (ou módulo) o qual "this" aponta, ou false, se não for:
 */

let comparaComThisArrow = param => console.log(this === param)

/**
 * Ao testar se "this" aponta para o objeto global do Javascript (no brownser é
 * "window" e no node é "global"), a função retorna falso:
 */

comparaComThisArrow(global) // false

/**
 * Isso acontece porque uma função arrow trabalha de uma forma bem mais lógica, 
 * compara a uma função tradicional: o "this" sempre vai apontar para o objeto 
 * do contexto léxico no qual está inserido, no caso do node: o módulo.
 * 
 * Para testar isso, basta passar como parâmetro o seguinte: "module.exports",
 * que é o nome do módulo em que a função foi escrita (contexto léxico):
 */

comparaComThisArrow(module.exports) // true

// Outra forma de testar é passando "this" como parâmetro, já que ele também 
// aponta para o módulo:
comparaComThisArrow(this) // true

/**
 * Agora, o teste final, vamos usar a função bind() para tentar modificar a
 * referência do "this" da função comparaComThisArrow(), que é uma arrow
 * function.
 * 
 * Para isso vamos definir um objeto vazio e passá-lo como parâmetro da
 * função bind() para tentar tornar o "this" referenciàvel a ele:
 */
let obj = {}
comparaComThisArrow = comparaComThisArrow.bind(obj)

/**
 * Ao chamar a função com o objeto como parâmetro, percebemos que a arrow 
 * function mantém sua referência original ao módulo: falso é retornado
 */

comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true -> referência original continua

/**
 * Assim, podemos concluir, que a referência "this" de uma arrow function é
 * realmente imutável, tornando-a previsível e muito útil de se usar.
 */