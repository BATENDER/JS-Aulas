var verificarPromise = new Promise((resolve, reject) => {
    let nome = 'ADM';
    let senha = 'ADa';

    if (nome == 'ADM' && senha == 'ADM') {
        resolve('Boas-vindas, adm!');
    } else {
        reject('Nome e/ou senha incorretos! Motivo: não é o adm! Faça login de maneira alternativa!');
    }
});

verificarPromise.then((x) => {
    console.log(x);
});

verificarPromise.catch((x) => {
    console.log(x);
});