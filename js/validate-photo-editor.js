const NUMBER_TAGS = 5;
const TEXTAREA_SYMBOLS = 140;

const photoEditorForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const textAreaInput = document.querySelector('.text__description');
const validHashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const getHashtagArray = (value) => value.split(' ');

const pristine = new Pristine(photoEditorForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});


// - Правило: сравниваем введенные в строку теги с валидным значением
const checksHashTagSpelling = (value) => {
  // - создаем массив тегов введенных пользователем
  const hashtagArray = getHashtagArray(value);

  // - Если поле input пустой или созданный массив тегов проходит валидацию вернется true иначе tag invalid
  return value === '' || hashtagArray.every((tag) => validHashtag.test(tag));
};

// - Правило: не больше определенного числа hashtag
const checkHastTagQuantity = (value) => {
  const hashtagArray = getHashtagArray(value);

  return hashtagArray.length <= NUMBER_TAGS;
};

// - Правило: хэштеги не могут повторятся
const checksDuplicatesHashTag = (value) => {
  const hashtagArray = getHashtagArray(value).map((arrayElement) => arrayElement.toLowerCase());

  const duplicates = hashtagArray.filter((tag, index, tags) => tags.indexOf(tag) !== index);

  return duplicates.length === 0;
};

// - длина комментария не может быть больше 140 символов
const checkTextareaLength = (value) => value.length <= TEXTAREA_SYMBOLS;

// - Добавляем новые правила для валидации
pristine.addValidator(hashtagsInput, checksHashTagSpelling, 'введён невалидный хэштег', 3, true);
pristine.addValidator(hashtagsInput, checkHastTagQuantity, 'превышено количество хэштегов', 1, true);
pristine.addValidator(hashtagsInput, checksDuplicatesHashTag, 'хэштеги не могут повторятся', 2, true);
pristine.addValidator(textAreaInput, checkTextareaLength, 'длина комментария не может быть больше 140 символов');

const addValidatingInputs = () => {
  photoEditorForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();

    if (!isValid) {
      evt.preventDefault();
    }
  });
};

const resetValidation = () => {
  pristine.reset();
};

export {addValidatingInputs, resetValidation};
