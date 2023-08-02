'use strict';

const Person = function (first, birthYear) {
  //Instance properties
  this.firstName = this.firstName;
  this.birthYear = birthYear;

  // Never to this
  //   this.calcAge = function() {
  //     console.log(2037 - this.birthYear);

  //   }
};

new Person('Jonas', 1991);

// 1. new{} is created
//2. function is called, this = {}
//3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

///////////////// PROTOTYPES ////////////////
