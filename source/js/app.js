const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const featuredItemLink =  document.querySelector('.featured-item__link');

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

const cardBtn = document.querySelectorAll(".product-card__button");
for (let btn of cardBtn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".modal").classList.remove("modal--hidden")
  })
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault()
    document.querySelector(".modal").classList.add("modal--hidden")
  }
})

if (featuredItemLink) {
  featuredItemLink.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(".modal").classList.remove("modal--hidden")
  })
}
