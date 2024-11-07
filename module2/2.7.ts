{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle; // automatically

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "Mr. Persian",
    age: 200,
    address: "ctg",
  };
  const car = {
    model: "Toyota",
    year: 2020,
  };

  const result1 = getPropertyValue(car, "year");

  //
}
