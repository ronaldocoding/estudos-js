/**
 * Existe uma diferença considerável entre resolver um problema usando uma 
 * função callback e implementar um código que resolva o mesmo problema mas 
 * substituindo o uso dela.
 * 
 * Exemplo de problema: dado um array de notas de um estudante, deve-se gerar
 * um novo array contendo apenas as notas menores que 6.0. 
 */

// Esse é o array de notas:
const notas = [8.3, 1.5, 3.7, 4.8, 7.5, 6.9, 8.5]

// Solução sem o uso de uma função callback: percorre manualmente o array e 
// adiciona cada elemento em um array vazio usando a função push()
const notasBaixas1 = [] // Cria array vazio
for (let i in notas) { // Percorre o array
    if (notas[i] < 6.0) { // Condição
        notasBaixas1.push(notas[i]) // usa push() para adicionar elemento
    }
}

console.log(notasBaixas1)

// Output
// [ 1.5, 3.7, 4.8 ]

// Solução com o uso de uma função callback (anônima tradicional): usa filter(). 
// Esse método recebe uma função de retorno lógico, a testa em cada elemento e, 
// caso o retorno seja "true", ele é adicionado ao array que será retornado.
const notasBaixas2 = notas.filter(
    function(nota) {
        return nota < 6
    }
)

console.log(notasBaixas2)

// Output
// [ 1.5, 3.7, 4.8 ]

// Solução com o uso de uma função callback (arrow)
const notasBaixas3 = notas.filter(nota => nota < 6.0)

console.log(notasBaixas3)

// Output
// [ 1.5, 3.7, 4.8 ]

// Observação: o método filter() não altera "notas", ele apenas retorna um
// array (diferente ou não do original) para as constantes.