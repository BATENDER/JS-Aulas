const usuario = 'ADM';
const senha = '1234';

var usuarioDigitado = prompt('Insira o usuário: ');
var senhaDigitada = prompt('Insira a senha: ');

if (senhaDigitada == senha && usuarioDigitado == usuario) {
    alert('Logou');
} else {
    alert('Senha e/ou Usuário invalido(s)!');
    location.reload();
}

// if (usuarioDigitado != usuario || senhaDigitada != senha) {
//     alert('Senha e/ou Usuário invalido(s)!');
//     location.reload();
// } else {
//     alert('Logou');
// }