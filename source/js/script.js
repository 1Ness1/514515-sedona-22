const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header')


navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


//modal
const modal = document.querySelector('.modal');
const modalSuccess = document.querySelector('.modal--success');
const modalFalture = document.querySelector('.modal--falture');
const modalClose = document.querySelectorAll('.modal__button');
const modalOpen = document.querySelector('.feedback__button');
const form = document.querySelector('.feedback-form');
const fields = form.querySelector('.form__field')

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (fields.value.length <= 0) {
    modalFalture.classList.add('modal--show');
  } else {
    modalSuccess.classList.add('modal--show');
  }
})

modalClose.forEach((modalClose) => {
  modalClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalFalture.classList.remove('modal--show');
    modalSuccess.classList.remove('modal--show');
  })
})


// modalOpen.addEventListener('click', function(evt) {
//   evt.preventDefault();

//   modalSuccess.classList.add('modal--show');
// });




