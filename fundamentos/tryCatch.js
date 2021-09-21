/**
 * 28. Tratamento de erro #javascript
 * 
 * Em Javascript existe uma forma de tratar erros que podem ocorrer durante a 
 * execução do código. Essa forma é o uso da estrutura "try...catch". Por meio
 * dela é possível determinar uma exceção que pode ser gerada em um programa e 
 * definir uma maneira de tratá-la.
 * 
 * No exemplo abaixo é definida uma função que recebe como parâmetro um objeto 
 * com um atributo chamado "name". Um erro é cometido de propósito para 
 * demonstrar o uso de "try...catch": é passado um objeto com um atributo
 * chamado "nome" ao invés de "name".
 */


/**
 * Para informarmos o erro ao usuário vamos precisar usar a palavra reservada
 * "throw". Essa palavra serve para lançar o erro e, por exemplo, exibir uma
 * mensagem ao usuário sobre ele. Mas também é possível lançar valores lógicos, 
 * números ou objetos. Então é definida uma função para fazer isso:
 */

function tratarErroELancar(erro) {
    throw 'Ocorreu um erro ao executar o programa...'
}

/**
 * 
 * Para usarmos o "try...catch" basta escrever "try" e abrir um bloco de código:
 * nesse bloco de código fica a parte do programa que pode gerar um erro. Também
 * é necessário escrever a palavra "catch" e abrir outro bloco de código: nesse 
 * bloco fica o tratamento do erro. 
 * 
 * No exemplo abaixo o erro é tratado chamando a função, antes definida, 
 * "tratarErroELançar", assim como também é usada a palavra reservada "finally", 
 * palavra usada para definir um bloco de código que será executado havendo erro
 * ou não.
 */

// Função com try...catch
function imprimirNomeMelhorado(obj) {
    try { // Tenta executar 
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // Pega erro, se houver
        tratarErroELancar(e) // Trata erro
    } finally { // Executa havendo erro ou não
        console.log('Final')
    }
}

// Objeto definido de forma errada
const objt = { nome: 'Ronaldo' }

// Chamada de função que geraria apenas o erro
// imprimirNome(objt) -> gera erro e apenas para o programa

// Já aqui, o erro é pego pelo catch e é mostrada a mensagem ao usuário
imprimirNomeMelhorado(objt)

/**
 * Nessa thread aprendemos que é recomendado usar a estrutura "try..catch" em
 * trechos de códigos potencialmente perigosos: o "try" serve para tentar
 * executar o programa, o "catch" serve para pegar um erro, o "throw" é capaz
 * de lançar um erro e, entre outras coisas, exibir uma mensagem ao usuário e,
 * por fim, podemos usar o "finally" para definir um trecho de código que deve
 * deve ser executado havendo erro ou não.
 */