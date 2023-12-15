// API = Aplicação que pode ser utilizada em diversos projetos (Application Programming Interface)
// fetch = busca a API
var cep = document.querySelector('#cep');

resposta.innerHTML = `Digite um cep de 8 dígitos válido!`;
cep.addEventListener('focusout', function() {
    let cepValue = cep.value;
    let resposta = document.querySelector('#resposta');

    if(cepValue.length < 8 || cepValue.length > 8) {
        resposta.innerHTML = 'Digite um cep válido';
        resposta.classList.replace('padrao', 'error');
        resposta.classList.replace('success', 'error');
    } else {
        resposta.innerHTML = 'CEP encontrado!'
        resposta.classList.replace('padrao', 'success');
        resposta.classList.replace('error', 'success');
        fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then((res) => {
            return res.json();
        }).then((data) => {
            let localidade = document.querySelector('#localidade');
            let uf = document.querySelector('#uf');
            let bairro = document.querySelector('#bairro');
            let ddd = document.querySelector('#ddd');
            let complemento = document.querySelector('#complemento');
            let gia = document.querySelector('#gia');
            
            localidade.value = data.localidade;
            uf.value = data.uf;
            bairro.value = data.bairro;
            ddd.value = data.ddd;

            if (data.complemento == '') {
                complemento.value = 'N/E'
            } else {
                complemento.value = data.complemento;
            }
            if (data.gia == '') {
                gia.value = 'N/E'
            } else {
                gia.value = data.gia;
            }
        });
    }
});