/**
 * Como já dito em threads anteriores, o "this" usado em uma arrow function é 
 * fixo: sua referência ao objeto no qual a função foi definida (contexto 
 * léxico) é mantida. Sendo assim, não importa onde a arrow function seja 
 * chamada, o "this" não muda.
 * 
 * Para exemplifar, o código dessa thread é reescrito usando uma arrow function:
 */
function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
            console.log(this.idade)
    }, 1000)
}

// Ao testar a função, instanciando-a, percebe-se que o programa agiu como o
// esperado: o atributo "idade" é incrementado e impresso na tela repetidas
// vezes, sem a necessidade do uso da função bind() ou de uma constante para
// guardar a referência original de "this", a arrow function já se encarregou 
// disso.
new Pessoa

// Output
// 1
// 2
// 3
// .
// .
// .