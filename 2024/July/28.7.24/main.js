////////////////////// task 1
// for (let i = 10; i > 0; i--)
//     console.log(i);


///////////////////// task 2


// for (let i = 2; i <= 20; i += 2){
//     console.log(x);
// }
    
///////////////////// task 3

// let sum = 0 
// for (let i = 1; i <= 10; i++ ) {
//     sum += i
//    ;
// }
//     console.log(sum);
////////////// notice the scope////////


//////////////////// task 4


// for (let i = 0; i <= 50; i += 5){
//     console.log(i);
// }

////////////////// task 5


// for (i = 0; i <=5; i++)
//     console.log("*".repeat(i));
////// can use string inside the loop using .repeat()



/////////////////

// let i = 1
// while (i < 100) {
//     console.log(i);
//     i *= 2
    
// }
    
// let i = 1;
// do {
//     console.log(i); ////consol.log(i++)
//     i++;
// } 
// while  (i <= 5)


///////////////////////////////////// practice time
////////////////// task 1



let fFoods = ["Pizza", "Icecream", "Tasbihim", "Fried chicken", "Pomelo"]
console.log(fFoods[2]);

fFoods[1] = "Avocado"
console.log(fFoods[1]);

fFoods.push("Bread")
console.log(fFoods);

fFoods.shift();
console.log(fFoods);

for (let i = 0; i < fFoods.length; i++)
    console.log(fFoods[i]);

let index = fFoods.indexOf("Fried chicken")
console.log(index);