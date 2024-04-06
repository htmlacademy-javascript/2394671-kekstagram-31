import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 5000;

const templateDataError = document.querySelector('#data-error').content.querySelector('.data-error');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateAlert = document.querySelector('#error').content.querySelector('.error');


const dataAlert = () => {
  const templateErrorClone = templateDataError.cloneNode(true);
  document.body.append(templateErrorClone);

  setTimeout(() => {
    templateErrorClone.remove();
  }, ALERT_SHOW_TIME);
};

const notification = (template) => {
  const templateClone = template.cloneNode(true);
  const button = templateClone.querySelector('[type=button]');

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      templateClone.remove();
      removeEventListeners();
    }
  };

  const templateRemove = () => {
    templateClone.remove();
    removeEventListeners();
  };

  const onDocumentClick = (evt) => {
    if (evt.target === templateClone) {
      templateClone.remove();
      removeEventListeners();
    }
  };

  function removeEventListeners () {
    button.removeEventListener('click', templateRemove);
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  }

  button.addEventListener('click', templateRemove);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);

  document.body.append(templateClone);

  setTimeout(() => {
    templateClone.remove();
    removeEventListeners();
  }, ALERT_SHOW_TIME);
};

const sendDataSuccess = () => {
  notification(templateSuccess);
};

const sendDataError = () => {
  notification(templateAlert);
};

export {dataAlert, sendDataSuccess, sendDataError};
