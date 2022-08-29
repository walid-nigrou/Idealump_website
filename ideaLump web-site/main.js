const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    document
      
      nav.classList.toggle("window-scroll", window.scrollY > 0);
  });

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