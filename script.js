const button = document.querySelector('.menu');
const nav = document.getElementById('navlinks');
if (button && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
  };
  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !button.contains(event.target)) closeMenu();
  });
}
