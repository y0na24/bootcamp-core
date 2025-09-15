```js
function memo(fn) {
  const cache = {};

  return function (...args) {
    const key = args.toString()

    if (key in cache) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const func = (arg1, arg2) => {
  return arg1 + arg2;
};
const memoed = memo(func);
memoed(1, 2);
// 3, вызов функции
memoed(1, 2);
// 3 вернется из кэша
memoed(1, 2);
// 4, новые аргументы, поэтому функция будет вызываться
```