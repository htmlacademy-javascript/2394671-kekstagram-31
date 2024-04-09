import {getRandomId} from './util.js';

const PHOTO_QUANTITY = 10;

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const photoFragment = document.createDocumentFragment();

const deletePreviousPhoto = () => {
  const allPictures = document.querySelectorAll('.picture');
  allPictures.forEach((element)=> element.remove());
};


const createUserPhoto = (photo) => {
  deletePreviousPhoto();

  photo.forEach(({url, description, likes, comments, id})=> {
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
};

const createUserRandomPhoto = (photo) => {
  deletePreviousPhoto();

  const getRandomPhotoId = getRandomId(0, photo.length - 1);

  for (let i = 0; i < PHOTO_QUANTITY; i++) {
    const currentPhotoId = getRandomPhotoId();

    const templatePictureClone = templatePicture.cloneNode(true);
    const image = templatePictureClone.querySelector('.picture__img');

    templatePictureClone.dataset.pictureId = photo[currentPhotoId].id;
    image.src = photo[currentPhotoId].url;
    image.alt = photo[currentPhotoId].description;
    templatePictureClone.querySelector('.picture__likes').textContent = photo[currentPhotoId].likes;
    templatePictureClone.querySelector('.picture__comments').textContent = photo[currentPhotoId].comments.length;
    photoFragment.append(templatePictureClone);
  }

  picturesList.append(photoFragment);
};

const sortPhotos = (photoA, photoB) => {
  const photoOne = photoA.comments.length;
  const photoTwo = photoB.comments.length;
  return photoTwo - photoOne;
};

const createUserPhotoMostDiscussed = (photos) => {
  deletePreviousPhoto();

  const newPhotoArray = photos.slice().sort(sortPhotos);

  newPhotoArray.forEach(({url, description, likes, comments, id})=> {
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
};

export {createUserPhoto, createUserRandomPhoto, createUserPhotoMostDiscussed};
