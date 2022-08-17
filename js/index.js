AOS.init();

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 10){
            $(".navbar").css({"background-color":"white"});
            $(".links").css({"color":"black"});    
            $(".service-link").css({"color":"black"}); 
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
            $(".links").css({"color":"white"});  
            $(".service-link").css({"color":"white"}); 

        }

    })
})