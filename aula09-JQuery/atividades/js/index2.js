var btnTema = $('#btnTema');
var root = $('#root');

btnTema.on('click', function() {
    if (btnTema.hasClass('temaClaro')) {
        btnTema.removeClass('temaClaro');
        btnTema.addClass('temaEscuro');
        
        root.removeClass('temaClaro');
        root.addClass('temaEscuro');
    } else {
        btnTema.removeClass('temaEscuro');
        btnTema.addClass('temaClaro');

        root.removeClass('temaEscuro');
        root.addClass('temaClaro');
    }
});