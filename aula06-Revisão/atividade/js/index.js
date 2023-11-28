class Filme {
    constructor(nomeFilme, descricaoFilme, dataFilme, diretorFilme, categoriaFilme) {
        this.nomeFilme = nomeFilme;
        this.descricaoFilme = descricaoFilme;
        this.dataFilme = dataFilme;
        this.diretorFilme = diretorFilme;
        this.categoriaFilme = categoriaFilme;
    }
}

var btnFilme = document.getElementById('btnFilme');
var listaFilme = document.getElementById('listaFilme');

btnFilme.addEventListener('click', mostrarFilme);