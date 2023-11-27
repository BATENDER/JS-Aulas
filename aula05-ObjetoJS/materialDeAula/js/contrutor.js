class Produto {
    constructor(valorId, valorNome, valorMarca, valorPreco, valorQtdEstoque, valorQtdVendida) {
        this.id = valorId;
        this.nome = valorNome;
        this.marca = valorMarca;
        this.preco = valorPreco;
        this.qtdEstoque = valorQtdEstoque;
        this.qtdVendida = valorQtdVendida;
    }
    id;
    nome;
    marca;
    preco;
    qtdEstoque;
    qtdVendida;
    venda(qtd) {
        this.qtdEstoque -= qtd;
        this.qtdVendida += qtd;
        return `Foram vendidos ${qtd} do produto ${this.nome}`;
    }
}

var produto1 = new Produto(1, 'Feijão', 'Seu Jorge', 15.99, 100, 0);
var produto2 = new Produto(2, 'Coca-cola', 'Coca', 3, 50, 200);