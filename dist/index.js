"use strict";
let id = 5;
let company = 'Abdessamad bettal';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee; // this means that employee is an array of tuples
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid = 22; // this means pid can be a string or a number
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid; // same as <number>cid
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y; // this means that add is a function that takes two numbers and return a number
const sub = (x, y) => x - y; // this means that sub is a function that takes two numbers and return a number
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Abdo = new Person(1, 'Abdessamad bettal');
const John = new Person(2, 'John Doe');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // super is used to call the constructor of the parent class
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items); // this function takes an array of type T and return an array of type T
}
let numArray = getArray([1, 2, 3, 4]); // this means that numArray is an array of numbers
let strArray = getArray(['brad', 'John', 'Jill']); // this means that strArray is an array of strings
numArray.push(5);
strArray.push('Abdo');
// numArray.push('hello'); // this will give an error because numArray is an array of numbers
// strArray.push(5); // this will give an error because strArray is an array of strings
// numArray.push(true); // this will give an error because numArray is an array of numbers
// strArray.push(true); // this will give an error because strArray is an array of strings
// numArray.push({}); // this will give an error because numArray is an array of numbers
// strArray.push({}); // this will give an error because strArray is an array of strings
