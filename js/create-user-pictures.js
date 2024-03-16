import {photosDescriptionList} from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const listPhoto = photosDescriptionList();
const photoFragment = document.createDocumentFragment();

listPhoto.forEach(({url, description, likes, comments})=> {
  const templatePictureClone = templatePicture.cloneNode(true);
  templatePictureClone.querySelector('.picture__img').src = url;
  templatePictureClone.querySelector('.picture__img').alt = description;
  templatePictureClone.querySelector('.picture__likes').textContent = likes;
  templatePictureClone.querySelector('.picture__comments').textContent = comments.length;
  photoFragment.append(templatePictureClone);
});

picturesList.append(photoFragment);
