var caixa = $('#caixa');

$('#animacao1').on('click', function() {
    caixa.animate({width: '300px', height: '300px', borderRadius: '100%'});
});

$('#animacao2').on('click', function() {
    caixa.animate({width: '500px', height: '500px', borderRadius: '10px'}).animate({rotate: '-360deg'}).animate({rotate: '360deg'});
});