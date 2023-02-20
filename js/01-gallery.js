import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення розмітки

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class = 'gallery__item'>
      <a class = 'gallery__link' href = '${original}'>
      <img class = 'gallery__image' src = '${preview}' data-source = '${original}' alt = '${description}'>
      </a></div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', createGallery);

// Відкриття модального вікна по кліку на елементі галереї

const clickOnImage = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageSelect = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
      <img src='${imageSelect}'>
  `,
    {
      onShow: () => {
        document.addEventListener('keydown', close);
      },
      onClose: () => {
        document.removeEventListener('keydown', close);
      },
    }
  );

  instance.show();

  // Закриття з клавіатури

  gallery.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
};

gallery.addEventListener('click', clickOnImage);
