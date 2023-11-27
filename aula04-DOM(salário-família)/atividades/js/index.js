// 1 - Crie um campo <input type="text"> e aplique os seguintes controles com base nos eventos abaixo:
// • No evento de foco modifique o background do input para amarelo.
// • Quando o campo perder o foco, recupere o seu respectivo valor e:
// o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
// o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background deve ser alterado para verde.


// SELECIONA INPUT
var input = document.getElementById('inputText');
var resposta = document.getElementById('resposta');

// ADICIONAR EVENTO DE FOCO, PERDER FOCO
input.addEventListener('focus', mudaCor)
input.addEventListener('blur', padrao)
input.addEventListener('keypress', mudaCorVerifica);

// FOCO, INPUT, AMARELO
function mudaCor() {
    input.style.backgroundColor = 'yellow';
    input.style.color = 'black';
    resposta.style.backgroundColor = 'yellow';
    resposta.style.color = 'black';
    resposta.innerHTML = 'Digite uma senha maior que 3 dígitos!'
}

function padrao() {
    let inputValor = input.value.length;

    if (inputValor == 0) {
        input.style.backgroundColor = 'black';
        input.style.color = 'whitesmoke';
        resposta.style.backgroundColor = 'black';
        resposta.style.color = 'whitesmoke';
        resposta.innerHTML = 'Boas-vindas, usuário!'
    }
}

// PERDE FOCO, SE TIVER MENOS QUE 3 CARACTERES, VERMELHO, SE MAIOR QUE 3 CARACTERES, VERDE
function mudaCorVerifica() {
    let inputValor = input.value.length;

    if (inputValor < 5) {
        input.style.backgroundColor = 'red'
        resposta.style.backgroundColor = 'red';
        resposta.innerHTML = 'Digite uma senha válida!'
    } else {
        input.style.backgroundColor = 'green'
        resposta.style.backgroundColor = 'green';
        resposta.innerHTML = 'Senha Válida!'
    }
}