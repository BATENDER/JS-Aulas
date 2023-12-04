const btnMudarTermo = document.getElementById('btnMudarTermo');
const btnMudarTodosTermos = document.getElementById('btnMudarTodosTermos');

btnMudarTermo.addEventListener('click', mudarTermo);
btnMudarTodosTermos.addEventListener('click', mudarTodosTermos);

function mudarTermo() {
    let blocoTexto = document.getElementById('blocoTexto');
    let adicionarTermo = document.getElementById('adicionarTermo').value;
    let removerTermo = document.getElementById('removerTermo').value;
    let blocoTextoFormatado = blocoTexto.value.replace(removerTermo, adicionarTermo);

    blocoTexto.value = blocoTextoFormatado;
}

function mudarTodosTermos() {
    let blocoTexto = document.getElementById('blocoTexto');
    let adicionarTermo = document.getElementById('adicionarTermo').value;
    let removerTermo = document.getElementById('removerTermo').value;
    let blocoTextoFormatado = blocoTexto.value.replaceAll(removerTermo, adicionarTermo);

    blocoTexto.value = blocoTextoFormatado;
}