const photoEditorForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const textAreaInput = document.querySelector('.text__description');
const validHashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const getHashtagArray = () => hashtagsInput.value.split(' ');

const pristine = new Pristine(photoEditorForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: '.img-upload__field-wrapper--error'
});


// - Правило: сравниваем введенные в строку теги с валидным значением
const checksHashTagSpelling = () => {
  // - создаем массив тегов введенных пользователем
  const hashtagArray = getHashtagArray();

  if (hashtagsInput.value === '') {
    return true;
  }

  // - проверяем елемменты массива из введенных пользователем тегов
  for (let i = 0; i < hashtagArray.length; i++) {
    if (!validHashtag.test(hashtagArray[i])) {
      return false;
    }
  }

  return true;
};

// - Правило: не больше определенного числа hashtag
const checkHastTagQuantity = () => {
  const hashtagArray = getHashtagArray();

  if (hashtagArray.length > 5) {
    return false;
  }

  return true;
};

// - Правило: хэштеги не могут повторятся
const checksDuplicatesHashTag = () => {
  const hashtagArray = getHashtagArray().map((arrayElement) => arrayElement.toLowerCase());

  const Duplicates = hashtagArray.filter((number, index, numbers) => numbers.indexOf(number) !== index);

  if (Duplicates.length >= 1) {
    return false;
  }

  return true;
};

// - длина комментария не может быть больше 140 символов
const checkTextareaLength = () => {
  if (textAreaInput.value.length === 140) {
    return false;
  }

  return true;
};


// - Добавляем новые правила для валидации
pristine.addValidator(hashtagsInput, checksHashTagSpelling, 'введён невалидный хэштег');
pristine.addValidator(hashtagsInput, checkHastTagQuantity, 'превышено количество хэштегов');
pristine.addValidator(hashtagsInput, checksDuplicatesHashTag, 'хэштеги не могут повторятся');
pristine.addValidator(textAreaInput, checkTextareaLength, 'длина комментария не может быть больше 140 символов');


photoEditorForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
});

