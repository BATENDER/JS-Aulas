const btnProcurar = document.getElementById('btnProcurar');
var jogos = ['Elden Ring', 'Red Dead Redemption 2', 'Alone in the dark 98', 'Crisis'];

btnProcurar.addEventListener('click', buscarJoojs)

function buscarJoojs() {
    let procurar = document.getElementById('procurar').value;
    let resposta = document.getElementById('resposta');

    var resultado = jogos.includes(procurar);
    if (resultado == true) {
        resposta.innerHTML = `O jogo foi encontrado! Jogo citado: ${procurar}!`;
    } else {
        resposta.innerHTML = `O jogo não foi encontrado! O jogo "${procurar}" não existe em nosso banco de dados!`
    }
}