const bigPicture = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentCount = document.querySelector('.social__comment-total-count');
const commentShowCount = document.querySelector('.social__comment-shown-count');
const commentList = document.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();
const bigPictureDescription = document.querySelector('.social__caption');

const drawSocialComment = (comments) => {
  comments.forEach(({avatar, name, message}) => {
    const comment = document.createElement('li');
    const commentImage = document.createElement('img');
    const commentMessage = document.createElement('p');

    comment.classList.add('social__comment');
    comment.classList.add('hidden');
    commentImage.classList.add('social__picture');
    commentMessage.classList.add('social__text');
    commentImage.src = avatar;
    commentImage.alt = name;
    commentImage.width = 35;
    commentImage.height = 35;
    commentMessage.textContent = message;
    comment.append(commentImage);
    comment.append(commentMessage);
    commentFragment.append(comment);
  });
  commentList.append(commentFragment);
};


const drawBigPicture = ({url, likes, comments, description}) => {
  bigPicture.src = url;
  likesCount.textContent = likes;
  commentCount.textContent = comments.length;
  commentShowCount.textContent = comments.length;
  drawSocialComment(comments);
  bigPictureDescription.textContent = description;
};

export {drawBigPicture};
