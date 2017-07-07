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
});