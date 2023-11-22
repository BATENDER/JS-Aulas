var num1 = Number(prompt('Digite seu primeiro número: '));
var operador = String(prompt('Digite a operação matemática: '));
var num2 = Number(prompt('Digite seu segundo número: '));
var resultado;

function calularNovamente() {
    let novoCalculo = confirm('Deseja fazer um novo cálculo?');

    if (novoCalculo == true) {
        location.reload();
    } else {
        alert('Operação cancelada!')
    }
}

switch (operador) {
    case '+': 
        resultado = num1 + num2;
        alert(`O resulto é: ${resultado}`);
        calularNovamente()
        break;
    case '-': 
        resultado = num1 - num2;
        alert(`O resulto é: ${resultado}`);
        calularNovamente()
        break;
    case '*': 
        resultado = num1 * num2;
        alert(`O resulto é: ${resultado}`);
        calularNovamente()
        break;
        case '/': 
            if (num2 === 0) {
                alert('Impossível fazer operação: divisão por 0');
                location.reload();
                break;
            } else {
                resultado = num1 / num2;
                alert(`O resulto é: ${resultado}`);
                calularNovamente()
                break;
            }
    case '%': 
        resultado = num1 % num2;
        alert(`O resulto é: ${resultado}`);
        calularNovamente()
        break;
    case '**': 
        resultado = num1 ** num2;
        alert(`O resulto é: ${resultado}`);
        calularNovamente()
        break;
    default:
        alert('Operação inválida!');
        location.reload();
        break;
}