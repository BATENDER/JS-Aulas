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
var filmes = [];

filmeBtn.addEventListener('click', cadastrarFilme);
listarBtn.addEventListener('click', listarFilmes);

function cadastrarFilme() {
    let nomeFilme = document.getElementById('nomeFilme').value;
    let descricaoFilme = document.getElementById('descricaoFilme').value;
    let dataFilme = document.getElementById('dataFilme').value;
    let diretorFilme = document.getElementById('diretorFilme').value;
    let categoriaFilme = document.getElementById('categoriaFilme').value;
    let respostaFilme = document.getElementById('respostaFilme');
    let msgCadastro = document.getElementById('msgCadastro');

    msgCadastro.innerHTML = `<h5 class="sucesso">Filme cadastrado com sucesso</h5>`
    
    filmes.push(new Filme(nomeFilme, descricaoFilme, dataFilme, diretorFilme, categoriaFilme));
    
}

function listarFilmes() {
    let resposta = document.getElementById('resposta');

    resposta.innerHTML = '';
    
    filmes.forEach((cadaFilme) => {
        resposta.innerHTML += `<div class="filme" id="filmeTemplate">
        <h2>${filmes.nomeFilme}</h2>
        <div class="divisao">
            <h3>Descrição</h3>
            <p>${filmes.descricaoFilme}</p>
        </div>
        <div class="divisao">
            <h3>Data de lançamento</h3>
            <p>${filmes.dataFilme}</p>
        </div>
        <div class="divisao">
            <h3>Diretor do filme</h3>
            <p>${filmes.diretorFilme}</p>
        </div>
        <div class="divisao">
            <h3>Categoria</h3>
            <p>${filmes.categoriaFilme}</p>
        </div>
    </div>`;

    });
}
