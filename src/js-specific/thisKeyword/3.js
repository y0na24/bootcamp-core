const obj = {
  value: 100,
  method() {
    return {
      arrow: () => this.value,
      regular: function () {
        return this.value;
      },
    };
  },
};

const inner = obj.method();
console.log(inner.arrow()); // ?
console.log(inner.regular()); // ?
