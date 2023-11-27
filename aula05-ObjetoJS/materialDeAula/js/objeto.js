class Cliente {
    nome;
    cpf;
    endereco;
    telefone;
    conta;
    saldo;

    // AÇÃO  = FUNÇÃO(MÉTODO)
    verificaValor() {
        return `Saldo atual R$${this.saldo}!`
    }
    sacar(valor) {
        // this.atributo = seleciona um atributo modelo
        if (this.saldo <= valor) {
            return `Transação NÃO aprovada!`
        } else {
            this.saldo = this.saldo - valor;
            return `Transação de R$${valor} aprovada! ${this.verificaValor()}`;
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo = this.saldo + valor;
            return `Transação de R$${valor} aprovada! ${this.verificaValor()}`;
        } else {
            return `Não se pode depositar valores negativos ou nulos!`
        }
    }
}

var cliente1 = new Cliente();

    cliente1.nome = 'Leonardo';
    cliente1.cpf = '12345678910';
    cliente1.endereco = 'sim rua 12 casa do não te interessa'
    cliente1.telefone = '81912345678'
    cliente1.conta = '123';
    cliente1.saldo = 0;