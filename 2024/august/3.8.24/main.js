// task 7

function yes() {
    for (let i = 1; i <= 20; i+=2) {
        console.log(i);
        
        
    }
}


function y() {
    for (let i = 2; i <= 20; i+=2) {
     console.log(i);
     
    }
}



// task 11

function some() {
    let star = ""
    for (let i = 0; i < 3; i++) {
        star += "*"
        console.log(star);
        
    }
}


// task 13

function forL() {
    let wrong = ""
    for (let i = 1; i <= 3; i++) {
       wrong += i + " ! "
        console.log(wrong);
        
    }
}



 //15
function numbers_1() {
    two = ""
    for (let i = 1; i <= 4; i++) {
        two += " 2"
       
        
        
    }console.log(two);
} 




// 16

let arr = [1,2,3,4,5]

function array() {
    for (let i = 1; i <= arr.length; i++) {
        console.log(i);
          }
}

//17
let abcd = ['a', 'b', 'c', 'd']


function looping() {
    for (let i = 0; i < abcd.length; i++) {
        console.log(abcd[i]);
        
    }
}
//18

 let something = [10, 20, 30, 40, 50]

function forLoop() {
   for (let i = something.length; i >= 0 ; i--) {
    console.log(something[i]);
    
    
   }
}



// 20
let ar = [1, 2, 3, 4, 5, 6];
function loop() {
    for (let i = 1; i <= ar.length; i+=2) {
        console.log(ar[i]);
        
        
    }
}


// 21

function sums() {
    let sum = 0
    for (let i = 1; i <= 5; i++) {
        sum+= i
        
        
    }console.log(sum);
}


//20

let colors_1 = ['red', 'green', 'blue']

function colors() {
    for (let i = 0; i < colors_1.length; i++) {
        console.log(`Color: ${colors_1[i]}`);
        
        
    }
}

// 22
let product = 1
function hihi() {
    for (let i = 1; i <= 5; i++) {
        product *= i
        
    }    console.log(product);
}




// 23



let evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

function smth() {
    let count = 0
    for (let i = 0; i <= evenNumbers.length; i++) {
        if (i % 2 === 0)
            count++
        console.log("array", evenNumbers[i]);
    }console.log(count);
    
    
}




/// 24
let xd = [10, 5, 8, 12, 3];
function largest() {
    let large = xd[0]
    for (let i = 1; i < xd.length; i++) {
       if (xd[i] > large)
        large = xd[i]
         
       
        
        
    }console.log(large);
}
largest()