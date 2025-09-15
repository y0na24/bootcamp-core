```js
function greeting(name) {
  return function () {
    console.log(`Привет, ${name}!`);
  };
}
const hi = greeting("Аня");
hi(); // Привет, Аня!
```