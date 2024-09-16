burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__toogled-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');
})