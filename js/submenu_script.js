$(".submenu").hide();
$(".gnb li").mouseenter(function(){
    $(".submenu").stop().slideDown()
})
$(".gnb_wrap").mouseleave(function(){
    $(".submenu").stop().slideUp()
})