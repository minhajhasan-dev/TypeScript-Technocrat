{
  // constraints
  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student3 = addCourseToStudent({
    id: 444,
    name: "ForForFor",
    email: "for@x.com",
  });
  const student1 = addCourseToStudent({
    id: 1,
    name: "Minhaj",
    email: "minhaj@x.com",
    devType: "Next Level Web Developer",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "Hafsa",
    email: "hafsa@x.com",
    hasWatch: "Apple Watch",
  });
  //
}
