/////////////////// task

let age = 14
if (age >= 18)
    canVote = true
else (canVote = false)
console.log(canVote);
// /////////////////////


////////////////// task 2

let temperature = -5
let weather;
if (temperature < 0)
    weather = "freezing"
else (weather = "not freezing")
console.log(weather);


/////////////////////// task 3


let score = 80
if (score >= 60)
    result = "pass"
else result = "fail"
console.log(result);

//////////////////////// task 4


let grade = 3
if (grade >= 90)
    letterGrade = "A"
else if (grade >= 80)
     letterGrade = "B"
    else letterGrade = "C"
    console.log(letterGrade);
    
////////////////////////// task 5


let number = 6
if (number % 2 === 0)
    isEven = true
else isEven = false
console.log(isEven);


//////////////////////// task 6
let year = 2024
if (year % 4 === 0)
    isLeapYear = true
else isLeapYear = false
    
    console.log(isLeapYear);

////////////////////////// task 7

let hour = 11
if (hour < 12)
    period = "AM"
else period = "PM"
console.log(period);


////////////////////////// task 8
let dayNumber = 5
let dayName;
if (dayNumber === 1)
    dayName = "Sunday"
else if (dayNumber === 2)
    dayName = "Monday"
else if (dayNumber === 3)
    dayName = "Tuesday"
else if (dayNumber === 4)
    dayName = "Wednesday"
else if (dayNumber === 5)
    dayName = "Thursday"
else if (dayNumber === 6)
    dayName = "Friday"
else if (dayNumber === 7)
    dayName = "Saturday"
console.log(dayName);



///////////////////////////////// task 9

let name = ""
if (name === "")
    hasName = false
console.log(hasName);


//////////////////////////////// task 10

let amount = 1000
if (amount > 1000)
    shipping = 0
else shipping = 5
console.log(shipping);


/////////////////////////////// task 11


let password = "secret123"
if (password === "secret123")
    isLoggedIn = true
else isLoggedIn = false
console.log(isLoggedIn);


///////////////////////////////// task 12

let month = 11
let season;
if (month === 1 || month === 2 || month === 3 )
    season = "Autumn"
else if(month === 4 || month === 5 || month === 6)
    season = "Winter"
else if(month === 7 || month === 8 || month === 9)
    season = "spring"
else if(month === 10 || month === 11 || month === 12)
    season = "Summer"
console.log(season);



/////////////////////////////// task 13

let income = 60000
let creditScore = 800
if (income > 50000 && creditScore > 700)
    loanApproved = true
else loanApproved = false
console.log(loanApproved);


///////////////////////////// task 14


let age_1 = 19
if (age_1 < 18 || age_1 > 65)
    discount = 0.2
else discount = 0
console.log(discount);



///////////////////////////// task 15

let number_s = 5
if (number_s >= 1 || number_s <= 10)
    inRange = true
else inRange = false
console.log(inRange);


//////////////////////////// task 16


let dayNumber_1 = 3
let dayName_1;
if (dayNumber_1 === 1)
    dayName_1 = "Sunday"
else if (dayNumber_1 === 2)
    dayName_1 = "Monday"
else if (dayNumber_1 === 3)
    dayName_1 = "Tuesday"
else if (dayNumber_1 === 4)
    dayName_1 = "Wednesday"
else if (dayNumber_1 === 5)
    dayName_1 = "Thursday"
else if (dayNumber_1 === 6)
    dayName_1 = "Friday"
else if (dayNumber_1 === 7)
    dayName_1 = "Saturday"
console.log(dayName_1);


////////////////////////// task 17

let grade_1 = "F"
let text;
if (grade_1 === "A")
    text = "Excellent"
else if(grade_1 === "B")
    text = "Good"
else if(grade_1 === "C")
    text = "Almost good"
else if(grade_1 === "D")
    text = "Not good"
else if(grade_1 === "E")
    text = "Bad"
else if(grade_1 === "F")
    text = "Failure"
console.log(text);


//////////////////////////// task 18


let numba = 5
if (numba === 0)
    sign = "Zero"
else if (numba > 0)
    sign = "Positive"
else if (numba < 0)
    sign = "Negative"
console.log(sign);

////////////////////////////// task 19

let year_1 = 2000
if (year_1 % 400 === 0 && year_1 % 100 === 0)
    isCenturyLeapYear = true
else isCenturyLeapYear = false
console.log(isCenturyLeapYear);


/////////////////////////// task 20


let month_p = 5
let daysInMonth;
switch (month_p){
case 1: // January
case 3: // March
case 5: // May
case 7: // July
case 8: // August
case 10: // October
case 12: // December
daysInMonth = 31
break;
case 4: // April
case 6: // June
case 9: // September
case 11: // November
daysInMonth = 30
case 2: // February
daysInMonth = 28
break
}
console.log(daysInMonth);
////////////////////////////////////////////