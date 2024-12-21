const menuBtn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.modal-close-button');
const modalMenu = document.querySelector('.modal');
const menuItem = document.querySelectorAll('.menu-list-item');
const header = document.querySelector('.header');
const headerItem = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
menuItem.forEach(item => item.addEventListener('click', closeModal));
window.addEventListener('scroll', blurHeader);

function openModal() {
  modalMenu.style.display = 'block';
}

function closeModal(e) {
  modalMenu.style.display = 'none';
}

function blurHeader() {
  if (window.scrollY > 60) {
    header.style.backdropFilter = 'blur(10px)';
    headerItem.forEach(item => item.classList.remove('nav-link'));
    headerItem.forEach(item => item.classList.add('nav-link-scroll'));
  } else {
    header.style.backdropFilter = 'blur(0px)';
    headerItem.forEach(item => item.classList.add('nav-link'));
    headerItem.forEach(item => item.classList.remove('nav-link-scroll'));
  }
}
