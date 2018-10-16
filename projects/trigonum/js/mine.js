window.sr = ScrollReveal();

const fromLeft = {
    duration: 1500,
    origin: 'left',
    distance: '100%',
    scale: 1,
    easing: 'ease'
}

const fromRight = {
    duration: 1500,
    origin: 'right',
    distance: '100%',
    scale: 1,
    easing: 'ease'
}

const fromTop = {
    duration: 2000,
    origin: 'top',
    distance: '100%',
    scale: 1,
    easing: 'ease'
}

function servicesReveal(){
    sr.reveal('.services .pink-triangle', fromTop);
    sr.reveal('.services article .title', fromTop);
    sr.reveal('.services article .description', fromLeft);
    sr.reveal('.services .services-items .service', fromLeft);
    sr.reveal('.services .services-items .scroll-one',   { delay: 300  });
    sr.reveal('.services .services-items .scroll-two',   { delay: 600  });
    sr.reveal('.services .services-items .scroll-three',   { delay: 900  });
    sr.reveal('.services .services-items .scroll-four',   { delay: 1200  });
}

function aboutReveal(){
    sr.reveal('.about .white-triangle', fromTop);
    sr.reveal('.about .title', fromTop);
    sr.reveal('.about .description', fromLeft);
}

function teamReveal(){
    sr.reveal('.team .title', fromTop);
    sr.reveal('.team .people .person', fromLeft);
    sr.reveal('.team .people .scroll-one',   { delay: 300  });
    sr.reveal('.team .people .scroll-two',   { delay: 600  });
    sr.reveal('.team .people .scroll-three',   { delay: 900  });
}

function workReveal(){
    //top
    sr.reveal('.our-work .pink-triangle', fromTop);
    sr.reveal('.our-work .title', fromTop);

    //tags
    sr.reveal('.our-work .tags .item', fromLeft);
    sr.reveal('.our-work .tags .scroll-one',   { delay: 300  });
    sr.reveal('.our-work .tags .scroll-two',   { delay: 600  });
    sr.reveal('.our-work .tags .scroll-three',   { delay: 900  });
    sr.reveal('.our-work .tags .scroll-four',   { delay: 1200  });

    //projects
    sr.reveal('.our-work .projects .item', fromLeft);    
    sr.reveal('.our-work .projects .scroll-one',   { delay: 200  });
    sr.reveal('.our-work .projects .scroll-two',   { delay: 400  });
    sr.reveal('.our-work .projects .scroll-three',   { delay: 600  });
    sr.reveal('.our-work .projects .scroll-four',   { delay: 800  });
    sr.reveal('.our-work .projects .scroll-five',   { delay: 1000  });
    sr.reveal('.our-work .projects .scroll-six',   { delay: 1200  });
    sr.reveal('.our-work .projects .scroll-seven',   { delay: 1400  });
    sr.reveal('.our-work .projects .scroll-eight',   { delay: 1600  });
}

function blogReveal(){
    //top
    sr.reveal('.blog .pink-triangle', fromTop);
    sr.reveal('.blog .title', fromTop);

    //post
    sr.reveal('.blog .posts .post', fromLeft);
    sr.reveal('.blog .posts .post.scroll-one',   { delay: 300  });
    sr.reveal('.blog .posts .post.scroll-two',   { delay: 600  });
    sr.reveal('.blog .posts .post.scroll-three',   { delay: 900  });
}

function getUpdateReveal(){
    //top
    sr.reveal('.get-update .title', fromTop);

    //social
    sr.reveal('.get-update .left .social-item', fromLeft);
    sr.reveal('.get-update .left .social-item.scroll-one',   { delay: 1200  });
    sr.reveal('.get-update .left .social-item.scroll-two',   { delay: 900  });
    sr.reveal('.get-update .left .social-item.scroll-three',   { delay: 600  });
    sr.reveal('.get-update .left .social-item.scroll-three',   { delay: 300  });

    //subscribe
    sr.reveal('.get-update .right .form input', fromLeft);
    sr.reveal('.get-update .right .form input.scroll-one',   { delay: 300  });
    sr.reveal('.get-update .right .form input.scroll-two',   { delay: 600  });
}

function contactUsReveal(){
    //top
    sr.reveal('.contact-us .pink-triangle', fromTop);
    sr.reveal('.contact-us .title', fromTop);
    sr.reveal('.contact-us .description', fromLeft);

    //company info - left
    sr.reveal('.contact-us .contact .left', fromLeft);

    //form
    sr.reveal('.contact-us .contact .right', fromLeft);
}

servicesReveal();
aboutReveal();
teamReveal();
workReveal();
blogReveal();
getUpdateReveal();
contactUsReveal();


$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
});

$('.tags .item').on("click", function(e){
    e.preventDefault();
    $(this).parent('.tags').children('.item').removeClass('active');
    $(this).addClass("active");
});

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
