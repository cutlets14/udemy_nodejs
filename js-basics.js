//JavaScript basics
var name = 'Satvik';
var age = 29;
var hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return `Name is ${userName} and user is aged ${userAge} and has a hobby named ${userHasHobby}`;
}

console.log(summarizeUser("satvik", 30, "gaming"));

const add = (a, b) => {
    return a + b;
}

const add2 = (a, b) => a + b;

console.log(add(1, 2));
console.log(add2(5, 6));