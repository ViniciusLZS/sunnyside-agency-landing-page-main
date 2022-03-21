function initMenuMobile(){
const menuMobile = document.querySelector('#menu-mobile');

function toggleMenu(){
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
}

menuMobile.addEventListener('click', toggleMenu);
}
initMenuMobile();