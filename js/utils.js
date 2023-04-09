const getRandomPositiveInteger = (a, b) =>{
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return function (){
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

function debounce (callback, timeoutDelay = 500) {

  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

  };
}


export{getRandomPositiveInteger,createIdGenerator, debounce};
