/**
 * No ECMAScript 2015 (ES6) foi introduzido um novo tipo de função: a arrow
 * function. Essa função tem dois objetivos: ser mais curta (sintaxe reduzida) e
 * fixar a referência do "this" ao local em que a função foi escrita (contexto 
 * léxico).
 * 
 * O assunto, visto que é extenso, será divido em 4 threads, essa primeira vai 
 * ser apenas uma revisão do que já foi apresentado sobre arrow function.
 * 
 * Como primeiro exemplo, definem-se três funções que retornam o dobro de um 
 * valor passado como parâmetro: uma função anônima tradicional e duas arrow 
 * function.
 */

// Função anônima tradicional
let dobro1 = function(a) {
    return 2 * a
}

// Arrow function (com corpo e retorno explícito)
let dobro2 = (a) => {
    return 2 * a
}

// Observação: caso opte pela definição explícita de bloco por meio das chaves,
// o uso do return torna-se obrigatório

// Arrow function (sem corpo e retorno implícito)
let dobro3 = a => 2 * a

console.log(dobro1(10)) // 20
console.log(dobro2(10)) // 20
console.log(dobro3(10)) // 20

/**
 * Como segundo exemplo, são definidas três funções que retornam uma mensagem
 * fixa, a saudação "Olá": uma anônima e duas arrow:
 */

// Função anônima
let ola1 = function() {
    return 'Olá'
}

// Arrow function (usando parênteses)
let ola2 = () => 'Olá'

// Caso não queira usar os parênteses vazios, para indicar que não há
// parâmetros, você pode usar o underline ("_"). Mas atenção: ele ainda é
// um parâmetro, apenas não é utilizado como um.

// Arrow function (usando underline)
let ola3 = _ => 'Olá'

console.log(ola1()) // Olá
console.log(ola2()) // Olá
console.log(ola3()) // Olá

/**
 * Uma das maiores vantagens de se usar arrow function é o incentivo à criação 
 * de funções curtas e especialistas, isto é, que resolvem um problema pequeno e
 * muito específico. Isso ajuda no reuso das funções e na manutenibilidade do 
 * código: é mais fácil melhorar e modificar um código dividido em partes.
 */