```js
const reduce = (arr, cb, initialValue) => {
  let acc = initialValue ? initialValue : arr[0];
  let index = initialValue ? 0 : 1;

  for (index; index < arr.length; index++) {
    acc = cb(acc, arr[index], index, this);
  }

  return acc;
};
```
