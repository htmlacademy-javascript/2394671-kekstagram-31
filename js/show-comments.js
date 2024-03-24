const commentsLoaderButton = document.querySelector('.comments-loader');
const COUNT_STEP = 5;


const findersSocialComment = () => {
  const socialCommentList = document.querySelectorAll('.social__comment');
  // console.log(socialCommentList.length);

  for (let i = 0; i < 5; i++) {
    socialCommentList[i].classList.remove('hidden');
  }



  commentsLoaderButton.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
      socialCommentList[1].classList.remove('hidden');
    }

  });

  const cicle = () => {
    let commentsShow = 5;

    return () => {
      commentsShow = commentsShow + 5;
      return commentsShow;
    };
  };

  const round = cicle();
  console.log(round());
  console.log(round());
};

export {findersSocialComment};

// - Сразу после открытия изображения в полноэкранном режиме отображается не более 5 комментариев.
// - Количество показанных комментариев и общее число комментариев отображается в блоке .social__comment-count.
// Пример разметки списка комментариев приведён в блоке .social__comments.
// - Отображение дополнительных комментариев происходит при нажатии на кнопку .comments-loader.
// - При нажатии на кнопку отображается не более 5 новых комментариев.
// - При изменении количества показанных комментариев число показанных комментариев в блоке .social__comment-count также изменяется.


