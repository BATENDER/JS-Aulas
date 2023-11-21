// Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem: o numero anterior a ele, o próprio número escolhido e o número sucessor a ele

var num = Number (prompt('Digite um número inteiro:'));
var antecessor = parseInt(num) - 1;
var sucessor = parseInt(num) + 1;



alert(`Antecessor: ${antecessor}\nNúmero: ${num}\nSucessor: ${sucessor}`);