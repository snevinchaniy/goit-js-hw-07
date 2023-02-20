import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення розмітки

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class = 'gallery__item' href = '${original}'>
      <img class = 'gallery__image' src = '${preview}' alt = '${description}'>
      </a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', createGallery);

// Ініціалізація бібліотеки

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
