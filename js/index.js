AOS.init();
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 10){
            $(".navbar-expand-lg").css({"background-color":"white"});
            $(".navbar-expand-lg").addClass('shadow');
            $(".navbar-expand-lg").removeClass('shadow-0');
            $(".service-link").addClass('text-black'); 
            $(".service-link").removeClass('text-white'); 
            $(".links").addClass('text-black'); 
            $(".links").removeClass('text-white');    
        }
        else{
            $(".navbar-expand-lg").addClass('shadow-0');
            $(".navbar-expand-lg").removeClass('shadow');
            $(".navbar-expand-lg").css({"background-color":"transparent"});
            $(".service-link").addClass('text-white'); 
            $(".service-link").removeClass('text-black');  
            $(".links").addClass('text-white'); 
            $(".links").removeClass('text-black'); 

        }

    })
})

