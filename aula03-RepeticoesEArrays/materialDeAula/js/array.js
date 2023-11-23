var produto1 = 'Tênis';
var produto2 = 'Chocolate';
var produto3 = 'Video Game';
console.log(produto1);

var listaProdutos = ['Tênis', 'Chocolate', 'Video Game'];
console.log(listaProdutos);
// índice
console.log(listaProdutos[2]);

// OUTROS MÉTODOS PARA DECLARAR OU INSERIR VALORES
    // var mercadoria = Array();
    // mercadoria[0] = 'Colar';
    // mercadoria[1] = 'Tênis';
    // mercadoria[2] = 'Bola';
    // console.log(mercadoria);

// COMANDOS ARRAY
    // PUSH - insere um elemento no final do ARRAY
        listaProdutos.push('Bola');
        console.log(listaProdutos);
    // UNSHIFT - insere um elemento no começo do ARRAY
        listaProdutos.unshift('Bicicleta');
        console.log(listaProdutos);
    // POP - remove um elemento no final do ARRAY
        listaProdutos.pop();
        console.log(listaProdutos);
    // SHIFT - remove um elemento no início do ARRAY
        listaProdutos.shift();
        console.log(listaProdutos);
    // SPLICE - (índice_desejado(início), quantos_índices_irá_afetar(range), o_que_será_adicionado)
        listaProdutos.splice(0,1, 'Bola');
        console.log(listaProdutos);
    // INCLUDES - pesquisa se o elemento existe
        console.log(listaProdutos.includes('Amoeba'));
    // LENGTH - conta quantos elementos têm no ARRAY
        console.log(listaProdutos.length);

