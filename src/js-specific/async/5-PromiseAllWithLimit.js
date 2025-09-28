/*
Реализоывть функцию promiseAllWithLimit(tasks, limit), которая:
1. Принимает: tasks — массив функций, каждая из которых возвращает Promise.
limit — число, обозначающее максимальное количество промисов, которые могут выполняться одновременно.

2. Возвращает Promise, который:
Резолвится массивом результатов всех промисов в том же порядке, что и входные функции.
Реджектится, если любой из промисов отклоняется — с тем же значением ошибки, без продолжения выполнения остальных задач.
*/

function promiseAllWithLimit(tasks, limit) {}

function sleep(value, delay) {
  return new Promise((res) => setTimeout(() => res(value), delay));
}

const tasks = [
  () => sleep("a", 100),
  () => sleep("b", 200),
  () => sleep("c", 400),
  () => sleep("d", 150),
];

promiseAllWithLimit(tasks, 2).then(console.log);
