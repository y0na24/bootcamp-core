console.log("start");

Promise.resolve().then(() => {
  console.log("promise 1");
  setTimeout(() => {
    console.log("timer 2");
  }, 0);
});

setTimeout(() => {
  console.log("timer 1");
  Promise.resolve().then(() => console.log("promise 2"));
}, 0);

console.log("end");
