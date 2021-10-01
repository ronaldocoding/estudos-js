/**
 * Diferentemente de outras linguagens, Javascript é bem mais flexível no que se
 * refere aos parâmetros e retornos de funções. É possível definir uma função
 * com dois parâmetros e, ao chamá-la, passar apenas um, ou nenhum, por exemplo.
 * Assim como também é possível tornar o retorno de uma função opcional, ou
 * seja, em alguns casos há retorno e em outros não há.
 */

/**
 * Como exemplo, uma função é definida para calcular a área de algo qualquer: se
 * essa área for maior que 20m², nada é retornado, apenas uma mensagem é 
 * impressa, caso contrário, a área é retornada normalmente.
 */
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

// Chamadas comuns à função
console.log(area(2, 2)) // 4
area(5, 5) // Valor acima do permitido: 25m²
console.log(area(5, 5))

// Chamadas incomuns, mas possíveis, à função
console.log(area(2)) // NaN (Not a Number)
console.log(area()) // NaN (Not a Number)
console.log(area(2, 3, 4, 5, 6)) // 6 (considera só os dois primeiros parâmetros)