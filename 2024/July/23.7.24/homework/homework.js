////////////////////////////////////////////////////////// task 1

let firstName = "Itay"
let lastName = "Benadon"
let age = 24
let isStudent = true

isAdult = age > 18
////////////////////////////////////////////////////////// task 2

function greet(firstName , lastName) {
   let fullName = `${firstName} ${lastName}`
   let result = fullName.toUpperCase()
   return `Hello ${result}! Welcome to the IITC Bootcamp.`
}
////////////////////////////////////////////////////////// task 3
function checkAge(age) {
    if (age < 13) return "You are a child.";
    else if (age >= 13 && age <= 17) return "You are a teenager.";
    else if (age >= 18 && age <= 64) return "You are an adult.";
    else if (age >= 65) return "You are a senior."
} console.log(checkAge(64))
////////////////////////////////////////////////////////// task 4
function getDayMessage(day) {
switch (day) {
        case "Monday":
        console.log("Today is Monday");
        break;
        case "Tuesday":
        console.log("Today is Tuesday doubles cuz good");
        break;
        case "Wednesday":
        console.log("Today is Wednesday");
        break;
        case "Thursday":
        console.log("Today is Thursday");
        break;
        case "Friday":
        console.log("Today is Friday");
        break;
        case "Saturday":
        console.log("Today is shabes");
        break;
        case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}
}

getDayMessage("Sunday");

