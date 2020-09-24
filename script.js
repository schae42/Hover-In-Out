$(document).ready(function(){
    $('img').hover(function(){
        var src2 = $(this).attr("src");
        $(this).attr("src", $(this).attr("src1"));
        $(this).attr("src1", src2);
    },
    function(){
        var src2 = $(this).attr("src");
        $(this).attr("src", $(this).attr("scr1"));
        $(this).attr("src1", src2);
    });
});
