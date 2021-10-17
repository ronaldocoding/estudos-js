const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

// Chama método get -> aqui é retornado 1 e depois "_valor" é 
// incrementado em uma unidade, tornando-se 2
console.log(sequencia.valor)
console.log(sequencia._valor) // 2

// Chama método set -> aqui "_valor" , que era 2, é alterado para 10
sequencia.valor = 10
console.log(sequencia._valor) // 10

// Testa condição de set 
sequencia.valor = 9 // -> chama método set e tenta alterar "_valor"
console.log(sequencia._valor) // 10 -> valor não é alterado