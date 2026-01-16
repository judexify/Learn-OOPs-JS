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

// using real life to check private and public field

class WashingMachine {
  // public field
  brand;

  // private field
  #powerStatus = false;
  #currentCycle = null;

  constructor(brand) {
    this.brand = brand;
  }
  // as a brand, the only thing you want to expose to your users is
  start(cycle) {
    // internal mechanisms
    if (!this.#powerStatus) {
      this.#turnOn;
    }
    this.#currentCycle = cycle;
    // spin
    console.log(`starting ${cycle} cycle....`);
    this.#spin();
    // drain
    this.#drain();
    // stop
    this.stop();
  }
  stop() {
    console.log("Washing Machin stopped");
    // turn off
    this.#turnOff();
    console.log("Power OFF");
  }
  // it turns a private methods not to users
  #turnOn() {
    this.#powerStatus = true;
    console.log("Power ON");
  }
  #turnOff() {}
  #spin() {
    console.log("spinning");
  }
  #drain() {
    console.log("draining");
  }
}

const lgWasher = new WashingMachine("LG");
console.log(lgWasher);
lgWasher.start("Quick Wash");

const tasks = [
  { name: "wash dishes", done: true },
  { name: "wash shoes", done: false },
  { name: "dishes", done: true },
];

const taskState = {
  completed: (arr) => arr.filter((t) => t.done),
  inComplete: (arr) => arr.filter((t) => !t.done),
};

const currentState = "completed";
let result;

if (currentState === "completed") {
  result = taskState.completed(tasks);
} else {
  result = taskState.inComplete(tasks);
}

console.log(result);

class TODOAPP {
  #task = [];

  input(task) {
    if (this.#task.includes(task)) return;
    this.#addItems(task);
    return this.#task;
  }

  removeTask(index) {
    this.#deleteItems(index);
    return this.#task;
  }
  markCompleted(name) {
    const task = this.#task.find((t) => t.taskToday === name);
    if (task) task.done = true;
    return this.#task;
  }
  listTask() {
    return this.#task;
  }

  filterTasks(state = "all") {
    if (state === "completed") return this.#task.filter((t) => t.done);
    if (state === "inCompleted") return this.#task.filter((t) => !t.done);
  }

  #addItems(taskToday) {
    this.#task.push({ taskToday, done: false });
  }
  #deleteItems(items) {
    this.#task.splice(items, 1);
  }
}
const jude = new TODOAPP();

jude.input("go to cafe");
jude.input("go to babe's");
jude.input("go to church");
jude.input("go to school");
jude.input("buy books");
jude.markCompleted("go to cafe");
jude.removeTask(2);
console.log("All tasks:", jude.listTask());
console.log("Completed tasks:", jude.filterTasks("completed"));
console.log("Incomplete tasks:", jude.filterTasks("inCompleted"));

// CLASS EXTENDING
class Human {
  species = "Homo Sapien";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
  sleep() {
    console.log(`${this.name} is sleeping...`);
  }
}

class Student extends Human {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  // polymorphism
  introduce() {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old my grade is ${this.grade}`
    );
  } // the introduce here is different from human

  study() {
    console.log(`${this.name} is studying...`);
  }
}

class Teacher extends Human {
  constructor(name, age, subjectTaking) {
    super(name, age); // inherit from human
    this.subjectTaking = subjectTaking;
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old my subject taking is ${this.subjectTaking}`
    );
  }

  teach() {
    console.log(`I'll be teaching ${this.subjectTaking}`);
  }
}

const alice = new Student("Alice", 14, 9);
const bob = new Teacher("Bob", 35, "Mathemeatics");

alice.introduce();
alice.sleep();
bob.introduce();
bob.sleep();
