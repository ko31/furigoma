$(function(){
    var img = [ 'img/fu.png', 'img/to.png' ];
    var furigoma = anime({
        targets: '#furigoma .el',
        translateY: 0,
        delay: function(el, i, l) {
            return i * (anime.random(50, 100));
        },
        direction: 'alternate',
        rotate: '5turn',
        loop: false,
        autoplay: false,
        begin: function(anim) {
            shake();
        }
    });

    function shake() {
        $('.koma').each(function(i) {
            $(this).attr('src', img[anime.random(0, 1)]);
        });
    }

    $('.play').click(function(){
        furigoma.restart();
    });

    $('.bg-img').click(function(){
        if ($(this).val() == 'tatami') {
            $('body').css('background-image', 'url(img/tatami.jpg)');
        } else if ($(this).val() == 'ban') {
            $('body').css('background-image', 'url(img/shogiban.png)');
        } else {
            $('body').css('background-image', 'none');
        }
    });
});
