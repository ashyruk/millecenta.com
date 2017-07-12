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
    if (location == "http://localhost:8080/pages/News.html"){
        var req = new XMLHttpRequest();
        req.open('GET',"../build/news.json",true);
        req.onreadystatechange = function(){
            if (req.readyState == 4 && req.status == 200){
                var articles = JSON.parse(req.responseText);
                console.log("req");
                console.log(JSON.parse(req.responseText));
                var news = document.querySelector("section.news");
                for (var i = 0;i<articles.length;i++){
                    var article =
                    "<article>"+
                        "<header>"+
                            "<span class=\"date\">"+articles[i].date+"</span> - "+
                            "<span class=\"title\">"+articles[i].title+"</span>"+
                        "</header>"+
                    "<hr>"+
                    "<div class=\"annotation\">"+
                        "<div>"+
                            "<p>"+articles[i].annotation+"</p>"+
                        "</div>"+
                        "<div class=\"img\"><img src=\"/build/img/"+articles[i].img+"\" alt=\"\"></div>"+
                        "</div>"+
                    "<a href=\"\">Читать далее</a>"+
                    "</article>";
                    news.append(article);
                }
            }
        };
        req.send();
        /*$.getJSON("../build/news.json",function (data) {

        })*/
    }
});
