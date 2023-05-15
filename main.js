const sandwichmenu = document.querySelector('.menu-burger');
const menu = document.querySelector('.site-navigation');

sandwichmenu.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.toggle('menu-active');
});
