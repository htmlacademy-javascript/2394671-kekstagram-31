import {getPhotosDescriptionList} from './data.js';
import {createUserPhoto} from './create-user-pictures.js';
import {initBigPicture} from './big-picture.js';
import {initPhotoEditor} from './photo-editor.js';
import {addValidatingInputs} from './validate-photo-editor.js';
import {customizationSizePhoto} from './customization-size-photo.js';
import {initSlider} from './customization-color-filter-photo.js';

const photoList = getPhotosDescriptionList();

// - Создает фотографии на странице
createUserPhoto(photoList);

// - Добавляет Модальное окно с выбранной фотографией
initBigPicture(photoList);

// - Добавляет Модальное окно редактирования
initPhotoEditor();

// - добавляет валидацию PristineJS
addValidatingInputs();

// - добавляет возможность редактировать размер фотографии
customizationSizePhoto();

// - добавляет слайдер на модальное окно редактирования фотографии
initSlider();
