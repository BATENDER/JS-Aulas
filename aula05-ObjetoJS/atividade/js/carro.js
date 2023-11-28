class Carro {
    constructor(marca, modelo, ano, cor, velocidadeMax) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
    }
    acelerar(num) {
        if (num > this.velocidadeAtual && num < this.velocidadeMax) {
            this.velocidadeAtual += num;
            return `O carro está a ${this.velocidadeAtual}Km/h`;
        } 
        else if (num > this.velocidadeMax) {
            this.velocidadeAtual = this.velocidadeMax;
            return `O carro está na velocidade máxima! ${this.velocidadeMax}km/h`
        }
        else if (num < this.velocidadeAtual && this.velocidadeAtual > 0) {
            return this.freiar(num);
        } 
        else if (num < this.velocidadeAtual && this.velocidadeAtual === 0) {
            return this.re(num);
        } else {
            return `O carro está parado!`
        }
    }
    freiar(num) {
        if (num >= this.velocidadeAtual) {
            this.velocidadeAtual = 0;
            return `O carro parou!`
        } else {
            this.velocidadeAtual -= num;
            return `O carro desacelerou até ${this.velocidadeAtual}km/h!`
        }
    }
    re(num) {
        if (this.velocidadeAtual > 0) {
            this.freiar(num);
            return `O carro freiou até ${this.velocidadeAtual}km/h!`
        } else {
            this.velocidadeAtual += num;
            return `O carro está dando a ré a ${this.velocidadeAtual}km/h`
        }
    }
}

var infinito = Number.MAX_VALUE


// HTML
var btnCarro = document.getElementById('btnCarro');
var resultado = document.getElementById('resultado');

btnCarro.addEventListener('click', criarCarro);

function criarCarro() {
    let marcaInput = document.getElementById('marca').value;
    let modeloInput = document.getElementById('modelo').value;
    let anoInput = document.getElementById('ano').value;
    let corInput = document.getElementById('cor').value;
    let velMaxInput = document.getElementById('velocidadeMax').value;

    var carro = new Carro(marcaInput, modeloInput, anoInput, corInput, velMaxInput);
    
    resultado.innerHTML = `<div class="carroResultado">
        <h3>${carro.modelo}</h3>
        <p>${carro.marca}</p>
        <span style="color: ${carro.cor};">COR ESCOLHIDA</span>
    </div>`;
}