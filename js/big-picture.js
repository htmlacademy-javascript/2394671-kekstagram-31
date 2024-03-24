import {isEscapeKey} from './util';
import {drawBigPicture} from './draw-big-picture';
import {findersSocialComment} from './show-comments';

const pictureContainer = document.querySelector('.pictures');
const windowModal = document.querySelector('.big-picture');
const buttonClose = document.querySelector('#picture-cancel');
const socialCommentsList = document.querySelector('.social__comments');

socialCommentsList.innerHTML = '';

const openWindowModal = (evt, posts) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    windowModal.classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);

    // - Поиск элемента по data-set-id
    const currentElement = +evt.target.closest('.picture').dataset.pictureId;
    const currentPost = posts.find((item) => item.id === currentElement);
    drawBigPicture(currentPost);

    // - Ищем и раскрываем комментарии
    findersSocialComment();

    // - Добавляем класс чтобы контейнер с фотографиями позади не прокручивался
    document.body.classList.add('modal-open');
  }
};

const closeWindowModal = () => {
  windowModal.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  socialCommentsList.innerHTML = '';

  // - убираем класс чтобы контейнер с фотографиями позади мог прокручиваться
  document.body.classList.remove('modal-open');
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
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
