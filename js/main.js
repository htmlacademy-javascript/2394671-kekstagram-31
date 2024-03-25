import {getPhotosDescriptionList} from './data.js';
import {createUserPhoto} from './create-user-pictures.js';
import {initBigPicture} from './big-picture.js';

const photoList = getPhotosDescriptionList();


createUserPhoto(photoList);
initBigPicture(photoList);

