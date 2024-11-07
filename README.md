# TypeScript Technocrat

## 1.4 Basic Data Types

TypeScript provides several basic data types:

- **String**: Represents textual data.
- **Number**: Represents numeric values.
- **Boolean**: Represents true/false values.
- **Undefined**: Represents an undefined value.
- **Null**: Represents a null value.
- **Array**: Represents a collection of values of the same type.
- **Tuple**: Represents an array with a fixed number of elements of specific types.

### Example:

```typescript
let firstName: string = "Minhaj";
let rollNumber: number = 123;
let isAdmin: boolean = true;
let x: undefined = undefined;
let y: null = null;
let friends: string[] = ["Minhaj", "Hasan", "Sourov"];
let coordinates: [number, number] = [10, 20];
```

## 1.5 Reference Type

Reference types in TypeScript include objects.

### Example:

```typescript
const user: {
  readonly company: string;
  firstName: string;
  lastName: string;
  isMarried?: boolean;
} = {
  company: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};
```

## 1.6 Functions

Functions in TypeScript can be defined using normal function syntax or arrow function syntax.

### Example:

```typescript
function add(num1: number, num2: number = 2): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

const poorUser = {
  name: "Mezba",
  balance: 0,
  addBalance(balance: number) {
    return `My new balance is: ${this.balance + balance}`;
  },
};
```

## 1.7 Spread, Rest, and Destructuring

- **Spread Operator**: Expands an iterable.
- **Rest Operator**: Represents an indefinite number of arguments as an array.
- **Destructuring**: Unpacks values from arrays or properties from objects.

### Example:

```typescript
const bros1: string[] = ["Mir", "Firoz", "Mizan"];
const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];
bros1.push(...bros2);

const greetFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends("Abul", "Kabul", "babul");

const user = {
  id: 345,
  name: { firstName: "Mezbaul", middleName: "Abedin", lastName: "Persian" },
  contactNo: "24234343",
  address: "Uganda",
};
const {
  contactNo,
  name: { middleName },
} = user;

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
const [, , bestFriend, ...rest] = myFriends;
```

## 1.8 Union and Intersection Types

- **Union Types**: Allows a variable to be one of several types.
- **Intersection Types**: Combines multiple types into one.

### Example:

```typescript
type Developer = "juniorDeveloper" | "frontendDeveloper" | "expertDeveloper";
const newDeveloper: Developer = "juniorDeveloper";

type FrontendDev = { skills: string[]; designation1: "Frontend Developer" };
type BackendDev = { skills: string[]; designation2: "Backend Developer" };
type FullStackDev = FrontendDev & BackendDev;

const fullstackDev: FullStackDev = {
  skills: ["React", "NodeJS"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
```

## 1.9 Type Aliases

Type aliases allow you to create a new name for an existing type.

### Example:

```typescript
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

type UserName = string;
type isAdmin = boolean;
const userName: UserName = "Persian";
const isAdmin: isAdmin = true;

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
```

## 1.10 Nullable and Unknown Types

- **Nullable Types**: Allows a variable to be a specific type or null.
- **Unknown Types**: Represents a value that could be of any type.

### Example:

```typescript
const searchName = (value: string | null) => {
  console.log(value ? "Searching" : "There is nothing to search");
};
searchName(null);

const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    console.log(`Speed in meter per second: ${(value * 1000) / 3600} m/s`);
  } else if (typeof value === "string") {
    const [result] = value.split(" ");
    console.log(
      `Speed in meter per second: ${(parseFloat(result) * 1000) / 3600} m/s`
    );
  } else {
    console.log("wrong input");
  }
};
getSpeedInMeterPerSecond(null);
```

## 1.11 Ternary, Optional Chaining, and Nullish Coalescing

- **Ternary Operator**: A shorthand for if-else statements.
- **Optional Chaining**: Safely access deeply nested properties.
- **Nullish Coalescing Operator**: Provides a default value if the variable is null or undefined.

### Example:

```typescript
const age: number = 15;
const isAdult = age >= 18 ? "You are adult" : "You are not adult";
console.log({ isAdult });

const isAuthenicated = "";
const result1 = isAuthenicated ?? "Guest";
console.log({ result1 });

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
```

## 2.1 Type Assertion and Type Narrowing

- **Type Assertion**: Override the inferred type of a variable.
- **Type Narrowing**: Narrows down the type of a variable within a conditional block.

### Example:

```typescript
const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "string") {
    return `The converted value is ${parseInt(value) * 1000} gm`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};
const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;

type CustomError = { message: string };
try {
} catch (error) {
  console.log((error as CustomError).message);
}
```

