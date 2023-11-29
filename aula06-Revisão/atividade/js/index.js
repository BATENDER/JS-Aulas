class Filme {
    constructor(nomeFilme, descricaoFilme, dataFilme, diretorFilme, categoriaFilme) {
        this.nomeFilme = nomeFilme;
        this.descricaoFilme = descricaoFilme;
        this.dataFilme = dataFilme;
        this.diretorFilme = diretorFilme;
        this.categoriaFilme = categoriaFilme;
    }
}

var filmeBtn = document.getElementById('filmeBtn');
var listarBtn = document.getElementById('listarBtn');
var filme = null;

filmeBtn.addEventListener('click', cadastrarFilme);
listarBtn.addEventListener('click', listarFilmes);

function cadastrarFilme() {
    let nomeFilme = document.getElementById('nomeFilme').value;
    let descricaoFilme = document.getElementById('descricaoFilme').value;
    let dataFilme = document.getElementById('dataFilme').value;
    let diretorFilme = document.getElementById('diretorFilme').value;
    let categoriaFilme = document.getElementById('categoriaFilme').value;
    let respostaFilme = document.getElementById('respostaFilme');

    filme = new Filme(nomeFilme, descricaoFilme, dataFilme, diretorFilme, categoriaFilme);
    respostaFilme.innerHTML = 'FILMES CADASTRADOS: 1';
}

function listarFilmes() {
    let resposta = document.getElementById('resposta');

    resposta.innerHTML += `<div class="filme" id="filmeTemplate">
    <h2>${filme.nomeFilme}</h2>
    <div class="divisao">
        <h3>Descrição</h3>
        <p>${filme.descricaoFilme}</p>
    </div>
    <div class="divisao">
        <h3>Data de lançamento</h3>
        <p>${filme.dataFilme}</p>
    </div>
    <div class="divisao">
        <h3>Diretor do filme</h3>
        <p>${filme.diretorFilme}p>
    </div>
    <div class="divisao">
        <h3>Categoria</h3>
        <p>${filme.categoriaFilme}</p>
    </div>
</div>`
}