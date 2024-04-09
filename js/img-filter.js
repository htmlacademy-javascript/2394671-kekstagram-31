import {createUserPhoto, createUserRandomPhoto, createUserPhotoMostDiscussed} from './create-user-pictures.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

const Filters = {
  default: createUserPhoto,
  random: createUserRandomPhoto,
  discussed: createUserPhotoMostDiscussed,
};

const sectionFilters = document.querySelector('.img-filters');
const formFilters = sectionFilters.querySelector('.img-filters__form');
const allFilters = sectionFilters.querySelectorAll('.img-filters__button');

const getEventListener = (photos) => {
  formFilters.addEventListener('click', (evt) => {
    if (evt.target.type === 'button') {
      allFilters.forEach((element) => element.classList.remove('img-filters__button--active'));
      evt.target.classList.add('img-filters__button--active');

      const drawNewPhotos = () => {
        const currentFilter = Filters[evt.target.value];
        currentFilter(photos);
      };

      // drawNewPhotos(evt, photos);
      debounce(() => drawNewPhotos(evt, photos), RERENDER_DELAY)();
    }
  });
};

const imgFilter = (photos) => {
  sectionFilters.classList.remove('img-filters--inactive');
  getEventListener(photos);
};

export {imgFilter};
