import {isEscapeKey} from './util.js';
import {drawBigPicture} from './draw-big-picture.js';
import {clearComments} from './draw-comments.js';

const pictureContainer = document.querySelector('.pictures');
const windowModal = document.querySelector('.big-picture');
const buttonClose = document.querySelector('#picture-cancel');
const socialCommentsList = document.querySelector('.social__comments');
const commentTextInput = document.querySelector('.social__footer-text');

const openWindowModal = (evt, posts) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    windowModal.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);

    // - Поиск элемента по data-set-id
    const currentElement = +evt.target.closest('.picture').dataset.pictureId;
    const currentPost = posts.find((item) => item.id === currentElement);
    drawBigPicture(currentPost);

    // - Добавляем класс чтобы контейнер с фотографиями позади не прокручивался
    document.body.classList.add('modal-open');
  }
};

const closeWindowModal = () => {
  windowModal.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  socialCommentsList.innerHTML = '';

  // - возвращаем кнопку загрузки доп комментариев, очищаем комментарии.
  clearComments();

  // - убираем класс чтобы контейнер с фотографиями позади мог прокручиваться
  document.body.classList.remove('modal-open');
};

const isActiveElement = (currentElement) => document.activeElement !== currentElement;

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt) & isActiveElement(commentTextInput)) {
    evt.preventDefault();
    closeWindowModal();
  }
}

const initBigPicture = (posts) => {

  pictureContainer.addEventListener('click', (evt) => {
    openWindowModal (evt, posts);
  });

  buttonClose.addEventListener('click', () => {
    closeWindowModal();
  });
};

export {initBigPicture};
