const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
const scalePhotoSize = document.querySelector('.scale__control--value');
const currentPhoto = document.querySelector('.img-upload__preview img');

const COUNT_STEP = 25;

let currentValue = parseInt(scalePhotoSize.value, 10);

const reducingPhoto = () => {
  scaleButtonSmaller.addEventListener('click', () => {
    if (currentValue <= 25){
      return false;
    }

    currentValue = currentValue - COUNT_STEP;
    const currentScale = currentValue / 100;

    // - Подставляем актуальное значение размера фотографии.
    scalePhotoSize.value = `${currentValue}%`;

    // - Добавляем css свойство актуального значения размера фотографии.
    currentPhoto.style.transform = `scale(${currentScale})`;
    return currentValue;
  });
};

const enlargesPhoto = () => {
  scaleButtonBigger.addEventListener('click', () => {
    if (currentValue >= 100){
      return false;
    }

    currentValue = currentValue + COUNT_STEP;
    const currentScale = currentValue / 100;

    // - Подставляем актуальное значение размера фотографии.
    scalePhotoSize.value = `${currentValue}%`;

    // - Добавляем css свойство актуального значения размера фотографии.
    currentPhoto.style.transform = `scale(${currentScale})`;
    return currentValue;
  });
};

const customizationPhoto = () => {
  // - Добавляем слушатель на уменьшение фотографии
  reducingPhoto();

  // - Добавляем слушатель на увеличение фотографии
  enlargesPhoto();
};

export {customizationPhoto};
