const obj = {
  name: "Timer",
  start() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  },
};

obj.start(); // Что выведет в консоль?
