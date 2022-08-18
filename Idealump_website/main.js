const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    document
      
      nav.classList.toggle("window-scroll", window.scrollY > 0);
  });

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navli = document.querySelector(".navbar__menu");

if (bar){
    bar.addEventListener('click', () => {
        navli.classList.add('active');
    })

}

if (close){
    close.addEventListener('click', () => {
        navli.classList.remove('active');

    })

}