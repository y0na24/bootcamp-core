Promise.reject(new Error("oops!"))
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

// Что выведет в консоль?