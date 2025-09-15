// 0.

const a = 5;

{
  console.log(a);

  const a = 3;
}

// 1.
const sleep = (delay) => {};

const someFunction = async (string) => {
  let res = "";

  for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      res += string[i] + 3;
    }, 0);
  }

  return res;
};

someFunction("123");

// 2.

function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

const obj1 = foo();
obj1.bar();
obj1.baz();

const obj2 = foo.call({ x: 30 });

const y = obj2.bar;
const z = obj2.baz;

y();
z();

obj2.bar();
obj2.baz();

// 3.
while (true) {}

const loopMicro = () => Promise.resolve().then(() => loopMicro());
loopMicro()

const loopMacro = () => setTimeout(() => loopMacro());
loopMacro()

Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "с")
  .then((p) => p + "d")
  .then((p) => console.log(p));

console.log("f");

// 4.

/**
 * Написать функцию, которая определяет, является ли переданная строка палиндромом
 * (читается слева-направо и справа-налево одинаково).
 *
 * Примеры палиндромов:
 * - Казак
 * - Ароза упала на лапу Азора
 * - Do geese see God?
 * - Madam, I’m Adam
 *
 * Ограничение по памяти O(1).
 */

const isEqual = (start, end) => {
  return start.toLowerCase() === end.toLowerCase();
};

const isLetter = (letter) => {
  return letter.toLowerCase() !== letter.toUpperCase();
};

const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    const startEl = str[start];
    const endEl = str[end];

    if (!isLetter(startEl)) {
      start++;
      continue;
    }

    if (!isLetter(endEl)) {
      end--;
      continue;
    }

    if (!isEqual(startEl, endEl)) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

console.log(isPalindrome("Казак"));

// 5.
//

const identity = (arg: unknown) => {
  return arg;
};

const value = identity(15);

/*
  Реализуй метод reduce своими руками, который будет охватывать кейс, когда мы
  не прокидываем изначальное значение

  const arr = [1, 2, 3];

  const sum = reduce(arr, (acc, item) => acc + item, 0); // 6
*/

function reduce<Value, Acc>(
  arr: Value[],
  cb: (acc: Acc, item: Value, index: number, arr: Value[]) => Acc,
  initialValue: Acc,
): Acc;
function reduce<Value>(
  arr: Value[],
  cb: (acc: Value, item: Value, index: number, arr: Value[]) => Value,
): Value;
function reduce<Value, Acc>(
  arr: Value[],
  cb: (
    acc: Value | Acc,
    item: Value,
    index: number,
    arr: Value[],
  ) => Value | Acc,
  initialValue?: Acc,
): Value | Acc {
  let acc: Value | Acc = initialValue ? initialValue : arr[0];
  let i = initialValue ? 0 : 1;

  for (i; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }

  return acc;
}
