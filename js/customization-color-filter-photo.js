const filterList = {
  none: {
    MIN: 0,
    MAX: 0,
    STEP: 0,
    START: 1,
    FILTER: '',
    UNITS: ''
  },
  chrome: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
    FILTER: 'grayscale',
    UNITS: ''
  },
  sepia: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
    FILTER: 'sepia',
    UNITS: ''
  },
  marvin: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    START: 100,
    FILTER: 'invert',
    UNITS: '%'
  },
  phobos: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    START: 3,
    FILTER: 'blur',
    UNITS: 'px'
  },
  heat: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    START: 3,
    FILTER: 'brightness',
    UNITS: ''
  }
};

const sliderElement = document.querySelector('.effect-level__slider');
const sliderParent = document.querySelector('.img-upload__effect-level');
const inputValueSlider = document.querySelector('.effect-level__value');
const currentPhoto = document.querySelector('.img-upload__preview img');
const listFilter = document.querySelector('.effects__list');
const listFilterOriginal = listFilter.querySelector('#effect-none');

// - Настраиваем слайдер.
const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 80,
    step: 1,
    connect: 'lower',
  });
};


const showSlider = () => {
  sliderElement.removeAttribute('disabled', true);
  sliderParent.classList.remove('hidden');
};

const hideSlider = () => {
  sliderElement.setAttribute('disabled', true);
  sliderParent.classList.add('hidden');
};

const clearStyle = () => {
  currentPhoto.style.filter = '';
  inputValueSlider.value = '';
};

// - скрываем слайдер т.к по умолчанию стоит вариант без фильтра.
hideSlider();

let currentSettings = {};

listFilter.addEventListener('change', (evt) => {
  const currentFilter = filterList[evt.target.value];

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentFilter.MIN,
      max: currentFilter.MAX,
    },
    step: currentFilter.STEP,
    start: currentFilter.START,
  });

  currentSettings = {
    FILTER: currentFilter.FILTER,
    UNITS: currentFilter.UNITS
  };

  showSlider();
  clearStyle();

  if (evt.target.value === 'None') {
    hideSlider();
  }

  currentPhoto.style.filter = `${currentFilter.FILTER}(${currentFilter.MAX}${currentFilter.UNITS})`;
});

const initSlider = () => {
  // - Создаем слайдер.
  createSlider();

  // - Записываем значение слайдера в Input при изменение значения слайдера.
  sliderElement.noUiSlider.on('update', () => {
    // - подставляем в input актуальное значение слайдера.
    inputValueSlider.value = sliderElement.noUiSlider.get();

    // - Подставляем актуальные значения для стилей в зависимости от выбранного режима цветокоррекции.
    currentPhoto.style.filter = `${currentSettings.FILTER}(${inputValueSlider.value}${currentSettings.UNITS})`;
  });
};

const sliderClear = () => {
  listFilterOriginal.checked = true;
  hideSlider();
  currentPhoto.style.filter = '';
};

export {initSlider, sliderClear};
