"use strict";
class AClass {
  // classes are blueprint
  constructor() {
    // constructor are the functions
    // You declare it once
    // invoked immediately when you initialize a new object with new
  }
  Method1() {}
  Method2() {}
  Method3() {}
  Method4() {}
  Method5() {}
}

// you can create objects from the class which is instances based on the class
const a = new AClass(); /*--- instance 1 having the 
                behaviours (method 1,2,3,4,5)*/

let b = new AClass(); /*does that mean they are the same (a and b), 
        no. remember object are valued by reference */
// let c = b;

// console.log(b);
// console.log(c);
console.log(a === b); /* false */

// initialize the object
class Car {
  constructor(model) {
    // can take argument, that can resolve the properties, would be present in he instances
    this.model = model;
  }
  printThis() {
    // what is 'this'????
    console.log(this);
    // this refers to the instance or object calling the this
  }
  printModel() {
    console.log(this.model);
  }
}

const bmwCar = new Car("BMW");
const audiCar = new Car("AUDI");
bmwCar.printModel();
bmwCar.printThis();

console.log(typeof Car); /* function */

// named classes

const Dept = class Department {
  welcome() {
    console.log("Welcome to department");
  }
};

const d = new Dept();

// class field
// they define properties directly on instances without needing a constructor
// cleaner way to express fixed defaults

class Phone {
  brand = "apple"; /* class field */

  make() {
    console.log(this.brand);
  }
}
const z = new Phone();
z.make();

// GETTERS AND SETTERS
// get the value of a properties and set

class Animal {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    // used to set conditions
    if (!val) console.warn("no input");
    this._name = val;
  }
}
const animal = new Animal("Tiger");
console.log(animal.name);

// Static
// keeping at class level
// utilities fn

class MyClass {
  static staticMethod() {
    console.log(this);
  }
}

// you dont need to instantiate
MyClass.staticMethod();

// using real life
