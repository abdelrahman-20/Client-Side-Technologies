function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} Years Old.`);
  };
}

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
  this.study = function () {
    console.log(`I am studying ${this.major}.`);
  };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const std = new Student("Abdelrahman", 25, "Web Development");
std.greet();
std.study();
