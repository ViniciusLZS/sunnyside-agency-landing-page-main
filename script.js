function initMenuMobile(){
const menuMobile = document.querySelector('#menu-mobile');

function toggleMenu(){
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
}

menuMobile.addEventListener('click', toggleMenu);
}
initMenuMobile();


function initScrollSuave(){

const scrollSuave = document.querySelector('.arrow img');

function clickScroll(event){
  event.preventDefault();
  const arrow = document.querySelector('.section-content');
  
  arrow.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

scrollSuave.addEventListener('click', clickScroll);

}
initScrollSuave();