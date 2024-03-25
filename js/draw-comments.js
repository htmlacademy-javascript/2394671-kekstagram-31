// - При нажатии на кнопку отображается не более 5 новых комментариев.
const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const bigPictureNode = document.querySelector('.big-picture');
const socialCommentsNode = bigPictureNode.querySelector('.social__comments');
const commentsLoaderNode = bigPictureNode.querySelector('.social__comments-loader');
const socialCommentShownCount = bigPictureNode.querySelector('.social__comment-shown-count');
const socialCommentTotalCount = bigPictureNode.querySelector('.social__comment-total-count');
socialCommentsNode.innerHTML = '';


const renderNextComments = () => {
  const socialCommentsFragment = document.createDocumentFragment();

  // - Нарезаем переданный массив комментариев от и до
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);

  // - Определяем количество открытых комментариев
  const renderedCommentsLength = renderedComments.length + currentCount;

  // - Создаем комментарии
  renderedComments.forEach((currentComment) => {
    const comment = document.createElement('li');
    const commentImage = document.createElement('img');
    const commentMessage = document.createElement('p');

    comment.classList.add('social__comment');
    commentImage.classList.add('social__picture');
    commentMessage.classList.add('social__text');
    commentImage.src = currentComment.avatar;
    commentImage.alt = currentComment.name;
    commentImage.width = 35;
    commentImage.height = 35;
    commentMessage.textContent = currentComment.message;
    comment.append(commentImage);
    comment.append(commentMessage);

    socialCommentsFragment.append(comment);
  });

  socialCommentsNode.append(socialCommentsFragment);

  // - Количество показанных комментариев и общее число комментариев отображается в блоке .social__comment-count.
  socialCommentShownCount.textContent = renderedCommentsLength;
  socialCommentTotalCount.textContent = comments.length;

  if (renderedCommentsLength >= comments.length) {
    commentsLoaderNode.classList.add('hidden');
  }

  // - Добавляем ранее открытым комментариям количество открытых комментариев на этом шаге
  currentCount += COUNT_STEP;
};

const renderComments = (currentPhotoComments) => {
  // - Используем переменную comments внутри функции renderNextComments().
  comments = currentPhotoComments;

  // - Сразу после открытия изображения в полноэкранном режиме отображается 5 комментариев.
  renderNextComments();

  // - Отображение дополнительных комментариев происходит при нажатии на кнопку .comments-loader.
  commentsLoaderNode.addEventListener('click', renderNextComments);
};

// - Очищаем поле с комментариями и возвращаем кнопку загрузки доп комментариев, если она была скрыта.
const clearComments = () => {
  currentCount = 0;
  socialCommentsNode.innerHTML = '';
  commentsLoaderNode.classList.remove('hidden');
  commentsLoaderNode.removeEventListener('click', renderNextComments);
};

export {renderComments, clearComments};
