const сheckLength = (string, maxLength) => string.length <= maxLength;

// Строка короче 20 символов
сheckLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
сheckLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
сheckLength('проверяемая строка', 10); // false


const isPalindrome = (string = '') => {
  string = string.toUpperCase().replaceAll(' ', '');

  // аналогичная запись
  // string = string.toUpperCase();
  // string = string.replaceAll(' ', '');

  let currentString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    currentString += string.at(i);
  }

  return currentString === string;
};

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true


const toNumber = (string = '') => {
  let result = '';
  string = string.toString ();

  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};


toNumber('2023 год'); // 2023
toNumber('ECMAScript 2022'); // 2022
toNumber('1 кефир, 0.5 батона'); // 105
toNumber('агент 007'); // 7
toNumber('а я томат'); // NaN

toNumber(2023); // 2023
toNumber(-1); // 1
toNumber(1.5); // 15
