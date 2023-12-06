var btnPlay = $('#btnPlay');
var imgPlay = document.querySelector('#imgPlay');
var duracao = 5000;

btnPlay.on('click', function() {
    $('.progress-bar').animate({width: '100%'}, {duration: duracao});
    
    if(btnPlay.hasClass('play')) {
        btnPlay.addClass('pause');
        btnPlay.removeClass('play');
        imgPlay.setAttribute('src', "Images/Icons/pause-circle-fill.svg");
        
        
    } else {
        btnPlay.addClass('play');
        btnPlay.removeClass('pause');
        imgPlay.setAttribute('src', "Images/Icons/play-circle-fill.svg");
    }
});