// INSTALAÇÃO
    // Visite o site: https://jquery.com/download/
        // clique na opção: "Download the uncompressed, develpment jQuery 3.7.1" ou visite: https://code.jquery.com/jquery-3.7.1.js
        // Aberto o arquivo, aperte o botão de "salvar como"
        // salve em um local de preferência

// SELETOR jQUERY
    // variavel = ${"#" ou "." + "elemento"}
    // text() se vazio, lista o texto. Se com valor, sobrescreve o conteudo
    var tituloSite = $('#tituloSite').text('Aula jQuery!');

    // SEM JQUERY
    // var paragrafo = document.querySelector('#paragrafo');
    //     paragrafo.addEventListener('mouseover', souParagrafo);

    // function souParagrafo() {
    //     console.log("sou um paragrafo");
    // }

    // COM JQUERY
    $('#paragrafo').on('mouseover', function() {
        // let btn = $('#btn');
        alert('Sou um paragrafo!');
    });

// COMPORTAMENTO JQUERY
    var nome = 'Victor';
    var error = undefined;

    $('#nomeUsuario').text(nome);

// ALGORITMO EXEMPLO
    $('#blocoTexto').on('input', function() {
        let blocoVal = $('#blocoTexto').val();
        let numCaracteres = $('#numCaracteres');
        let contagem = blocoVal.length;

        numCaracteres.text(contagem);
    });