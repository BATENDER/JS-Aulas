// REPETIÇÃO

// ENQUANTO (verifica e faz)
// enquanto (condicao) faca
// processo
// contador <- contador + 1
// fimEnquanto
    // var num = 1;
    // while (num <= 10) {
    //     console.log(num + ' Bacana demais!');
    //     num++;
    // }

// FACA ATE
// faca
//     algo
//     controlador = controlador + 1;
// ate (condicao)
    // var contador = 20;
    // do {
    //     console.log(contador + ' Bacanão');
    //     contador++;
    // } while (contador <= 10);

// PARA
// para (var, condicao, controlado)
//     algo
// fimPara
    // for (var i = 1; i <= 10; i++) {
    //     console.log(i + ' Bacanão!');
    // }

// FAÇA PARA CADA
var listaElementos = ['elemento1', 'elemento2', 'elemento3'];
// função anônima
listaElementos.forEach(
    (cadaElemento) => {
        console.log('elementos ' + cadaElemento);
    }
);