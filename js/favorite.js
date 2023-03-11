let favoriteButton = document.querySelector('.favorite-button')

favoriteButton.onclick = function (evt) {
  if (favoriteButton.classList.contains('blue-button')) {
    favoriteButton.classList.remove('blue-button');
    favoriteButton.classList.add('green-button');
    favoriteButton.textContent = 'В избранном';
  } else {
    favoriteButton.classList.remove('green-button');
    favoriteButton.classList.add('blue-button');
    favoriteButton.textContent = 'В избранное';
  }
}
