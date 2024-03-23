import {isEscapeKey} from './util';

const formPicture = document.querySelector('.pictures');
const windowModal = document.querySelector('.big-picture');
const buttonClose = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindowModal();
  }
};

const openWindowModal = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.picture')) {
    windowModal.classList.remove('hidden');

    document.addEventListener('keydown', onDocumentKeydown);
  }
  // замена данных в окне
  const currentElement = evt.target.closest('.picture');
  console.log(currentElement.querySelector('#'));
};

const closeWindowModal = () => {
  windowModal.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
};

formPicture.addEventListener('click', (evt) => {
  openWindowModal (evt);
});

buttonClose.addEventListener('click', () => {
  closeWindowModal();
});
