// Webp
{
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

// Burger
{
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

// Accordion
{
  document.querySelectorAll('.acc').forEach(acc => {
    const accBtn = acc.querySelector('.acc__trigger')
    const accPanel = acc.querySelector('.acc__panel')
    accBtn.addEventListener('click', function () {
      acc.classList.toggle('acc_active')
      if (accPanel.style.maxHeight) {
        accPanel.style.maxHeight = null;
      } else {
        accPanel.style.maxHeight = accPanel.scrollHeight + "px";
      }
    })
  })
}

// Open Product Menu
{
  const btn = document.querySelector('.nav__link_product')
  const menu = document.querySelector('.product-menu')
  btn.addEventListener('click', function () {
    menu.classList.toggle('product-menu_active')
  })
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav__link_product') === btn ||
      e.target.closest('.product-menu') === menu) return;
    menu.classList.remove('product-menu_active')
  })
}

// Open Product Menu Adaptive
{
  const btn = document.querySelector('.nav__link_product-mobile')
  const menu = document.querySelector('.menu__product-menu')
  btn.addEventListener('click', function () {
    menu.classList.toggle('menu__product-menu_active')
    if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
  })
}
