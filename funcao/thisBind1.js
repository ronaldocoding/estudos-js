/**
 * Muitas linguagens tem uma palavra reservada que serve para referenciar um 
 * objeto dentro de si mesmo, dentro do seu próprio contexto de execução. Em 
 * Javascript essa palavra é "this".
 * 
 * O objeto que "this" aponta pode variar quando se usa funções definidas de 
 * maneira tradicional (usando function e tudo mais) e não varia quando se usa
 * arrow functions, nesse caso o "this" é definido de acordo com o local no qual
 * a função foi feita (contexto léxico).
 * 
 * Para fixar o objeto o qual "this" aponta (em funções tradicionais) usa-se a 
 * função bind().
 * 
 * Para exemplificar o uso de bind(), é definido um objeto que contém uma função
 * que usa "this" para referenciar o atributo "saudacao" dessa função.
 */

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

// Ao acessar essa função o conteúdo de "saudacao" é impresso normalmente
pessoa.falar() // Bom dia!

/**
 * Porém, ao armazenar a função em uma constante, a referência que "this" tinha
 * ao atributo "saudacao" do objeto "pessoa" é perdida. Dessa forma, ao 
 * chamarmos a função através da constante, o trecho de código que contém o uso
 * do "this" será executado, mas a referência não mais existe, "undefined" é
 * retornado:
 */
const falar = pessoa.falar // undefined
falar()

/**
 * Para resolver esse problema, basta usar a função bind() ao armazenar a função
 * "falar" na constante e indicar o objeto que o novo "this" deve referenciar 
 * entre os parênteses.
 */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia!

/**
 * Observação: a função bind() não altera nada da função "falar", ela 
 * simplesmente retorna uma nova função que vincula o "this" ao objeto passado
 * como parâmetro.
 */