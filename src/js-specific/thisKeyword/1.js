const user = {
  name: "Alice",
  getName() {
    return this.name;
  },
};

const fn = user.getName;
console.log(fn()); // Что выведет и почему?
