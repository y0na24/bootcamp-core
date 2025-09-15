//  Напиши функцию debounce:
// - принимает функцию fn и задержку delay (мс)
// - возвращает новую функцию
// - при многократных вызовах обёртки быстрее delay,
//   предыдущие вызовы отменяются, вызывается только последний
// - функция должна сохранять this и аргументы
// Что такое debounce - https://learn.javascript.ru/task/debounce

const debounce = (fn, delay) => {
  let timer = null;

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};
