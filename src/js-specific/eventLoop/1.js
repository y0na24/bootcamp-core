Promise.resolve("hello")
  .then((result) => result + "world")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// Что выведет в консоль?
