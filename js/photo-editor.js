import {isEscapeKey} from './util.js';

const photoUploadInput = document.querySelector('.img-upload__input');
const photoEditorOverlay = document.querySelector('.img-upload__overlay');
const buttonClose = document.querySelector('.img-upload__cancel');
const textHashtagsInput = document.querySelector('.text__hashtags');
const textareaDescriptionInput = document.querySelector('.text__description');

const openPhotoEditorOverlay = () => {
  photoEditorOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // - Добавляем обработчик на клавишу Esc
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhotoEditorOverlay = () => {
  photoEditorOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  // - Очищаем input от файлов при закрытии
  photoUploadInput.value = '';
  textHashtagsInput.value = '';
  textareaDescriptionInput.value = '';

  // - Удаляем обработчик на клавишу Esc
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditorOverlay();
  }
}

const initPhotoEditor = () => {
  // - Добавляем обработчик на открытие модального окна
  photoUploadInput.addEventListener('change', () => {
    textHashtagsInput.addEventListener ('focus', (evt) => {
      evt.stopPropagation();
    });
    openPhotoEditorOverlay();
  });

  // - Добавляем обработчик на закрытие модального окна
  buttonClose.addEventListener('click', () => {
    closePhotoEditorOverlay();
  });
};

export {initPhotoEditor};
