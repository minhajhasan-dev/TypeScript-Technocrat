// Destructuring In TypeScript
{
  // Object Destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "24234343",
    address: "Uganda",
  };
  const {
    contactNo,
    name: { middleName },
  } = user;

  //  Array Destructuring
  const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
  const [, , bestFriend, ...rest] = myFriends;
}
