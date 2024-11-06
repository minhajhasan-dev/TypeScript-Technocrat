{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;
  if (age >= 18) {
    console.log("You are adult");
  } else {
    console.log("You are not adult");
  }
  // ternary operator
  const isAdult = age >= 18 ? "You are adult" : "You are not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined --> decision making
  const isAuthenicated = "";
  const result1 = isAuthenicated ?? "Guest";
  const result2 = isAuthenicated ? isAuthenicated : "Guest";

  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address?: {
      city: string;
      road: string;
      presentAddress: string;
      parmanentAddress?: string;
    };
  };

  const user: User = {
    name: "Sakib",
    address: {
      city: "Dhaka",
      road: "Dhanmondi 32",
      presentAddress: "Dhanmondi 32, Dhaka",
    },
  };
  const parmanentAddress = user?.address?.parmanentAddress ?? "N/A";
  console.log({ parmanentAddress });
  //
}
