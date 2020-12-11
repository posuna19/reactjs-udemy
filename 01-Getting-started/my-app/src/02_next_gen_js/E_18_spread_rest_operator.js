export const spreadOp = () => {
  // spread Operator used in arrayss
  const numbers = [1, 2, 3];
  const newNums = [...numbers, 4]

  console.log("The numbers are: " + newNums);


  // spread Operator used in an JSON object
  const person1 = {
    name: "David",
    lastName: "Almond"
  };

  const person2 = {
    ...person1, // it adds the two attributes from the person1 obj
    age: 30
  }
  console.log(person2)
}


export const restOp = (...args) => {
  return args.filter(el => el === 1);
}
