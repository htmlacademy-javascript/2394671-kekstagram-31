import {getPhotosDescriptionList} from './data.js';
import {createUserPhoto} from './create-user-pictures.js';
import {initBigPicture} from './big-picture.js';
import {initPhotoEditor} from './photo-editor.js';
import {addValidatingInputs} from './validate-photo-editor.js';
import {customizationSizePhoto} from './customization-size-photo.js';
import './customization-color-filter-photo.js';

const photoList = getPhotosDescriptionList();


createUserPhoto(photoList);
initBigPicture(photoList);
initPhotoEditor();
addValidatingInputs();
customizationSizePhoto();
