// OPERADORES LÓGICOS
// -------------------------------------------------------------
// > MAIOR QUE
// >= MAIOR OU IGUAL QUE
// > MENOR QUE
// <= MENOR OU IGUAL QUE
// -------------------------------------------------------------
// = ATRIBUIÇÃO
// == COMPARAÇÃO DE VALORES
// === COMPARAÇÃO DE VALORES E TIPOS
// != DIFERENTE DE VALORES
// !== DIFERENTE DE VALORES E TIPOS
// -------------------------------------------------------------

// ALTERNÁRIOS
// -------------------------------------------------------------
// && E (EXIGE DUAS CONDIÇÕES VERDADEIRAS)
// || OU (EXIGE APENAS UMA CONDIÇÃO VERDADEIRA)
// ! NEGAÇÃO

// SE (CONDICAO) ENTAO
//  FAZ ALGO
// SENAO 
//  FAZ OUTRA COISA
// FIMSE

if (true) {
    console.log('Sou verdadeiro :3')
} else {
    console.log('Sou falso :P')
}

// MAIOR DE IDADE
var idade = Number(prompt("Digite a sua idade: "));

if (idade >= 18) {
    console.log('O usuário é maior de idade');
} else {
    alert('Impossível acessar a página\nMotivo: não possui idade mínima necessária!');
    location.href = 'https://www.google.com.br/?hl=pt-BR';
}