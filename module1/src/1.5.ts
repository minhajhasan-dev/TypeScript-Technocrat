// Reference Type --> Object

const user: {
  readonly company: string; // type-> literal type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried?: boolean;
} = {
  company: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};

// user.company = "Programming Hero";
