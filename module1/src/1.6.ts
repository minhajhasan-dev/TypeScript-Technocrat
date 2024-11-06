// learning function
// Normal Function
// Arrow Function

// Normal Function
function add(num1: number, num2: number = 2): number {
  return num1 + num2;
}

add(1, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object --> function --> method

const poorUser = {
  name: "Mezba",
  balance: 0,
  addBalance(balance: number) {
    return `My new balance is: ${this.balance + balance}`;
  },
};

//

const arr: number[] = [1, 4, 10];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
