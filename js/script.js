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

// ---------- Подписка в сайдбаре ----------
const subscribeForm = document.querySelector('.subscribe');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = subscribeForm.querySelector('.subscribe__input').value.trim();
    const result = subscribeForm.querySelector('.subscribe__result');
    result.textContent = `Готово! Адрес ${email} добавлен в список (учебная форма, письма не придут).`;
    subscribeForm.reset();
  });
}

// ---------- Демо шаблонных строк ----------
const demoButton = document.querySelector('#demo-btn');

if (demoButton) {
  demoButton.addEventListener('click', () => {
    const name = document.querySelector('#demo-name').value.trim() || 'гость';
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Доброе утро' : hour < 18 ? 'Добрый день' : 'Добрый вечер';
    document.querySelector('#demo-output').textContent = `${greeting}, ${name}! Сейчас ${hour} ч.`;
  });
}
