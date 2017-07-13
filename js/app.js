/**
 * Created by rybak on 15.06.2017.
 */
$(document).ready(function(){
    var header = $('.PageHeader');

    window.addEventListener('scroll', function () {
        if (this.scrollY > 80) {
            header.addClass('_solid');
        } else {
            header.removeClass('_solid');
        }

    });
    /*$('#wb_ResponsiveMenu ul li a').click(function(e) {
        $('#wb_ResponsiveMenu input').prop("checked", false);
    });*/
    $('.expand').on('click',function (e) {
        e.preventDefault();
        $(this).hide(100).next().slideDown('slow');
    });

    $('a.bars').on('click',function (e) {
       e.preventDefault();
        //$('.ResponsiveMenu').toggleClass('show-inline');
        $('.ResponsiveMenu').toggle();
    });
    $(window).on('resize',function () {
        if (this.innerWidth > 770){
            $('.ResponsiveMenu').show();
            $('a.bars').hide();
        }else /*if(this.screen.width < 770)*/ {
            $('.ResponsiveMenu').hide();
            $('a.bars').show();
        }

    });
    $('.tabname span').on('click', function (e) {
        $('.tabname span').removeClass('active');

        if ($(this).data('idx') == 1){
            $('div.collage[data-idx = "1"]').show();
            $('div.collage[data-idx = "2"]').hide();
            $(this).addClass("active");
        }
        if ($(this).data('idx') == 2){
            $('div.collage[data-idx = "2"]').show();
            $('div.collage[data-idx = "1"]').hide();
            $(this).addClass("active");
        }
    });
});
