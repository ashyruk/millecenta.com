$(document).ready(function(){var e=$(".PageHeader");window.addEventListener("scroll",function(){this.scrollY>80?e.addClass("_solid"):e.removeClass("_solid")}),$(".expand").on("click",function(e){e.preventDefault(),$(this).hide(100).next().slideDown("slow")}),$("a.bars").on("click",function(e){e.preventDefault(),$(".ResponsiveMenu").toggle()}),$(window).on("resize",function(){this.innerWidth>770?($(".ResponsiveMenu").show(),$("a.bars").hide()):($(".ResponsiveMenu").hide(),$("a.bars").show())}),$(".tabname span").on("click",function(e){$(".tabname span").removeClass("active"),1==$(this).data("idx")&&($('div.collage[data-idx = "1"]').show(),$('div.collage[data-idx = "2"]').hide(),$(this).addClass("active")),2==$(this).data("idx")&&($('div.collage[data-idx = "2"]').show(),$('div.collage[data-idx = "1"]').hide(),$(this).addClass("active"))})});