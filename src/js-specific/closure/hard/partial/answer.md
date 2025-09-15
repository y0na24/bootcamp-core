```js
function partial(fn, ...fixedArgs) {
  return function (...restArgs) {
    return fn(...fixedArgs, ...restArgs);
  };
}
function multiply(a, b, c) {
  return a * b * c;
}
const double = partial(multiply, 2);
console.log(double(3, 4)); // 24
```