// Date exercise
let now = new Date();
console.log(now);
console.log(now.toLocaleTimeString());
console.log(now.toLocaleDateString());

// Array init exercise
let myArray = [4, 3, 5, 8];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray.length);

//Array sort exercise
myArray.sort();
console.log("sorted", myArray);

// loops forEach
let loopArray = ["one", "two", "three"];
loopArray.forEach((num) => console.log(num));

// Whale talk  exercise
let input = "Once upon a time, I ate lots of stuff";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        // console.log(j);
        if (input[i] === vowels[j]) {
            // console.log(input[i]);
            resultArray.push(input[i]);
        }
    }
}
console.log(resultArray);
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);

//JS functions min/max
console.log(Math.min(9, 11, 55, 22));
console.log(Math.max(9, 11, 55, 22));
let minMaxArray = [9, 11, 55, 22];
console.log("min", Math.min(...minMaxArray), "max", Math.max(...minMaxArray));

//JS functions setTimeout
// const myTimeOut = setTimeout(() => console.log("Hello world!"), 2000);

//JS functions setInterval
// const myInterval = setInterval(() => {
//     console.log("hello");
// }, 2000);

//JS functions ES5 to ES6
// Function 1
function notify(name) {
    console.log(`${name} is here`);
}
(name) => console.log(`${name} is here`);

// Function 2
// setTimeout(function () {
//     console.log("1000ms == 1 second");
// }, 1000);
// setTimeout(() => console.log("1000ms == 1 second"), 1000);
// Do no edit
notify("BOB");

//JS Functions DRY
// document.querySelector(".names").innerHTML += "Bob is here <br />";
// document.querySelector(".names").innerHTML += "John is here <br />";
// document.querySelector(".names").innerHTML += "Sarah is here <br />";

const nameArray = ["Bob", "John", "Sarah"];
function addName(arr) {
    return arr.forEach(
        (name) =>
            (document.querySelector(
                ".names"
            ).innerHTML += `${name} is here <br />`)
    );
}
addName(nameArray);

//JS functions fizzbuzz

function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }
}
console.log("fizzbuzz", fizzbuzz(15));

//JS Functions fibonacci
// function fibonacci(num) {
//     if (num < 2) {
//         return num;
//     } else {
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
// }
// console.log("fibonacci", fibonacci(9));

function fibonacci(num) {
    if (num > 34) {
        return;
    } else {
        console.log(num);
        fibonacci(num + 1) + fibonacci(num + 2);
    }
}
fibonacci(0);
