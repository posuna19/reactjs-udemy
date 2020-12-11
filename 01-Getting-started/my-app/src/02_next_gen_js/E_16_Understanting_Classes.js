// Old sintaxy to define classe

class Human {
  constructor(){
    this.gender = "male";
  }
}

export class Persona extends Human{
  constructor(){
    super(); // gotta call super when extendings
    console.log("Creating a Persona object")
    this.name = 'Max from Persona class' // Property
  }

  printMyName() {
    console.log(this.name)
  }
}


// New syntax

class Human2 {
  gender = 'female';

  printGender = () => {
    console.log(this.gender);
  }
}

// no need to use constructor nor super
export class Persona2 extends Human2 {
  name = "Maria 999999";

  printMyName = () => {
    console.log("My name is " + this.name) // it has to use 'this' in order to compile
  }

}

//export default Persona;
