```js
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter(inBetween(2, 4))); // [2, 3, 4]
```
