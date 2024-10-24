//npm install readlinesync
/***
 * if = verdadeiro
 * else = falso
 * else if = e se 
 * o termo if e usado para  adicionar uma condição verdadeira para a programação 
 * else e o contrario da programação verdadeira
 * else if so pode ser adicionada pos um if pois ele so e utilizado para se o verdadeiro não for verdade
 * Exp; se a maçã não e verde ele joga ela fora
 * vamos ver na pratica
 */

/***
 * crie uma lista de entrevista de emprego com if else e else if
 * se for homen e +18 vc pode participar
 * se for mulher +18 vc pode participar 
 * se não obrigado
 */

// Defina as variáveis
let nome = prompt("Digite seu nome: ");
let sexo = prompt("Digite seu sexo (M/F): ");
let idade = parseInt(prompt("Digite sua idade: "));

// Verifique as condições
if (sexo = "M", idade >= 18) {
  console.log(`Parabéns, ${nome}! Você pode participar da entrevista.`);
} else if (sexo = "F", idade >= 18) {
  console.log(`Parabéns, ${nome}! Você pode participar da entrevista.`);
} else {
  console.log(`Obrigado, ${nome}, mas não atende aos requisitos.`);
}