## 2.2 Interface vs Type

- **Interface**: Defines the structure of an object.
- **Type**: Defines the structure of an object, union types, and more.

### Example:

```typescript
type User1 = { name: string; age: number };
interface User2 {
  name: string;
  age: number;
}

type UserWithRole1 = User1 & { role: string };
interface UserWithRole2 extends User2 {
  role: string;
}

const user1: UserWithRole2 = { name: "Parsian", age: 30, role: "Manager" };

type Roll1 = number[];
interface Roll2 {
  [index: number]: number;
}
const rollNumber1: Roll1 = [1, 2, 3];
const rollNumber2: Roll2 = [4, 5, 6];

type Add1 = (num1: number, num2: number) => number;
interface Add2 {
  (num1: number, num2: number): number;
}
const add1: Add1 = (num1, num2) => num1 + num2;
const add2: Add2 = (num1, num2) => num1 + num2;
```

## 2.3 Generics

Generics allow you to create reusable components that can work with any data type.

### Example:

```typescript
type GenericArray<T> = Array<T>;

const rollNumbers2: GenericArray<number> = [3, 6, 8];
const mentors2: GenericArray<string> = ["Parsian", "John", "Doe"];
const boolArray2: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };
const user: GenericArray<User> = [
  { name: "Parsian", age: 100 },
  { name: "Jhankar Mahbub", age: 110 },
];

type GenericTuple<X, Y> = [X, Y];
const manush: GenericTuple<string, string> = ["Mr.Parsian", "Miss.German"];
const UserWithID: GenericTuple<number, { name: string; email: string }> = [
  1234,
  { name: "Parsian", email: "a@gmail.com" },
];
```

## 2.4 Interface with Generics

Interfaces can also be generic, allowing you to define the structure of an object with dynamic types.

### Example:

```typescript
interface Developer<T, X = null> {
  name: string;
  computer: { brand: string; model: string; releaseYear: number };
  smartWatch: T;
  bike?: X;
}

type HonorBand = { brand: string; model: string; display: string };

const poorDeveloper: Developer<HonorBand> = {
  name: "Minhaj",
  computer: { brand: "Custom", model: "Adijuger PC", releaseYear: 2010 },
  smartWatch: { brand: "Honor", model: "band 6", display: "OLED" },
};

interface AppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
  waterProof: boolean;
}

interface RoyalEnfield {
  model: string;
  brand: string;
  engine: string;
  releaseYear: number;
}

const richDeveloper: Developer<AppleWatch, RoyalEnfield> = {
  name: "Minhaj",
  computer: { brand: "HP", model: "Core i5 10th Gen", releaseYear: 2018 },
  smartWatch: {
    brand: "Xiomi",
    model: "band 6",
    heartTrack: true,
    sleepTrack: true,
    waterProof: true,
  },
  bike: {
    model: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    engine: "350cc",
    releaseYear: 2021,
  },
};
```

## 2.5 Functions with Generics

Generics can also be used with functions to create reusable functions that can work with any data type.

### Example:

```typescript
const createArrayWithGeneric = <T>(param: T): T[] => [param];

const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => [
  param1,
  param2,
];

const res1 = createArrayWithGeneric<string>("Bangladesh");
const res2 = createArrayWithTuple<string, number>("Bangladesh", 222);

type User = { id: number; name: string };

const resGenericObj = createArrayWithGeneric<User>({
  id: 222,
  name: "Bangladesh",
});

const addCourseToStudent = <T>(student: T) => {
  const course = "Next Level Web Development";
  return { ...student, course };
};
const student1 = addCourseToStudent({ name: "Minhaj", email: "minhaj@x.com" });
const student2 = addCourseToStudent({ name: "Minhaj", email: "Minhaj@x.com" });
```

## 2.6 Constraints with Generics

You can use constraints with generics to restrict the types that can be used.

### Example:

```typescript
const addCourseToStudent = <
  T extends { id: number; name: string; email: string }
>(
  student: T
) => {
  const course = "Next Level Web Development";
  return { ...student, course };
};
const student1 = addCourseToStudent({
  id: 1,
  name: "Minhaj",
  email: "minhaj@x.com",
});
const student2 = addCourseToStudent({
  id: 2,
  name: "Minhaj",
  email: "Minhaj@x.com",
});
```

## 2.7 Generic Constraints with keyof

The `keyof` operator can be used to create constraints based on the keys of an object.

### Example:

```typescript
type Vehicle = { bike: string; car: string; ship: string };
type Owner2 = keyof Vehicle;

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => obj[key];

const car = { model: "Toyota", year: 2020 };
const result1 = getPropertyValue(car, "year");
```
