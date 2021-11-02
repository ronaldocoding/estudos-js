// Vamos tentar implementar o método forEach()

Array.prototype.paraCada = function(callback) { // define uma nova função
    for (let i = 0; i < this.length; i++) { // acessa array usando "this"
        callback(this[i], i, this) // chama a função callback
    }
}

const pessoas = ['João', 'Maria', 'Pedro', 'Roberto']

pessoas.paraCada((nome, indice, array) => {
    console.log(`Seu nome é: ${nome} e seu índice é: ${indice}`)
    console.log(array)
})