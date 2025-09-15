// Написать свой метод some https://doka.guide/js/array-some/

const some = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) return true;
  }

  return false;
};

const arr = [1, 2, 3, 4];

const isTwoExists = some(arr, (item) => item === 2); // true
