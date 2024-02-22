function revealFunction(){
    window.sr = ScrollReveal({
        duration: 1250,  reset: true
    });
    sr.reveal('header', {origin: 'left', distance: '250px', reset: false});
    sr.reveal('.title__h2__header', {origin:'right', distance: '350px', delay: 700});
    sr.reveal('.title__h2__footer', {origin:'left', distance: '300px'});
    sr.reveal('.citate', {origin: 'bottom', distance:'200px', delay: 200});
    sr.reveal('.text__title', {origin: 'bottom', distance:'250px'});
    sr.reveal('.text__p', {origin: 'right', distance:'270px'});
    sr.reveal('#photo__1', {origin: 'left', distance:'400px'});
    sr.reveal('#photo__2', {origin: 'right', distance:'420px'});
    sr.reveal('#photo__3', {origin: 'bottom', distance:'350px'});
    sr.reveal('#photo__4', {origin: 'bottom', distance:'300px'});
    sr.reveal('#photo__5', {origin: 'right', distance:'380px'});
    sr.reveal('#photo__6', {origin: 'top', distance:'400px'});
    sr.reveal('.footer__sr', {origin: 'top', distance:'200px', duration: 1000, reset: false});
}









window.addEventListener('load', () =>{
    revealFunction();
    let hidden = document.querySelectorAll(".hidden");
    hidden.forEach(element => {
        element.classList.remove('hidden')
    });
})