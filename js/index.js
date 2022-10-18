let popClose = document.querySelector(".rv-popup__close");
let pop = document.querySelector(".rv-popup");

if (popClose) {
  popClose.addEventListener('click', function () {
    pop.classList.remove("rv-popup--active");
  });
}

var search = document.getElementById('search');
var buttonSearch = document.getElementById('button-search');

var burger = document.querySelector('.burger');
var menuList = document.querySelector('.rv-menu__list');

if (search && search.disabled) {
  buttonSearch.classList.add('button-search__active')
}
if (burger) {
  burger.addEventListener('click', function (){
    burger.classList.toggle('burger--active');
    menuList.classList.toggle('rv-menu__list--active');
  })
}

let swiper = new Swiper('.different__swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    630: {}
  }
});



