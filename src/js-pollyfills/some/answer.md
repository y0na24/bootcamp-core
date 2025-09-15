```js
const some = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) return true;
  }

  return false;
};
```