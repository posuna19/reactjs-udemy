import logo from './logo.svg';
import './App.css';

import './gettingStarted/Person.css'
import Person from './gettingStarted/Person'

// importing a module called 'funcs' which has several functions
import funcs from "./02_next_gen_js/E_14_ArrowFunctions"
import {Persona} from "./02_next_gen_js/E_16_Understanting_Classes"
import {Persona2} from "./02_next_gen_js/E_16_Understanting_Classes"
import {spreadOp, restOp} from "./02_next_gen_js/E_18_spread_rest_operator"

// importing an specific function, it is called 'named imports'
import {arrowFunction, multiply, multiply2} from "./02_next_gen_js/E_14_ArrowFunctions"

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Person name="Max" age="28" />
      <Person name="Manu" age="30" />
      </header>
      <Person name="Max" age="28" />
      <Person name="Manu" age="30" />
    </div>
  );
}

let myName = "Max 1";
console.log(myName);

myName = "Maxu"
console.log(myName);

const otherName = "Peter"
console.log(otherName);

//old function
//f1() how to call and old function??


funcs.printMyName3("\nCalling a function");
funcs.printMyLastName("Osuna");

// Arrow functions
arrowFunction("Maria");

//short function
console.log("Multiply: " + multiply(2));
console.log("Multiply2: " + multiply2(2));

const per1 = new Persona();
per1.printMyName();
console.log("The gender is: " + per1.gender)

const per2 = new Persona2();
per2.printMyName();
console.log("The gender is: " + per2.gender)

spreadOp();

console.log("Rest opt is: " + restOp(1,2,3))



export default App;
