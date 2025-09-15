/*
Написать функцию wait, которая позволит делать задержку
вызова через await на переданное количество миллисекунд
*/

const sleep = (delay) => {};

async function code() {
  await sleep(1000);
  console.log("success"); // Выведется через 1000 мс
}
