// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

export function isBurger() {
  const burgerBtn = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const popup = menu.parentElement
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger_active')
    popup.classList.toggle('popup_active')
    menu.classList.toggle('menu_active')
  })
  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      burgerBtn.classList.remove('burger_active')
      popup.classList.remove('popup_active')
      menu.classList.remove('menu_active')
    }
  })
}
