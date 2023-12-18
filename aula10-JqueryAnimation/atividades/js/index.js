var quadradoDir = $('#direita');

$('#botao').on('click', function() {
    quadradoDir.animate({rotate: '-360deg'}, {duration: 1000}).animate({rotate: '360deg'}, {duration: 1000});
});