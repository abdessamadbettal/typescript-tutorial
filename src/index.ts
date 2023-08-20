let id: number = 5;
let company: string = 'Abdessamad bettal';
let isPublished: boolean = true;
let x = 'Hello';
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][]; // this means that employee is an array of tuples

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];

// Union
let pid: string | number = 22; // this means pid can be a string or a number
pid = '22';

// Enum
enum Direction1 {
    Up ,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type User = {
    id: number,
    name: string,
} 

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number; // same as <number>cid

// Functions
function addNum(x: number, y: number): number { // number => return number
    return x + y;
}

// Void
function log(message: string | number): void { // void => return nothing
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number, // readonly => can't change the value
    name: string, 
    age?: number, // ? => optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}




