$(document).ready(function(){

$(".cf_select span").click(function() {
    $(".cf img").removeClass("opaque");
    $(".cf_select span").removeClass("selected");

    var newImage = $(this).index();
    $(this).addClass("selected");
    $(".cf img").eq(newImage).addClass("opaque");

  });
});
