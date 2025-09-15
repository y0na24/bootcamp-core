const obj = {
  value: 7,
  getValue() {
    return this.value;
  },
};

const { getValue } = obj;
console.log(getValue()); // ?
