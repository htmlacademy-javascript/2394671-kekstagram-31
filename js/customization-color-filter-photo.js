const filterList = {
  None: {
    MIN: 0,
    MAX: 0,
    STEP: 0,
    START: 1,
    FILTER: '',
    UNITS: ''
  },
  Chrome: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
    FILTER: 'grayscale',
    UNITS: ''
  },
  Sepia: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
    FILTER: 'sepia',
    UNITS: ''
  },
  Marvin: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    START: 100,
    FILTER: 'invert',
    UNITS: '%'
  },
  Phobos: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    START: 3,
    FILTER: 'blur',
    UNITS: 'px'
  },
  Heat: {
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
const InputValueSlider = document.querySelector('.effect-level__value');
const currentPhoto = document.querySelector('.img-upload__preview img');
const listFilter = document.querySelector('.effects__list');

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
  InputValueSlider.value = '';
};

// - скрываем слайдер т.к по умолчанию стоит вариант без фильтра.
hideSlider();

let CurrentSettings = {};

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

  CurrentSettings = {
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
    InputValueSlider.value = sliderElement.noUiSlider.get();

    // - Подставляем актуальные значения для стилей в зависимости от выбранного режима цветокоррекции.
    currentPhoto.style.filter = `${CurrentSettings.FILTER}(${InputValueSlider.value}${CurrentSettings.UNITS})`;
  });
};

export {initSlider};
