const obj = {
  value: 42,
  regular() {
    return () => this.value;
  },
};

const fn = obj.regular();
console.log(fn()); // Что будет и почему?
