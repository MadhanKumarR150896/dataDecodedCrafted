
const headerRight = document.querySelector('.header-right');
const menuButton = document.querySelector('.menu-button');
const overlay = document.querySelector('.overlay');

const openMenu = () => {
  headerRight.classList.add('visible');
  overlay.classList.add('visible');
  headerRight.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');
}

const closeMenu = () => {
  headerRight.classList.remove('visible');
  overlay.classList.remove('visible');
  headerRight.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', (event) => {
  if (event.target.closest('.menu-button') && !headerRight.classList.contains('visible')) {
    openMenu();
    return;
  }
  if ((event.target.closest('.close-button') || event.target.closest('.overlay')) && headerRight.classList.contains('visible')) {
    closeMenu();
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && headerRight.classList.contains('visible')) {
    closeMenu();
  }
});