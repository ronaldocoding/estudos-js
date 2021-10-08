/**
 * Funções anônimas são aquelas que não possuem um identificador próprio: elas
 * podem ser armazenadas em variáveis (ou constantes) e chamadas por meio dos 
 * seus identificadore, podem ser passadas e, ao mesmo tempo, definidas como 
 * parâmetros de outras funções e também definidas dentro de objetos.
 */

/**
 * Como exemplos, são definidas duas funções anônimas: uma para somar dois 
 * valores e outra para imprimir o resultado de uma operação (função passada
 * como parâmetro) entre dois outros valores.
 */

// Função anônima que retorna soma de dois valores
const soma = function(x, y) {
    return x + y
}

// Função anônima que retorna resultado de uma operação entre dois outros
// valores. 

// Repare que a operação, que é uma função passada como parâmetro, é 
// definida por padrão como sendo a soma() previamente criada.
const imprimir = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

/**
 * Como primeiro teste à função imprimir(), os valores 10 e 5 são passados como 
 * parâmetro, retornando o valor 15, visto que a operação padrão é a soma():
 */
imprimir(10, 5) // 15

/**
 * No segundo teste, a operação é passada por parâmetro: soma().
 * Algo redundante, mas importante para fins de aprendizado:
 */
imprimir(10, 5, soma) // 15

/**
 * No terceiro teste, uma função anônima é passada e definida, ao mesmo tempo,
 * como parâmetro da função imprimir(). Essa função recebe dois valores e 
 * retorna a diferença entre eles, ela poderia ser chamada de "subtrai":
 */
imprimir(10, 5, function(x, y) { return x - y }) // 5

/**
 * Como terceiro e último teste, uma arrow function, que sempre será anônima, é
 * passada como parâmetro. Essa função recebe dois valores e retorna o produto
 * entre eles, ela poderia ser chamada de "multiplica":
 */
imprimir(10, 5, (x, y) => x * y) // 50

/**
 * E, por fim, para exemplificar o uso de função anônimas em objetos, uma é 
 * definida dentro do objeto "pessoa" e chamada por meio da notação ponto ("."):
 */
const pessoa = {
    falar: function() {
        console.log('Olá')
    }
}

pessoa.falar() // Olá