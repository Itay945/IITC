//////////////////////////// task 1

function greet() {
    console.log("Hello, world!");
    
}
greet()



///////////////////////////// task 2

function square(number){
    let nNumber = (number * number)
    return nNumber
}
console.log(square(5));

/////////////////////////// task 3

function isEvan(number) {
    return number % 2 === 0;
    
}
console.log(isEvan(9));



////////////////////////// task 4

function getFullName(firstName, lastName){
    let fullName = firstName + " " + lastName
    return fullName
}
console.log(getFullName("itay", "benadon"));


/////////////////////////////// task 5



function sumTwo(num_1, num_2) {
    let sum = num_1 + num_2
    return sum
}
console.log(sumTwo(4, 4));



////////////////////////////// task 6


function multiply(num_1, num_2) {
    let x = num_1 * num_2
    return x
}
console.log(multiply(6, 8));


////////////////////////////// task 7


function greetPerson(name) {
    
    return "Hello, " + name + "!"
}
console.log(greetPerson("name"));


////////////////////////////// task 8


function getAbsoluteValue(number) { 
return Math.abs(number)
}
console.log(getAbsoluteValue(-6));
//////// donsn't work :(



/////////////////////////// task 9


function calculateAverage(number, number_1) {
    return (number + number_1) / 2
}
console.log(calculateAverage(5, 60));


///////////////////////// task 10


function convertToUpperCase(string) {
    let text = string.toUpperCase()
    return text
}
console.log(convertToUpperCase("itay"));



///////////////////////////// task 11

function isPositive(number) {
 return number > 0;
}
console.log(isPositive(6));


//////////////////////////// task 12
function getFirstChar(char) {
    if (structuredClone.length >0)
        return str.charAt(0)
    else return ""
}
console.log("car");

///not sure




////////////////////////////// task 13



function areaOfRectangle(height, width){
let x = (height * width)
return x
}
console.log(areaOfRectangle(8, 9));



/////////////////////////////// task 14


function remainderDivision(first, second) {
    let x = (first % second)
    return x
}
console.log(remainderDivision(6, 2));



/////////////////////////////// task 15

function logType(value) {
return typeof value    
}
console.log(logType(6));

/////////////////////////////// task 16


function invertedBoolean(number) {
    let x = number !== 7
    return x
}
console.log(invertedBoolean(5));


////////////////////////////////// task 17


function concatenateStrings(string, string_1) {
    let x = string + " " + string_1
    return x
}
console.log(concatenateStrings("itay", "benadon"));

////////////////////////////////// task 18



function findSmaller(number, number_1) {
    if (number > number_1) return number
    else if (number < number_1) return number_1
}
console.log(findSmaller(5, 6));


/////////////////////////////// task 19


function greetWithDefault(name) {
    let x = "Hallo!," + name
    return x
}
console.log("itay");


////////////////////////////// task 20


function isLongString(length) {
    let x = length.length
    if (length > 10) return true
    else return false
}
console.log(isLongString("benadon"));