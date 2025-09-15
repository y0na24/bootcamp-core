// Сделай функцию partial(fn, ...fixedArgs), которая фиксирует часть аргументов и возвращает новую функцию, которая ждет оставшихся аргументов для корекктного вызова.
 
function partial(fn, ...fixedArgs) {}

function multiply(a, b, c) {
  return a * b * c;
}

const double = partial(multiply, 2);
console.log(double(3, 4)); // 24
