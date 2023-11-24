// 1 - Faça uma listagem de 6 filmes de sua escolha com array e faça eles serem impressos no console.log através de repetição

var tenet = ['Título = Tenet', 'Descrição = lorem Ipsum'];
var vingadores = ['Título = Guerra Infinita', 'Descrição = lorem Ipsum'];
var listaFilmes = ['Titanic', 'Senhor dos Aneis', 'Harry Potter: Os Prisioneiros de Azkaban', 'De Volta Para o Futuro', 'Detona Ralph', 'Alien', tenet, vingadores];

// for (var i = 0; i < listaFilmes.length; i++) {
//     console.log((i+1) + 'º Filme: ' + listaFilmes[i] + '!\n');
// }

listaFilmes.forEach( (cadaFilme) => {
    console.log(cadaFilme);
} );