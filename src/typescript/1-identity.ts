/*
 Нужно сделать типизацию так, чтобы при наведении на result был литерал 15 в подсказке.
 Требуется точно выводить типы.
*/

const identity = (value: unknown) => {
  return value;
};

const result = identity(15);
