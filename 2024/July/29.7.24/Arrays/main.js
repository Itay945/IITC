/// js array practice exercises

///////////////////////////////////// practice time
////////////////// task 1



// let fFoods = ["Pizza", "Icecream", "Tasbihim", "Fried chicken", "Pomelo"]
// console.log(fFoods[2]);

// fFoods[1] = "Avocado"
// console.log(fFoods[1]);

// fFoods.push("Bread")
// console.log(fFoods);

// fFoods.shift();
// console.log(fFoods);

// for (let i = 0; i < fFoods.length; i++)
//     console.log(fFoods[i]);

// let index = fFoods.indexOf("Fried chicken")
// console.log(index);

// let arr = [1,2,3,4,5]
// let sum = 0
// for (i = 0; i < arr.length; i++)
//     sum+=arr[i]
//     console.log(sum);



////////////////////////// Array Exercises
////////////////////// task 1-3
// let fruits = []
// fruits.push("Pomelo")
// let lastItem = fruits.pop()
// fruits[1] = "kiwi"
// console.log(fruits);




// let nums = [1,2,3,4,5]
// console.log(nums[2]);



// let colors = []
// colors.push("red","green","blue")
// colors.shift()
// colors.unshift("yellow")
// console.log(colors);
// ////// task 9
// let sum = 0
// let numbs = [1,2,3,4,5]
// for (i = 0; i < numbs.length; i++)
//     sum+=numbs[i]
//     console.log(sum);

// /// task 10

// console.log(colors.indexOf("green"));


/// task 11
// let arr = [1,2,3,4,5,10,55]
// let max = arr[0]
// for (i = 1; i < arr.length; i++)
//     if (arr[i] > max)
// max = arr[i]
// console.log(max);

///////// task 12

// fruits.slice(1,2)
// console.log(fruits);

// //////// task 13

// let ar = [1,2,3,4,5,6,7]
// let smth = ar.filter()
// console.log(smth); //// function needed?


///// task 14


//  join = colors.join(" , ")
// console.log(colors);


/////// task 15

// let ar = [1,2,3,4,5,6,7]
// let ar_1 = [1,2,3,4,5,6,7,8]
// let dog = ar.concat(ar_1)
// console.log(dog);

////////////////// 16

// fruits.reverse()
// console.log(fruits);


///////////////// 17

// let names = ["itay", "yota", "tal", "yogev"]
// let helloNames = names.map(function(name)) {
//     return "Hello, "+ names;
// }
// console.log("helloNames", helloNames);


//////////////////// 18

// let numa = [1,2,3,4,5,6,7]
// allGreaterThanZero = numa.every(isGreatThanZero)
// function 




/////////////////////100+ Array Exercises for JavaScript 
////// 1 - 5 Basic Syntax and Declaration
let fruits = []
let numbers = [1,2,3,4,5,6,7,8]
let colors = ["red", "green", "blue"]
let mixed = [1, "car", true]
let seasons = ["summer","autumn","winter","spring"]
/// 6 - 10 Array Length

console.log(numbers.length)

let emptyCheck = []
if (emptyCheck.length === 0)
    console.log("empty");
else
    console.log("full");


let dynamic = [1,2,3,4,5]
console.log(dynamic.length);

dynamic.push("7")
console.log(dynamic.length);

dynamic.pop()
console.log(dynamic.length);


/// 11 - 15 Accessing Elements


console.log(colors[0]);


console.log(seasons[seasons.length - 1]);

console.log(numbers[Math.floor(numbers.length / 2)]);

console.log(fruits[6]);

console.log(`the second color is ${colors[1]}`);

//// 16-20 Modifying Elements


fruits[0] = "apple"
console.log(fruits);


numbers[numbers.length - 1] = 10
console.log(numbers);

// numbersz = numbersz[numbersz.length / 2] * 2
// console.log(numbersz);

for (i = 0; i < colors.length; i++)
    colors[i] = colors[1].toUpperCase()
console.log(colors);

let firstElement = seasons.shift()
let lastElement = seasons.pop()

//shift() pulls the first element and stores it in a variable.
//pop() does the same from the last element instead.
seasons.push(firstElement)
// pushes the variable into the last element inside of an array
seasons.unshift(lastElement)
// returns the variable to the [0] of the array
// mega confusing
console.log(seasons);


/// 21 - 25 Array Methods: push() and pop()

fruits.push("orange")
console.log(fruits);


numbers.pop();
console.log(numbers);

colors.push("orange","black","white")
console.log(colors);



let emptyArray = []
for (i = 1; i <= 5; i++)
   
    emptyArray.push(i)

    console.log(emptyArray);


    let emptyArray_1 = [1,2,3,4,5]
for (i = emptyArray_1.length; i > 0; i--){
   let removedElement_1 = emptyArray_1.pop()


    console.log(removedElement_1);
}
// weird one
//////////////////// 26 - 30 Array Methods: unshift() and shift()