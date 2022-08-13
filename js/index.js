AOS.init();

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".navbar").css({"background-color":"white"});   
        }
        else{
            $(".navbar").css({"background-color":"#212529"});
        }

    })
})