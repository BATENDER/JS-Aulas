// REPLACE / REPLACEALL
    var texto = 'Olá mundo, o mundo é bacana e o mundo acabou :3';
    console.log(texto);
// MUDA UM TERMO
    console.log(texto.replace('mundo', 'pessoas'));
// MUDA TODOS OS TERMOS
    console.log(texto.replaceAll('mundo', 'pessoas'));

// CLASS LIST
    var exemplo = document.getElementById('exemplo');
    exemplo.classList.remove('claro');
    exemplo.classList.add('escuro');

    function mudaTema() {
        // CONTAINS - VERIFICA SE O ELEMENTO CONTÉM UMA CLASSE (BOOLEANO)
        // REPLACE - SUBSTITUI UMA CLASSE
        if (exemplo.classList.contains('escuro'))
            exemplo.classList.replace('escuro', 'claro');
        else
            exemplo.classList.replace('claro', 'escuro');
    }
    
    function mudaClasse() {
        // TOGGLE - TROCA A CLASSE DE UM ELEMENTO QUANDO ENGATILHADO
        exemplo.classList.toggle('escuro');
    }

// CONCATENAÇÃO
    var primeiroNome = 'Victor';
    var sobreNome = 'Rohod';
    var cartao = '4841';

    // CONCATENAÇÃO NO COMEÇO
        var nomeCompleto = sobreNome.padStart(11, primeiroNome);
        console.log(nomeCompleto);
        var cartaoEscondido = cartao.padStart(16, '*');
        console.log(cartaoEscondido);
    // CONCATENAÇÃO NO FIM
        var nomeCompleto2 = sobreNome.padEnd(11, primeiroNome);
        console.log(nomeCompleto2);
    // 