// interface, type vs interface
{
  // interface
  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }

  // intersection
  type UserWithRole1 = User1 & { role: string };

  // extends
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Parsian",
    age: 30,
    role: "Manager",
  };

  // js --> object, array --> object , function --> object
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll1 = [1, 2, 3];
  const rollNumber2: Roll2 = [4, 5, 6];

  // interface with function
  type Add1 = (num1: number, num2: number) => number;
  // using interface
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;

  // when to use interface and when to use type?
 
  //
}
