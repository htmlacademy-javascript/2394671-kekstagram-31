import {getRandomInteger, getRandomId} from './util';

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

const UrlQuantity = {
  MIN: 1,
  MAX: PHOTOS_QUANTITY
};

const IdQuantity = {
  MIN: 1,
  MAX: 25
};

const LikesQuantity = {
  MIN: 15,
  MAX: 200
};

const CommentsIdQuantity = {
  MIN: 10000,
  MAX: 99999
};

const AvatarsQuantity = {
  MIN: 1,
  MAX: 6
};

const CommentsQuantity = {
  MIN: 0,
  MAX: 30
};

const generatePhotoId = getRandomId(IdQuantity.MIN, IdQuantity.MAX);
const generatePhotoUrl = getRandomId(UrlQuantity.MIN, UrlQuantity.MAX);
const generateCommentId = getRandomId(CommentsIdQuantity.MIN, CommentsIdQuantity.MAX);

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AvatarsQuantity.MIN, AvatarsQuantity.MAX)}.svg`,
  message: `${COMMENT_MESSAGE[getRandomInteger(0, COMMENT_MESSAGE.length - 1)]} ${COMMENT_MESSAGE[getRandomInteger(0, COMMENT_MESSAGE.length - 1)]}`,
  name: `${SURNAMES[getRandomInteger(0, SURNAMES.length - 1)]} ${NAMES[getRandomInteger(0, NAMES.length - 1)]}`
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LikesQuantity.MIN, LikesQuantity.MAX),
  comments: Array.from({length: getRandomInteger(CommentsQuantity.MIN, CommentsQuantity.MAX)}, generateComment)
});


const photosDescriptionList = () => Array.from({length:PHOTOS_QUANTITY}, createPhoto);

export {photosDescriptionList};
