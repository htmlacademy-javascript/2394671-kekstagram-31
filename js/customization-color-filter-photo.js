const sliderElement = document.querySelector('.effect-level__slider');
const sliderParent = document.querySelector('.img-upload__effect-level');
const InputValueSlider = document.querySelector('.effect-level__value');
const currentPhoto = document.querySelector('.img-upload__preview img');
const listFilter = document.querySelector('.effects__list');
const filterOriginal = listFilter.querySelector('#effect-none');
const filterChrome = listFilter.querySelector('#effect-chrome');
const filterSepia = listFilter.querySelector('#effect-sepia');
const filterMarvin = listFilter.querySelector('#effect-marvin');
const filterPhobos = listFilter.querySelector('#effect-phobos');
const filterHeat = listFilter.querySelector('#effect-heat');


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

const showedSlider = () => {
  sliderElement.removeAttribute('disabled', true);
  sliderParent.classList.remove('hidden');
};

const hideSlider = () => {
  sliderElement.setAttribute('disabled', true);
  sliderParent.classList.add('hidden');
};

const cleaningStyle = () => {
  currentPhoto.style = '';
  InputValueSlider.value = '';
};

const addNewFilter = (CurrentFilter) => {
  currentPhoto.style.filter = CurrentFilter;
};

// - скрываем слайдер т.к по умолчанию стоит вариант без фильтра.
hideSlider();

let currentSettings = {};

listFilter.addEventListener('change', () => {
  if(filterOriginal.checked) {
    hideSlider();
    cleaningStyle();
  } else if (filterChrome.checked) {
    cleaningStyle();
    showedSlider();
    addNewFilter('grayscale(1)');

    // - Меняем шаг и стартовую точку слайдера для режима 'Хром'.
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    });

    currentSettings = {
      filter: 'grayscale',
      Units: ''
    };

    return currentSettings;
  } else if (filterSepia.checked) {
    cleaningStyle();
    showedSlider();
    addNewFilter('sepia(1)');

    // - Меняем шаг и стартовую точку слайдера для режима 'Хром'.
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    });

    currentSettings = {
      filter: 'sepia',
      Units: ''
    };

    return currentSettings;
  } else if (filterMarvin.checked) {
    cleaningStyle();
    showedSlider();

    // - Меняем шаг и стартовую точку слайдера для режима 'Хром'.
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    });

    currentSettings = {
      filter: 'invert',
      Units: '%'
    };

    return currentSettings;
  } else if (filterPhobos.checked) {
    cleaningStyle();
    showedSlider();

    // - Меняем шаг и стартовую точку слайдера для режима 'Хром'.
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
    });

    currentSettings = {
      filter: 'blur',
      Units: 'px'
    };

    return currentSettings;
  } else if (filterHeat.checked) {
    cleaningStyle();
    showedSlider();

    // - Меняем шаг и стартовую точку слайдера для режима 'Хром'.
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
    });

    currentSettings = {
      filter: 'brightness',
      Units: ''
    };

    return currentSettings;
  }
});


// - Записываем значение слайдера в Input при изменение значения слайдера.
sliderElement.noUiSlider.on('update', () => {
  // - подставляем в input актуальное значение слайдера.
  InputValueSlider.value = sliderElement.noUiSlider.get();

  // - Подставляем актуальные значения для стилей в зависимости от выбранного режима цветокоррекции.
  currentPhoto.style.filter = `${currentSettings.filter}(${InputValueSlider.value}${currentSettings.Units})`;
});


