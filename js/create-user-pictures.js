const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const photoFragment = document.createDocumentFragment();

const listPhoto = (photo) => {
  photo.forEach(({url, description, likes, comments, id})=> {
    const templatePictureClone = templatePicture.cloneNode(true);
    const image = templatePictureClone.querySelector('.picture__img');

    image.dataset.pictureId = id;
    image.src = url;
    image.alt = description;
    templatePictureClone.querySelector('.picture__likes').textContent = likes;
    templatePictureClone.querySelector('.picture__comments').textContent = comments.length;
    photoFragment.append(templatePictureClone);
  });

  picturesList.append(photoFragment);
};

export {listPhoto};
