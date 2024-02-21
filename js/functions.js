function сheckLength (string, maxLength) {
  return string.length <= maxLength;
}

// Строка короче 20 символов
сheckLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
сheckLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
сheckLength('проверяемая строка', 10); // false

function checkPalindrome (string) {
  let normalizedString = string.toUpperCase();
  normalizedString = normalizedString.replaceAll(' ', '');

  let currentString = '';

  for (let i = string.length; i > 0; i--) {
    currentString += normalizedString.at(-i);
  }
  return currentString === normalizedString;
}


// Строка является палиндромом
checkPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrome('ДовОд'); // true
// Это не палиндром
checkPalindrome('Кекс'); // false
// Это палиндром
checkPalindrome('Лёша на полке клопа нашёл '); // true
