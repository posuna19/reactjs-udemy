//old function
function f1() {
  console.log("Calling Old function");
}

// Arrow function
const myFunc = () => {

} // no more issues with the 'this' keyword



// Regular or Old functions
const funcs = {
  printMyName3(name) {
    console.log("Print my name 3: " + name)
  },
  printMyLastName(lastName) {
    console.log("The last name is:" + lastName)
  }
}

export default funcs;

// Arrow functions
export const arrowFunction = (name) => {
  console.log("Arrow function name: " + name)
}

// Short arrow function with no 'return' keyword needed because
// it is just one line:
export const multiply = (number) => number * 2

// Also you can ommit the parenthesis if the function has only
// ONE parameter
export const multiply2 = number => number * 4
