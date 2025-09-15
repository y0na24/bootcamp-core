console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

const promise = new Promise((resolve) => {
  console.log("promise1");
  resolve("resolve");
});

promise.then((data) => console.log(data)).then(() => console.log("promise"));

console.log("end");
