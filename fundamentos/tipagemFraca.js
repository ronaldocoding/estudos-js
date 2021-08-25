/* Javascript é uma linguagem de tipagem fraca, isso significa que as variáveis
 * declaradas poderão intercambiar seus tipos a qualquer momento, ou seja, 
 * poderão receber valores de tipos de dados diferentes e fazer operações entre
 * eles sem a necessidade de um conversão (casting) explícita do tipo.*/

let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

//Output
//Legal
//string

qualquer = 3.1415
console.log(qualquer)
console.log(typeof qualquer)

//Output
//3.1415
//number