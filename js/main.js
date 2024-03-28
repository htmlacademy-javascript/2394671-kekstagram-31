import {getPhotosDescriptionList} from './data.js';
import {createUserPhoto} from './create-user-pictures.js';
import {initBigPicture} from './big-picture.js';
import {initPhotoEditor} from './photo-editor.js';
import './validate-photo-editor.js';

const photoList = getPhotosDescriptionList();


createUserPhoto(photoList);
initBigPicture(photoList);
initPhotoEditor();
