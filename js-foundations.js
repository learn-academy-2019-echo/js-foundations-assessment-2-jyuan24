// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
console.log(`
Problem 1
`)

// for loop not iterating through when return is in the if statements. console logging works but returns an additional "undefined". solution is to create blank array and instead of returning, push value into new array.
const array1 = [15, 0, 385, -7]

function divideBy3(input) {
    let divBy3Arr = []
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "number") {
            if (input[i] % 3 === 0) {
                divBy3Arr.push(input[i] + " is divisible by three")
            }
            else {
                divBy3Arr.push(input[i] + " is not divisible by three")
            }
        }
        
        else {
            return "Please input a number"
        }
    }
    return divBy3Arr.join(", ")
}
console.log(divideBy3(array1))



// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
console.log(`
Problem 2
`)

var helloMe = {
    firstName: "Joe",
    lastName: "Yuan",
    occupation: "kind of a coder",
    from: "Rochester",
    // below method can be set up any way a function is typically set up
    description: function() { return `${this.firstName} ${this.lastName} is ${this.occupation} from ${this.from}.`} // syntax from objects lecture
    
    // trying by typ function syntax...error. deleted 'function' and then it worked.
    // function description() {
    //     return `${this.firstName} ${this.lastName} is ${this.occupation} from ${this.from}.`
    // }
    
    // trying diff syntax with var description = function()...error. 
    // var description = function() {
    //     return `${this.firstName} ${this.lastName} is ${this.occupation} from ${this.from}.`
    // }
    
    // trying with arrow functions. also gives error.
    // description = () => {
    //     return `${this.firstName} ${this.lastName} is ${this.occupation} from ${this.from}.`
    // }
}
console.log(helloMe.description())



// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"
console.log(`
Problem 3a
`)

// same issue as problem 1...not iterating through the for loop when using return. works when returning console.log but includes undefined at the end. resolved same way as 1...created blank array and pushed into instead of return value inside the for loop.
everyOtheri = (array) => {
    let array3a = []
    for (let i = 0; i < array.length; i = i + 2) {
        array3a.push(array[i])
        // console.log(array[i])
    }
    return array3a.join(", ")
}
console.log(everyOtheri(randomNouns))



// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
console.log(`
Problem 3b
`)

// at the moment think i'm having same issue as problems 1 and 3a...return not iterating in for loop. using console.log in the for loop causes it to spit out after every iteration through the for loop, meaning logs every array until i stops iterating, and then also logs an undefined. solved - return was breaking my for loop.

capitalize3b = (array) => {
    let array3b = []
    for (let i = 0; i < array.length; i++) {
        array3b.push(array[i][0].toUpperCase() + array[i].slice(1))
    }
    return array3b
}

console.log(capitalize3b(randomNouns))



// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]
console.log(`
Problem 3c
`)

// wordLength = (array) => {
//     let array3c = []
//     randomNouns.forEach(function(element) {
//         array3c.push(element.length)
//     })
//     return array3c
// }
// console.log(wordLength(randomNouns))



// rewriting using map
wordLength = (array) => {
    var newArr3c = array.map(function(element) {
        return element.length
    })
    return newArr3c
}
// console.log(newArr(array))

// map and es6
// wordLength = (array) => {
//     return array.map(element => element.length)
// }

console.log(wordLength(randomNouns))



// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
console.log(`
Problem 4a
`)

// // was trying to do entire matrix together...did not figure it out
// var arrayTestString = [testString1, testString2, testString3]
// alphabetSoup = (array) => {
//     return array.map(element => element.sort(
//         // function(a,b) {
//         //     return a-b
//         // }
//     ))
// }
// console.log(alphabetSoup(arrayTestString))



// attempting w/ just one string at a time
var alphabetSoup = (string) => {
    let array = string.split("")
    let alphabeticalStr = array.sort().join("")
    return alphabeticalStr
}
console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))



// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
console.log(`
Problem 4b
`)

var arrayTestString = [testString1, testString2, testString3]
var combinedAlphabetical = (array) => {
    let string = array.join("")
    let newArr = string.split("")
    let newString = newArr.sort().join("")
    return newString
}
console.log(combinedAlphabetical(arrayTestString))



// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
console.log(`
Problem 5
`)

var combinedString = (array1, array2) => {
    let newArr = []
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        newArr.push(array1[i])
        newArr.push(array2[i])
    }
    let string = newArr.join(" ")
    return string
}
console.log(combinedString(amounts, animals))



// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
console.log(`
Problem 5b
`)

var singularFilter = (array1, array2) => {
    let newArr = []
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        if (array1[i] === 1) {
            let noS = array2[i].slice(0, -1)
            newArr.push(array1[i])
            newArr.push(noS)
        }
        else {
            newArr.push(array1[i])
            newArr.push(array2[i])
        }
    }
    let string = newArr.join(" ")
    return string
}
console.log(singularFilter(amounts, animals))