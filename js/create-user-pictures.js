import {getRandomId} from './util.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;
const PHOTO_QUANTITY = 10;

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const photoFragment = document.createDocumentFragment();

const deletePreviousPhoto = () => {
  const allPictures = document.querySelectorAll('.picture');
  allPictures.forEach((element)=> element.remove());
};

const renderMiniatures = debounce((photoArray) => {
  deletePreviousPhoto();

  photoArray.forEach(({url, description, likes, comments, id})=> {
    const templatePictureClone = templatePicture.cloneNode(true);
    const image = templatePictureClone.querySelector('.picture__img');

    templatePictureClone.dataset.pictureId = id;
    image.src = url;
    image.alt = description;
    templatePictureClone.querySelector('.picture__likes').textContent = likes;
    templatePictureClone.querySelector('.picture__comments').textContent = comments.length;
    photoFragment.append(templatePictureClone);
  });

  picturesList.append(photoFragment);
}, RERENDER_DELAY);


const createUserPhoto = (photos) => {
  renderMiniatures(photos);
};

const createUserRandomPhoto = (photo) => {
  const getRandomPhotoId = getRandomId(0, photo.length - 1);
  const newPhotoArray = [];

  for (let i = 0; i < PHOTO_QUANTITY; i++) {
    const currentPhotoId = getRandomPhotoId();
    newPhotoArray.push(photo[currentPhotoId]);
  }

  renderMiniatures(newPhotoArray);
};

const sortPhotos = (photoA, photoB) => {
  const photoOne = photoA.comments.length;
  const photoTwo = photoB.comments.length;
  return photoTwo - photoOne;
};

const createUserPhotoMostDiscussed = (photos) => {
  const newSortPhoto = photos.slice().sort(sortPhotos);

  renderMiniatures(newSortPhoto);
};

export {createUserPhoto, createUserRandomPhoto, createUserPhotoMostDiscussed};
