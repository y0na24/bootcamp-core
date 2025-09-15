function main() {
  Promise.resolve().then(() => console.log(1));

  console.log(2);

  new Promise((resolve) => {
    console.log(3);
    setTimeout(() => console.log(4), 0);
    resolve();
  }).then(() => console.log(5));
}

main(); 

// Что выведет в консоль?
