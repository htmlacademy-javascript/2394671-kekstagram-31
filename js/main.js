import {createUserPhoto} from './create-user-pictures.js';
import {initBigPicture} from './big-picture.js';
import {initPhotoEditor} from './photo-editor.js';
import {addValidatingInputs} from './validate-photo-editor.js';
import {customizationSizePhoto} from './customization-size-photo.js';
import {initSlider} from './customization-color-filter-photo.js';
import {getData} from './api.js';
import {closePhotoEditorOverlay} from './photo-editor.js';

// - Создает фотографии на странице
getData()
  .then((photos) => {
    createUserPhoto(photos);
  });

// - Добавляет Модальное окно с выбранной фотографией
getData()
  .then((photos) => initBigPicture(photos));

// - Добавляет Модальное окно редактирования
initPhotoEditor();

// - добавляет валидацию PristineJS
addValidatingInputs(closePhotoEditorOverlay);

// - добавляет возможность редактировать размер фотографии
customizationSizePhoto();

// - добавляет слайдер на модальное окно редактирования фотографии
initSlider();
