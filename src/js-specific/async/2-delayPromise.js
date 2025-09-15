/*
Написать функцию, которая принимает на вход Promise и задержку(в мс) и возвращает новый Promise,
который разрешается с тем же значением, но через определенную задержку
*/

async function delayPromise(promise, delay) {}

const myPromise = Promise.resolve(42);
const delayedPromise = delayPromise(myPromise, 1000);
delayedPromise.then((res) => console.log(res)); // Выведется через 1000 мс
