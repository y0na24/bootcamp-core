/*
Напиши свой тип If, который исходя из первого аргумента будет возращать нужное значение
*/

type If = unknown;

type TrueResult = If<true, "a", "b">; // "a"
type FalseResult = If<false, "a", "b">; // "b"
