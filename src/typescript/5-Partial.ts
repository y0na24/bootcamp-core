/*
Напиши свой тип Partial, который будет делать все ключ опциональными.
*/

type Product = {
  name: string;
  price: number;
};

type PartialProduct = Partial<Product>;

type MyPartial = unknown;
