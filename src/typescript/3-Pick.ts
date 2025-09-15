/* 
 Нужно написать свой тип Pick
*/

type User = {
  id: number;
  name: string;
  surname: string;
};

type UserID = Pick<User, "id">;

type MyPick = unknown
