
/**
 * Lerp
 */

 function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}

/**
 * Toggle Nav on scroll
*/
const nav = document.querySelector(".navbar");
const hero = document.querySelector(".js-hero");
const heroBottom = hero.getBoundingClientRect().height + hero.getBoundingClientRect().top;


let scrollPosition = 0;
window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;
    nav.classList.toggle("window-scroll", scrollPosition > heroBottom);
});

/**
 * Mobile Menu
*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navli = document.querySelector(".navbar__menu");
const buttom =document.querySelector(".navbar__menu__buttom");
const buttomsp =document.querySelector(".navbar__buttom");

close.style.display="none";

if (bar){
    bar.addEventListener('click', () => {
        navli.classList.add('active');
        bar.style.display="none";
      //  buttomsp.style.display="none";
        close.style.display="flex";
    })

}

if (close){
    close.addEventListener('click', () => {
        navli.classList.remove('active');
        bar.style.display="flex";
        close.style.display="none";
       // buttomsp.style.display="flex";
    })
}


/**
 * Move Circle with cursor
*/
const circleBack =document.querySelector(".js-circle-back");
const circleFront = document.querySelector(".js-circle-front");

console.log("heroBottom", heroBottom);

let mouseX = window.innerWidth * 0.5;
let mouseY = window.innerHeight * 0.5;
let circleBackX = window.innerWidth * 0.5;
let circleBackY = window.innerHeight * 0.5;
let circleFrontX = window.innerWidth * 0.5;
let circleFrontY = window.innerHeight * 0.5;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

window.addEventListener("touchstart", (e) => {
    mouseX = e.targetTouches[0].clientX;
    mouseY = e.targetTouches[0].clientY;
});

function update(){
    const circleBackTop = circleBackY - circleBack.getBoundingClientRect().width * 0.5;
    const circleBackRight = circleBackX - circleBack.getBoundingClientRect().width * 0.5;
    const circleFrontTop = circleFrontY - circleFront.getBoundingClientRect().width * 0.5;
    const circleFrontRight = circleFrontX - circleFront.getBoundingClientRect().width * 0.5;

    circleBack.style.transform = `translate3d(${circleBackRight}px, ${circleBackTop}px, 0)`;
    circleFront.style.transform = `translate3d(${circleFrontRight}px, ${circleFrontTop}px, 0)`;
}

function tick(){
    window.requestAnimationFrame(tick);
    
    circleBackX = lerp (circleBackX, mouseX, 0.1);
    circleFrontX = lerp (circleFrontX, mouseX, 0.2);
    if (scrollPosition < heroBottom){
        circleBackY = lerp (circleBackY, mouseY, 0.1);
        circleFrontY = lerp (circleFrontY, mouseY, 0.2);
    }
    
    update();
}

tick();

/**
 * Animations
*/

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-about', {
    scrollTrigger: '.animate-about',
    duration :1,
    opacity: 1,
    x: -250,
    stragger :0.12
});

gsap.from('.animate-job', {
    scrollTrigger: '.animate-job',
    duration :1,
    opacity: 0,
    y: -250,
    stragger :0.3
});

gsap.from('.animate-skills', {
    scrollTrigger: '.animate-skills',
    duration :1,
    opacity: 1,
    x: -250,
    stragger :0.12
});

gsap.from('.animate-works-left', {
    scrollTrigger: '.animate-works-left',
    duration :1,
    opacity: 1,
    x: -250,
    stragger :0.12
});

gsap.from('.animate-works-right', {
    scrollTrigger: '.animate-works-right',
    duration :1,
    opacity: 1,
    x: 1000,
    stragger :0.12
});

gsap.from('.animate-partners', {
    scrollTrigger: '.animate-partners',
    duration :1,
    opacity: 1,
    x: -250,
    stragger :0.12
});

gsap.from('.animate-seventyone', {
    scrollTrigger: '.animate-seventyone',
    duration :1,
    opacity: 1,
    x: -250,
    stragger :0.12
});


gsap.from('.animate-career', {
    scrollTrigger: '.animate-career',
    duration :1,
    opacity: 0,
    y: -250,
    stragger :0.3
});


gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration :1,
    opacity: 1,
    x: -250,
    stragger :0.12
});

gsap.from('.animate-details', {
    scrollTrigger: '.animate-details',
    duration :1,
    opacity: 1,
    x: 1000,
    stragger :0.12
});