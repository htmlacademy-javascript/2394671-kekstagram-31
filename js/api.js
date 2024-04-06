import {dataAlert} from './alert-message.js';

const getData = () => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  })
  .catch(() => {
    dataAlert();
  });

const sendData = (formData) => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
    body: formData,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }
  });

export {getData, sendData};
