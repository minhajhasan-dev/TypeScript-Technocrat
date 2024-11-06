{
  // Types Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "male",
    contactNo: "3434343",
    address: "Uganda",
  };

  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhaka",
  };
  const student3: Student = {
    name: "Rahim",
    age: 30,
    gender: "male",
    address: "dhaka",
  };

  type UserName = string;
  type isAdmin = boolean;
  const UserName: UserName = "Persian";
  const isAdmin: isAdmin = true;

  // Function Type alias
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
  //
}
