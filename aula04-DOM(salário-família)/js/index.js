//! coletar valores
//? var empregado = document.getElementById('empregado').value;
var btnCalcular = document.querySelector('#btnCalcular');

// configurar o clique do botão
btnCalcular.addEventListener('click', calcular);

// calcular salário família
function calcular() {
    let empregado = document.querySelector('#empregado').value;
    let qtdFilhos = document.querySelector('#qtdFilhos').value;
    let salContribuicao = document.querySelector('#salContribuicao').value;
    let resposta = document.querySelector('#resposta');

    if(qtdFilhos == 0 || salContribuicao == 0 || empregado == '') {
        resposta.innerHTML = 'Insira suas informações corretamente!'
    }
    else if (salContribuicao <= 806.8) {
        let resultado = qtdFilhos * 41.37;
        resposta.innerHTML = `O salário família do(a) empregado "${empregado}" é de R$${resultado.toFixed(2)}!`;
    }
    else if (salContribuicao > 806.8 && salContribuicao <= 1212.64) {
        let resultado = qtdFilhos * 29.16;
        resposta.innerHTML = `O(A) salário família do empregado "${empregado}" é de R$${resultado.toFixed(2)}`;
    } else {
        resposta.innerHTML = `O(A) empregado "${empregado}" não tem direito ao salário família!`;
    }
}

// devolver uma resposta