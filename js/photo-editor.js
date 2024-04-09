import {isEscapeKey} from './util.js';
import {resetValidation} from './validate-photo-editor.js';
import {clearPhotoSize} from './customization-size-photo.js';
import {sliderClear} from './customization-color-filter-photo.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const photoUploadInput = document.querySelector('.img-upload__input');
const photoEditorOverlay = document.querySelector('.img-upload__overlay');
const buttonClose = document.querySelector('.img-upload__cancel');
const textHashtagsInput = document.querySelector('.text__hashtags');
const textareaDescriptionInput = document.querySelector('.text__description');
const uploadPreview = document.querySelector('.img-upload__preview img');

const closePhotoEditorOverlay = () => {
  // - Сбрасываем валидацию после закрытия модального окна
  resetValidation();
  photoEditorOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  clearPhotoSize();
  sliderClear();


  // - Очищаем input от файлов при закрытии
  photoUploadInput.value = '';
  textHashtagsInput.value = '';
  textareaDescriptionInput.value = '';

  // - Удаляем обработчик на клавишу Esc
  document.removeEventListener('keydown', onDocumentKeydown);
};

const getPictureFile = () => {
  const file = photoUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const correctFileName = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (correctFileName) {
    uploadPreview.src = URL.createObjectURL(file);
  } else {
    closePhotoEditorOverlay();
  }
};

const openPhotoEditorOverlay = () => {
  photoEditorOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  getPictureFile();

  // - Добавляем обработчик на клавишу Esc
  document.addEventListener('keydown', onDocumentKeydown);
};

const isActiveElement = (currentElement) => document.activeElement !== currentElement;

function onDocumentKeydown (evt) {
  const alertMessage = document.querySelector('.error__inner');

  if (!alertMessage && isEscapeKey(evt) && isActiveElement(textHashtagsInput) && isActiveElement(textareaDescriptionInput)) {
    evt.preventDefault();
    closePhotoEditorOverlay();
  }
}

const initPhotoEditor = () => {
  // - Добавляем обработчик на открытие модального окна
  photoUploadInput.addEventListener('change', () => {
    openPhotoEditorOverlay();
  });

  // - Добавляем обработчик на закрытие модального окна
  buttonClose.addEventListener('click', () => {
    closePhotoEditorOverlay();
  });
};

export {initPhotoEditor, closePhotoEditorOverlay};
