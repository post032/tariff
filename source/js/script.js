$(function(){
    $('#link1').on('click', function() {
       $('#window1').slideToggle(300, function(){
            if( $(this).hasClass('toriff__open')){
                $(this).addClass('toriff__close');
                $(this).removeClass('toriff__open');
                $(this).removeAttr('style');
                $(this).hide();
                $('.tariff__header').addClass('tariff__header--radius')
            }
            else {
              $(this).addClass('toriff__open');
              $(this).removeClass('toriff__close');
              $(this).removeAttr('style');
              $('.tariff__header').removeClass('tariff__header--radius')
              $('.toriff__open').show();
            }
       });
    });
});

$(function(){
    $('#link2').on('click', function() {
       $('#window2').slideToggle(300, function(){
            if( $(this).hasClass('toriff__open')){
                $(this).addClass('toriff__close');
                $(this).removeClass('toriff__open');
                $(this).removeAttr('style');
                $(this).hide();
                $('.tariff__header').addClass('tariff__header--radius')
            }
            else {
              $(this).addClass('toriff__open');
              $(this).removeClass('toriff__close');
              $(this).removeAttr('style');
              $('.tariff__header').removeClass('tariff__header--radius')
              $('.toriff__open').show();
            }
       });
    });
});

$(function(){
    $('#link3').on('click', function() {
       $('#window3').slideToggle(300, function(){
            if( $(this).hasClass('toriff__open')){
                $(this).addClass('toriff__close');
                $(this).removeClass('toriff__open');
                $(this).removeAttr('style');
                $(this).hide();
                $('.tariff__header').addClass('tariff__header--radius')
            }
            else {
              $(this).addClass('toriff__open');
              $(this).removeClass('toriff__close');
              $(this).removeAttr('style');
              $('.tariff__header').removeClass('tariff__header--radius')
              $('.toriff__open').show();
            }
       });
    });
});
