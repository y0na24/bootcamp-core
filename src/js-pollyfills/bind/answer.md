```js
Function.prototype.myBind = function (context, ...boundArgs) {
  if (typeof this !== "function") {
    throw new TypeError("myBind должен вызываться на функции");
  }

  const originalFunction = this;

  return function (...args) {
    return originalFunction.apply(context, [...boundArgs, ...args]);
  };
}
```
