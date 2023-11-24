// 3 - Fazer as tabuadas de 1 até 10 com repetições

var num = Number(prompt('Digite a tabuada do número desejado: '));

// Tabuada do número até deu quadrado perfeito
for (var i = 0; i <= num; i++) {
    resultado = i * num;
    console.log(`${i} x ${num} = ${i * num}`);
}