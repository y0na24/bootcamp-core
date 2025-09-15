/*
 Используя интерфейс User, создай тип только с полями name и email
*/
interface User {
  id: number;
  name: string;
  email: string;
}

type UserContactInfo = unknown;

/*
 Используя union type, создай тип без значения "guest"
*/
type Roles = "admin" | "user" | "guest";

type RolesWithoutGuest = unknown;

/*
 Получи тип возвращаемого значения функции getUser
*/
function getUser(): User {
  return { id: 1, name: "Alice", email: "alice@example.com" };
}

type UserReturn = unknown;

/*
 Сделай все свойства объекта User неизменяемыми
*/
type ReadonlyUser = unknown;

/*
 Создай тип UserNameOnly с одним полем name
*/
type UserNameOnly = unknown;

/*
 Создай тип UserRolesWithoutAdmin, исключив "admin" из Roles
*/
type UserRolesWithoutAdmin = unknown;

/*
 Создай тип SendMessageReturnType на основе функции sendMessage
*/
function sendMessage(userId: number, message: string): boolean {
  console.log(`Send to ${userId}: ${message}`);
  return true;
}

type SendMessageReturnType = unknown;

/*
 Сделай тип ReadonlyMessage для объекта { message: string; date: Date }
*/
type ReadonlyMessage = unknown;

