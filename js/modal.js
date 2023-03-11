let modal = document.querySelector('.modal-container');
let openModal = document.querySelector('.button-hotel');
let closeModal = document.querySelector('.modal-close-button');

openModal.onclick = function (event) {
  event.preventDefault();
  modal.classList.remove('modal-container-close');
}

closeModal.onclick = function () {
  modal.classList.add('modal-container-close');
}

// increase and decrease amount of people
let adultsInput = document.querySelector('#auth-adults');
let childrenInput = document.querySelector('#auth-children');
let increaseAdults = document.querySelector('#increase-adults');
let decreaseAdults = document.querySelector('#decrease-adults');
let increaseChildren = document.querySelector('#increase-children');
let decreaseChildren = document.querySelector('#decrease-children');

increaseAdults.onclick = function () {
  adultsInput.value++;
}

decreaseAdults.onclick = function () {
  adultsInput.value--;
}

increaseChildren.onclick = function () {
  childrenInput.value++;
}

decreaseChildren.onclick = function () {
  childrenInput.value--;
}


