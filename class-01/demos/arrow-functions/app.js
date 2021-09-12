'use strict';

// function declaration
function calcRectArea(width, height) {
  // console.log( width * height)
  return width * height;
}
calcRectArea(5,6);

// //function expression
// let getRectArea = function(width, height) {
//   // console.log( width * height)
//     return width * height;
// }
// getRectArea(5,5);


// what is the difference between function expression and function declaration ??

// x = 5;
// console.log(x);
// // var x;
// let x;


// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax
// let theOldWay = function(course) {
//   return `I am currently enrolled in ${course}`;
//   // return 'I am currently enrolled in '+ course;
// };
// console.log(theOldWay('301'));


// let theNewWay = (course) => {
//   // let x= 5;
//   return `I am currently enrolled in ${course}`;
// };
// console.log(theNewWay('301'));

// let oneLiner = (course) => `I cam currently enrolled in ${course}`;
// console.log(oneLiner('301'));



// What about 'this' with arrow functions ?
///////////// Example-1
// let Student = function(name, age, hometown) {
//   this.name = name;
//   this.age = age;
//   this.hometown = hometown;
// };


// Student.prototype.greeting = function() {
//   console.log(this);
//   return `Hi, my name is ${this.age}`;
// };

// let tasneem = new Student('Tasneem', 100,'Amman');
// // console.log(tasneem);
// tasneem.greeting();

// let sherry = new Student('sherry', 3,'irbid');
// sherry.greeting();

// // // ///////////// Example-2
// let Student = function(name, age, hometown) {
//   this.name = name;
//   this.age = age;
//   this.hometown = hometown;

// };

// Student.prototype.greeting = ()=> {
//   console.log(this); // Window
//   return `Hi, my name is ${this.name}`;
// };

// let joe = new Student('Joe',100, 'Seattle');
// joe.greeting();


// ////////////////// NOTES ////////////////
// // The JavaScript this keyword refers to the object it belongs to.
// // It has different values depending on where it is used:

// // In a method/prototype, this refers to the owner object.
// // Alone, this refers to the global object.
// // In a function, this refers to the global object.
// // In a function, in strict mode, this is undefined.
// // In an event, this refers to the element that received the event.


// function hi () {
//   console.log(this)
// }
// hi(); 
// // without 'use strict' >> Window: global object
// // with 'use strict' >> undefined


