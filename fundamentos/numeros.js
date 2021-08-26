const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

//Output
//1 2
//true
//true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //imprime o valor com duas casas decimais
console.log(media.toString(2)) //imprime o valor como binário 

//Output
//7.87
//111.11011110111110011101101100100010110100001110010101

console.log(typeof media)

//Output
//number