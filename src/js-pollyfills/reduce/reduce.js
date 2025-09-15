/*
 Напиши свою фукнцию reduce, которая поддерживает кейс,
 когда мы не прокидываем изначальное значение.

 https://doka.guide/js/array-reduce/#kak-pishetsya
*/

const reduce = (arr, cb, initialValue) => {};

const sum = reduce([1, 2, 3, 4], (acc, item) => acc + item); // 10

const object = reduce(
  [1, 2, 3],
  (acc, item, idx) => {
    acc[idx] = item;

    return acc;
  },
  {},
);
/*
{
'0': 1,
'1': 2,
'2': 3
}
*/
