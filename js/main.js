import {getPhotosDescriptionList} from './data.js';
import {createUserPhoto} from './create-user-pictures.js';
import {initBigPicture} from './big-picture.js';
import {initPhotoEditor} from './photo-editor.js';
import {addValidatingInputs} from './validate-photo-editor.js';
import {customizationPhoto} from './customization-photo.js';

const photoList = getPhotosDescriptionList();


createUserPhoto(photoList);
initBigPicture(photoList);
initPhotoEditor();
addValidatingInputs();
customizationPhoto();
