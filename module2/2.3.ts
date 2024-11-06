{
  // Introduction to Generics
  // generic type: generalizing the type

  // we can use generics to create a reusable component
  type GenericArray<T> = Array<T>;
  // we can receive any type of array with the help of GenericArray parameter

  const rollNumbers1: number[] = [3, 6, 8];
  const rollNumbers2: GenericArray<number> = [3, 6, 8];

  const mentors1: string[] = ["Parsian", "John", "Doe"];
  const mentors2: GenericArray<string> = ["Parsian", "John", "Doe"];

  const boolArray1: boolean[] = [true, false, true];
  const boolArray2: GenericArray<boolean> = [true, false, true];

  type User = {
    name: string;
    age: number;
  };
  interface User1 {
    name: string;
    age: number;
  }

  const user: GenericArray<User1> = [
    { name: "Parsian", age: 100 },
    { name: "Jhankar Mahbub", age: 110 },
  ];
  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr.Parsian", "Miss.German"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Parsian", email: "a@gmail.com" },
  ];
}
