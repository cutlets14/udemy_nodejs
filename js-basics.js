//JavaScript basics
var name = 'Satvik';
var age = 29;
var hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return `Name is ${userName} and user is aged ${userAge} and has a hobby named ${userHasHobby}`;
}

// console.log(summarizeUser("satvik", 30, "gaming"));

const add = (a, b) => {
    return a + b;
}

const add2 = (a, b) => a + b;

// console.log(add(1, 2));
// console.log(add2(5, 6));

// More arrow functions
const addRandom = () => 1 + 2;
// console.log(addRandom());

// JS objects~
const person = {
    name: 'Max',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// person.greet();

// // Arrays
// const hobbies = ['Sports', 'Cooking', 1];

// // console.log(hobbies[0]);

// for (let item in hobbies) {
//     console.log(hobbies[item]);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// // Proof that Arrays operates using a reference type
// hobbies.push('Programming');
// console.log(hobbies)

// // Spread operator
// const copiedHobbies = [...hobbies]
// console.log(copiedHobbies);

// const copiedPerson = {...person}
// console.log(copiedPerson);

// // Rest operator
// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4));

// Destructuring
// w/o destructuring i.e. using the full object even if we just want a subset of the object's properties
const printName = (personObject) => {
    console.log(personObject.name);
}

// w/ destructing, only the necessary object properties are named which improves knowledge of the required arguments for the function
const printNameDestruct = ({name, age}) => {
    console.log(`${person.name} and ${person.age}`);
};

// printName(person);
// printNameDestruct(person);

// Async and Promises
// Async code because it does not finish execution immediately
// setTimeout(callback function, time before callback function should be executed)
// setTimeout(() => {
//     console.log("Timer is done!");
// }, 2000);

// Aside from hardware considerations, the following bits of code run BEFORE the setTimeout() above because they are synchronous code
console.log("Hello!");
console.log("Hi!");

const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData((text) => {
        console.log(text)
    });
}, 2000);