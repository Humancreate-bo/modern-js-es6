// Скрипт сайта. Написан на ES6+, как и положено по теме :)

// ---------- Бургер-меню ----------
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    burger.textContent = isOpen ? '✕' : '☰';
  });
}
