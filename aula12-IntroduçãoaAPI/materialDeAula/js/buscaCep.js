var btnBuscar = document.querySelector('#buscar');

btnBuscar.addEventListener('click', function() {
    let localidadeBusca = document.querySelector('#localidadeBusca').value;
    let bairroBusca = document.querySelector('#bairroBusca').value;
    let ufBusca = document.querySelector('#ufBusca').value;

    fetch(`viacep.com.br/ws/${ufBusca}/${localidadeBusca}/${bairroBusca}/json/`).then((res) => {
        return res.json();
    }).then((data) => {
        let respostaBusca = document.querySelector('#respostaBusca');
        respostaBusca.value = data.cep;
    });
});