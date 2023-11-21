// 1-calcule conta: faça uma aplicação js que pegue o número de clientes em uma mesa, o valor total da conta e após isso divida a conta de forma igual a todos os clientes

var numClienteMesa = Number(prompt('Digite a quantidade de clientes na mesa:'));
var numContaMesa = Number(prompt('Digite o total pago pela mesa:'));
var numDivConta = parseFloat(numContaMesa) / parseFloat(numClienteMesa);
alert(`Cada cliente deverá pagar R$${numDivConta}`);