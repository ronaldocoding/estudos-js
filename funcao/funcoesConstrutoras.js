/**
 * Como já dito em threads anteriores, quase tudo em Javascript é função, 
 * incluindo uma classe (uma abstração da realidade). Uma função que representa 
 * uma classe é chamada de função construtora.
 * 
 * Exemplo: define-se uma função construtora chamada "Carro" que recebe dois
 * parâmetros: o primeiro determina a velocidade máxima do carro, enquanto o 
 * segundo determina quanto a velocidade atual é aumentada a cada aceleração.
 */

function Carro(velMax = 200, delta = 5) {
    // atributo privado
    let velAtual = 0

    // método público
    this.acelerar = function() {
        if (velAtual + delta <= velMax) {
            velAtual += delta
            return true
        } else {
            velAtual = velMax
            return false
        }
    }

    // metodo público
    this.getVelAtual = function() {
        return velAtual
    }
}

const celta = new Carro
celta.acelerar()
console.log(celta.getVelAtual()) // 5

while (celta.acelerar()) {
    celta.acelerar()
}

console.log(celta.getVelAtual()) // 200

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelAtual()) // 20

console.log(typeof Carro) // function
console.log(typeof ferrari) // object