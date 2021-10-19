/**
 * JSON (Javascript Object Notation) é um formato de dados, um dos meios mais
 * usados no mercado para interoperabilidade entre sistemas, já que ele é capaz
 * de representar dados de maneira genérica e é fácil de ser enviado de um
 * sistema para o outro.
 * 
 * Dessa forma, apesar de parecido, um JSON não é um Object em Javascript.
 * 
 * Objeto usado para o exemplo:
 */

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    soma() { return a + b }
}

// Usando a  função stringify(), podemos converter um objeto em Javascript para 
// um JSON
console.log(JSON.stringify(obj))

// Resultado:
// {"a":1,"b":2,"c":3,"d":4}

/**
 * Repare que a função soma() não aparece no JSON, isso ocorre justamente porque
 * ele é apenas uma representação textual de dados, não de comportamentos.
 */

/**
 * Para fazer o processo contrário, converter um JSON para um valor em
 * Javascript, basta usar a função parse():
 */

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

// Resultado:
// { a: 1, b: 2, c: 3 }

/**
 * Também é possível representar diversos tipos de dados em um JSON, como 
 * valores lógicos, strings, array, outros objetos, etc:
 */

console.log(JSON.parse('{"a": "string", "b": true, "c": {}, "d": [] }'))

// Resultado:
// { a: 'string', b: true, c: {}, d: [] }

/**
 * Observação: em JSON, todos os atributos devem estar entre aspas duplas, 
 * assim como os valores textuais (strings).
 */