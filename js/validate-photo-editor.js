const photoEditorForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const validHashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const pristine = new Pristine(photoEditorForm);

// - Сравниваем текущий тег с валидным значением
const validateHashTag = (currentHashTag) => validHashtag.test(currentHashTag);


// - Добавляем новое правило для валидации
pristine.addValidator(hashtagsInput, validateHashTag)

photoEditorForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

