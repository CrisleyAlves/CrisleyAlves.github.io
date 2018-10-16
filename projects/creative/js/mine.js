window.sr = ScrollReveal();

$('.trigger-menu').on('click', function(){
    if($(this).hasClass("active")){
        $(this).removeClass('active');
        $(this).next('ul').animate({"left":"-100%"}, "slow");
    }else{
        $(this).next('ul').animate({"left":"0px"}, "slow");
        $(this).addClass('active');
    }
});

$('a').on('click', function(e){
    e.preventDefault();
})
