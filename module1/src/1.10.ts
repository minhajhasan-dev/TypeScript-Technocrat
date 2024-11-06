{
  //
  // union types
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "AB+" | "O+";
  };
  const user1: User = {
    name: "persian",
    gender: "male",
    bloodGroup: "A+",
  };

  // Intersection Types
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDev = FrontendDev & BackendDev;

  const fullstackDev: FullStackDev = {
    skills: ["React", "NodeJS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
