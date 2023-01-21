let newsletter = document.querySelector('.newsletter-words');
let form = document.querySelector('.newsletter-form');
let email = document.querySelector('.newsletter-email__field');

form.onsubmit = function (evt) {
  evt.preventDefault();
  newsletter.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки!';
}
