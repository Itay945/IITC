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
}console.log(greet("itay", "benadon"))



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

getDayMessage("Tuesday");



///////////////////////////////////////////////////////// task 5




function checkEligibility(age , isStudent) {
    if (age < 18 && isStudent === true) return "you are a minor student."
    else if (age < 18 && isStudent !== true) return "You are a minor non-student."
    else if (age >=18 && age <= 24 && isStudent === true) return "You are a young adult student."
    else if (age >=18 && age <= 24 && isStudent !== true) return "You are a young adult non-student."
    else if (age >= 25 && isStudent === true) return "You are an adult student."
    else if (age >= 25 && isStudent !== true) return "You are an adult non-student."
}console.log(checkEligibility(24, true))




/////////////////////////////////////////////////////// task 6





function formatName(name) {
  let  trim = name.trim()
  let  lower = trim.toLowerCase()
  const admin = "admin"
    if (lower === admin) return "Welcome, Admin!"
    else return `hello ${lower}!`
} console.log(formatName("HIHI HAHA"))





/////////////////////////////////////////////////////// task 7






function checkDiscount(age, isMember) {
    if (age < 18)
        if (isMember === true) return "You get a 30% discount."
    else return "You get a 20% discount."
    if (age >= 65)
        if (isMember === true) return "You get a 30% discount."
    else return "You get a 20% discount."

}console.log(checkDiscount(200, true))



/////////////////////////////////////////////////////// task 8



function validateLogin(username, password) {
    const storedUsername = "itayBenadon"
    const storedPassword = 1234
    if (username === storedUsername && password === storedPassword) return "Login successful."
    else return "Invalid username or password."
} console.log(validateLogin("itayBenadon", 1234))



////////////////////////////////////////////////////// task 9




function extractInitials(firstName, lastName) {
    const name = firstName.charAt(0)
    const name_1 = lastName.charAt(0)
    const real = name.toUpperCase()
    const real_1 = name_1.toUpperCase()
return `${real}.${real_1}`
}console.log(extractInitials("joe", "biden"))





// /////////////////////////////////////////////////////// task 10
// function maskEmail(email){
//     let splitEmail = email.split('@')
//      splitEmail[0] =  "*****"
//     let maskedEmail = splitEmail.join("@")
//     console.log(maskedEmail);
//     return maskedEmail
// }
// let trueMaskedEmail = maskEmail("whatever@gmail.com")
// console.log(trueMaskedEmail);
///////////////////////////////////////////////////i used dirty cheats to get this answer.


// function maskEmail(email) {
// let unoMail = email.index("@")
// let treMail = "*******"
// let quaMail = 
// } console.log(maskEmail("itay945@yahoo.com"))
/////////////////////everywhere i am looking makes me use an array, i could keep trying to find how to complete it. i find it anoynn






//////////////////////////////////////////////////// task 11



function gradeCalculator(score) {
    if (score >= 90) return "A"
    else if (score >= 80) return "B"
    else if (score >= 70) return "C"
    else if (score >= 60) return "D"
    else return "F"
} console.log(gradeCalculator(500))



////////////////////////////////////////////////// task 12



function canVote(age, isCitizen) {
    if (age >= 18 && isCitizen === true) return "You are eligible to vote."
    else return "You are not eligible to vote" 
} console.log(canVote(66666, true))




/////////////////////////////////////////////////// task 13



function convertToUpperCaseAndAddAge(name, age) {
    let cName = name.toUpperCase()
    let tAge = age.toString()
    let tName = `${cName}${tAge}`
    return `${tName}` ////// why do i need to return?
}

 console.log(convertToUpperCaseAndAddAge("itay", 24))






/////////////////////////////////////////////////////// task 14



function capitalize(word) {
    let aWord = word.charAt(0)
    let abWord = aWord.toUpperCase()
    let bWord = word.substring(1)
    let cWord = `${abWord}${bWord}`
    return `${cWord}` ////////////////why did i need to use the `$ at this part?
} console.log(capitalize("bigadon"))



/////////////////////////////////////////////////////// task 15





function containsSubstring(mainString, subString) {
    let main = mainString.includes(subString)
    if (main === true) return "true"
    else return "false"
}console.log(containsSubstring("main", "sub"))
/////////////////////////////////// unsure i understood the meaning here, what does mainString means? as in a name? 



