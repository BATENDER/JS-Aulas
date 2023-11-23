// 3 - Fazer as tabuadas de 1 até 10 com repetições

var resultado, num;

num = Number(prompt('Digite a tabuada do número desejado: '));

for (var i = 0; i <= 10; i++) {
    resultado = i * num;
    console.log(`${i} x ${num} = ${resultado}`);
}