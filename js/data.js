import{getRandomPositiveInteger} from './utils.js';
const NAMES = [
  'Андрей','Мария',
  'Станислав',
  'Олег'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];
const DESCRIPTIONS = [
  'Это мяч',
  'Коты наше все',
  'Анапа 2008',
  '#Я в коридоре на Балли'
];
const COMMENTS_COUNT = 3;
const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];
export{NAMES,COMMENTS,DESCRIPTIONS,COMMENTS_COUNT,getRandomArrayElement};
