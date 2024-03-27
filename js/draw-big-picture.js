import {renderComments} from './draw-comments';

const bigPicture = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentCount = document.querySelector('.social__comment-total-count');
const commentShowCount = document.querySelector('.social__comment-shown-count');
const bigPictureDescription = document.querySelector('.social__caption');

const drawBigPicture = ({url, likes, comments, description}) => {
  bigPicture.src = url;
  likesCount.textContent = likes;
  commentCount.textContent = comments.length;
  commentShowCount.textContent = comments.length;
  renderComments(comments);
  bigPictureDescription.textContent = description;
};

export {drawBigPicture};
