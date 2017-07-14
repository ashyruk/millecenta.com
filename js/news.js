/**
 * Created by rybak on 13.07.2017.
 */
var articles;
var req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if (req.readyState == 4 && req.status == 200){
        articles = JSON.parse(req.responseText).articles;
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
                "<div class=\"img\"><img src=\"../build/img/"+articles[i].img+"\" alt=\"\"></div>"+
                "</div>"+
                "<a data-idx=\""+articles[i].id +"\" href=\"\">Читать далее</a>"+
                "</article>";

            news.innerHTML +=article;
        }
        $('article a').on('click',function (e) {
            e.preventDefault();
            var idx = $(this).data('idx');

            $('h1.Heading').text(articles[idx].title);
            $('section.news').html('');
            $('article.news-item').show()
                .children('header').text(articles[idx].date).parent()
                .children('p.annotation').text(articles[idx].annotation).parent()
                .children('div').html(articles[idx].content);

        });
    }
};
req.open('GET',"../build/news.json",true);
req.send();
