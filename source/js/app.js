var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

document.querySelector(".product-card__button").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".modal").classList.remove("modal--hidden")
})

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    document.querySelector(".modal").classList.add("modal--hidden")
  }
})
