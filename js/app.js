/**
 * Created by rybak on 15.06.2017.
 */
$(document).ready(function(){
    $("#wb_ResponsiveMenu ul li a").click(function(e) {
        $("#wb_ResponsiveMenu input").prop("checked", false);
    });
});