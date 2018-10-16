window.sr = ScrollReveal({mobile: false});

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

function leftReveal(){
    sr.reveal('.curriculo', fromLeft);
    sr.reveal('.item', fromLeft);
    sr.reveal('.item.scroll-one', {delay: 150});
    sr.reveal('.item.scroll-two', {delay: 300});
    sr.reveal('.item.scroll-three', {delay: 450});
    
    // sr.reveal('.name.scroll-one', {delay: 150});
}

function rightReveal(){
    sr.reveal('header .left .photo', fromTop);
    sr.reveal('.name', fromRight);
    sr.reveal('.lastname', fromRight);
    sr.reveal('.job', fromRight);
    sr.reveal('.description', fromRight);
    sr.reveal('.projects', fromRight);
    sr.reveal('.project', fromRight);

    sr.reveal('.name.scroll-one', {delay: 150});
    sr.reveal('.lastname.scroll-two', {delay: 300});
    sr.reveal('.job.scroll-three', {delay: 450});
    sr.reveal('.description.scroll-four', {delay: 600});

    sr.reveal('.projects', {delay: 700});

    sr.reveal('.project.scroll-five', {delay: 850});
    sr.reveal('.project.scroll-six', {delay: 1000});
    sr.reveal('.project.scroll-seven', {delay: 1150});
}

rightReveal();
leftReveal();