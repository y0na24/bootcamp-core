/* 
  Нужно протипизировать функцию reduce, чтобы выводились точные типы.
  
  При отсутствии initialValue нужно как изначальное значение аккамулятора использовать
  первый элемент массива и начинать итерацию с индекса 1.
  
  Нужно с помощью дженерика и перегрузок подсказать TypeScript'у типизацию.
  
  Решение: https://t.me/y0na24_dev/55
*/

function reduce(arr, cb, initialValue) {
  let acc = initialValue ? initialValue : arr[0];
  let index = initialValue ? 0 : 1;

  for (index; index < arr.length; index++) {
    acc = cb(acc, arr[index], index);
  }

  return acc;
}

const sum = reduce([1, 2, 3], (acc, item) => acc + item);
const object = reduce(
  [1, 2, 3],
  (acc, item, idx) => {
    acc[idx] = item;
    return acc;
  },
  {} as Record<string, number>,
);