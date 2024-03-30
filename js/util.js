// - Выдает случайное число в диапазоне от и до
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// - Функция с замыканием выдает неповторяющееся число в диапазоне от и до
const getRandomId = (min, max) => {
  const photoIdList = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (photoIdList.length >= (max - min + 1)) {
      return null;
    }

    while (photoIdList.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    photoIdList.push(currentValue);
    return currentValue;
  };
};

// - Callback нажата ли клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomId, isEscapeKey};
