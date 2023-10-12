$(".event_wrap li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
});