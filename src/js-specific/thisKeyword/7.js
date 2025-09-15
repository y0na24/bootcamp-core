const numbers = [1, 2, 3];

const obj = {
  factor: 10,
  multiply(arr) {
    return arr.map(function (n) {
      return n * this.factor;
    });
  },
};

console.log(obj.multiply(numbers)); // Что выведет и почему? Как изменить поведение?
