var caixa = $('#caixa');

$('#animacao1').on('click', function() {
    caixa.animate({width: '0', height: '0', borderRadius: '100%'});
});

$('#animacao2').on('click', function() {
    caixa.animate({width: '500px', height: '500px', borderRadius: '10px'}).animate({rotate: '-360deg'});
});

$('#animacao3').on('click', function() {
    caixa.animate({rotate: '360deg'}, {duration: 5000});
});

$('#animacao4').on('click', function() {
    caixa.animate({margin: '100px', width: '600px', height: '600px'}, {complete: () => {
        alert('Ne contrata!');
    }});
});

$('#animacao5').on('click', function() {
    caixa.hide(500);
});

$('#animacao6').on('click', function() {
    caixa.show(500);
});

$('#animacao7').on('click', function() {
    caixa.slideUp(500);
});

$('#animacao8').on('click', function() {
    caixa.fadeOut(500);
});

$('#animacao9').on('click', function() {
    caixa.fadeIn(500);
});

$('#animacao10').on('click', function() {
    caixa.slideDown(500);
});

$('#animacao11').on('click', function() {
    caixa.fadeToggle(500);
});

$('#animacao12').on('click', function() {
    caixa.slideToggle(500);
});

$('#animacao13').on('click', function() {
    caixa.css('backgroundColor', 'red');
    caixa.css('backgroundColor', 'red');
    $('img').attr('src', 'https://i1.sndcdn.com/avatars-rzk8K2FyGdgb7wdQ-VWh76w-t500x500.jpg');
    $('img').attr('width', '300px');
    $('#texto').attr('placeholder', 'HIHIHAHA')
});