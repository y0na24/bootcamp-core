```js
const flatten = (arr, depth) => {
  const result = [];

  for (const elem of arr) {
    if (Array.isArray && depth > 0) {
      result.push(flatten(...elem, depth - 1)); // Рекурсия
    } else {
      result.push(elem);
    }
  }

  return result;
};
```
