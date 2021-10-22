const carros = ['Fusca', 'Camaro', 'Chevete', 'Celta', 'HB20']

/**
 * pop() -> remove o último elemento do array
 */
carros.pop()
console.log(carros)

// [ 'Fusca', 'Camaro', 'Chevete', 'Celta' ]

/**
 * push() -> adiciona um elemento ao final do array
 */
carros.push('Onix')
console.log(carros)

// [ 'Fusca', 'Camaro', 'Chevete', 'Celta', 'Onix' ]

/**
 * shift() -> remove o primeiro elemento do array
 */
carros.shift()
console.log(carros)

// [ 'Camaro', 'Chevete', 'Celta', 'Onix' ]

/**
 * unshift() -> adiciona um elemento ao início do array
 */
carros.unshift('Civic')
console.log(carros)

// [ 'Civic', 'Camaro', 'Chevete', 'Celta', 'Onix' ]

/**
 * splice() -> pode adicionar e remover elementos do array: o primeiro 
 * parâmetro indica o índice, o segundo parâmetro indica quantos elementos vão
 * ser deletados e o terceiro parâmetro é um lista de elementos a serem 
 * adicionados. Sendo assim, é possível adicionar e deletar ao mesmo tempo.
 */

// Para apenas adicionar, definimos o índice 2 como início, em que nenhum 
// elemento vai ser removido e dois carros vão ser adicionados:
carros.splice(2, 0, 'Land Rover', 'BMW')
console.log(carros)

// [ 'Civic', 'Camaro', 'Land Rover', 'BMW', 'Chevete', 'Celta', 'Onix' ]

// Para apenas remover, definimos o índice 3 como início e que um elemento vai 
// ser deletado, ou seja, o elemento de índice 3:
carros.splice(3, 1)
console.log(carros)

// [ 'Civic', 'Camaro', 'Land Rover', 'Chevete', 'Celta', 'Onix' ]

/**
 * slice() -> retorna um novo array gerado a partir de dois parâmetro: o 
 * primeiro indica o índice de início do "corte" e o segundo indica o índice 
 * do fim do "corte".
 */

// Usando apenas o primeiro parâmetro
const algunsCarros = carros.slice(2)
console.log(algunsCarros)

// ['Land Rover', 'Chevete', 'Celta', 'Onix']

// Usando os dois parâmetros
const menosCarros = carros.slice(1, 4)
console.log(menosCarros)

// [ 'Camaro', 'Land Rover', 'Chevete' ]

/**
 * Repare que o elemento do índice de fim do "corte" não entra no array 
 * resultante.
 */