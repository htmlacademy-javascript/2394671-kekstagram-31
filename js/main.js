const DESCRIPTIONS = [
  'Пустой пляж рядом с отелем',
  'Табличка на дороге Go to the beach',
  'Деревянная тарелка с дольками клубники',
  'Низко пролетающий самолет над пляжем',
  'Кот кекс лежит на суши вместо рыбы',
  'закат на берегу моря',
  'внедорожник пересекает глубокую лужу'
];

const NAMES = [
  'Ксения',
  'София',
  'Юлия',
  'Елизавета',
  'Иван',
  'Артем',
  'Ангелина',
  'Максим',
  'Анастасия',
  'Милена'
];

const SURNAMES = [
  'Мельникова',
  'Иванова',
  'Буракшаева',
  'Фурсова',
  'Сапсай',
  'Богословский',
  'Самбикина',
  'Шпак',
  'Пименов',
  'Сигида'
];

const COMMENT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_QUANTITY = 25;

const URL_QUANTITY = {
  min: 1,
  max: PHOTOS_QUANTITY
};

const ID_QUANTITY = {
  min: 1,
  max: 25
};

const LIKES_QUANTITY = {
  min: 15,
  max: 200
};

const COMMENTS_ID_QUANTITY = {
  min: 10000,
  max: 99999
};

const AVATARS_QUANTITY = {
  min: 1,
  max: 6
};

const COMMENTS_QUANTITY = {
  min: 0,
  max: 30
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomValue = (min, max) => {
  const photoIdList = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (photoIdList.length >= (max - min + 1)) {
      return null;
    }

    while (photoIdList.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    photoIdList.push(currentValue);
    return currentValue;
  };
};

const generatePhotoId = getRandomValue(ID_QUANTITY.min, ID_QUANTITY.max);
const generateLikes = getRandomValue(LIKES_QUANTITY.min, LIKES_QUANTITY.max);
const generatePhotoUrl = getRandomValue(URL_QUANTITY.min, URL_QUANTITY.max);

const NumberDescription = () => DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)];

const generateCommentId = getRandomValue(COMMENTS_ID_QUANTITY.min, COMMENTS_ID_QUANTITY.max);
const generateCommentAvatar = getRandomValue(AVATARS_QUANTITY.min, AVATARS_QUANTITY.max);

const generateCommentFullName = () => `${SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]} ${NAMES[getRandomInteger(0, NAMES.length - 1)]}`;

//const generateCommentMessage = () => `${COMMENT_MESSAGE[getRandomInteger(0, COMMENT_MESSAGE.length - 1)]} ${COMMENT_MESSAGE[getRandomInteger(0, COMMENT_MESSAGE.length - 1)]}`;

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `photos/${generateCommentAvatar()}.jpg`,
  message: `${COMMENT_MESSAGE[getRandomInteger(0, COMMENT_MESSAGE.length - 1)]} ${COMMENT_MESSAGE[getRandomInteger(0, COMMENT_MESSAGE.length - 1)]}`,
  name: generateCommentFullName()
});

const photoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: NumberDescription(),
  likes: generateLikes(),
  comments: Array.from({length: getRandomInteger(COMMENTS_QUANTITY.min, COMMENTS_QUANTITY.max)}, generateComment)
});

const photosDescriptionList = Array.from({length:PHOTOS_QUANTITY}, photoDescription);

console.log(photosDescriptionList)
