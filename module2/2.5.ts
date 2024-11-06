{
  // function with generics
  // কোনো একটি ফাংশনে আমরা টাইপকে ডাইনামিক্যালি জেনেরিক এর মাধ্যমে পাস করতে পারি। এবং সেটাকে আমরা ইচ্ছামতো সাজাতে পারি।
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res3 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Bangladesh",
  });

  //
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "Minhaj",
    email: "minhaj@x.com",
    devType: "Next Level Web Developer",
  });
  const student2 = addCourseToStudent({
    name: "Hafsa",
    email: "hafsa@x.com",
    hasWatch: "Apple Watch",
  });
  //
}
