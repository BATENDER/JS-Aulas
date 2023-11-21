console.log('Olá Mundo ^_^')


// CAIXAS DE TEXTO
// alert('Salve pessoas!');
// confirm('Estou aprendendo JS?');
// prompt('Qual é o seu nome?');

// VARIÁVEIS
// LET escopo: local, sobrescrevível
    function testeLet() {
        let numero = 10;
        console.log(numero);
    }

// CONST escopo: global, não sobrescrevível
    const π = 3.14;
    console.log(π);

// VAR escopo: global, sobrescrevível
    var nome = 'Victor';
    console.log(nome);

    var idade = prompt("Qual é a sua idade?");
// CONCATENAÇÂO
// PRIMEIRA MANEIRA +
// SEGUNDA MANEIRA ${}
//  alert(nome + ', Seja bem vindo!');
    alert(`Seja bem vindoa! ${nome}`);

// TIPOS DE VALORES
// NUMBER números
var real = 180;

// STRING
var texto = 'EXEMPLO';

// BOOLEAN logicos ou verdadeiro e falso
var ligado = true;
var desligado = false;

// OBJECT objeto
var carro = [];