

// // for (let i = 1; i <= 5; i++) {
// //   console.log(`This is iteration number ${i} of the main loop`); 
// //   // This is iteration number 1 of the main loop
// //     // This is iteration number 2 of the main loop
// //     // This is iteration number 3 of the main loop
// //     // This is iteration number 4 of the main loop
// //     // This is iteration number 5 of the main loop

// // // The first loop runs 5 times, and for each iteration of the first loop, the second loop runs 5 times.
// // // the first interation will not end until the second loop has finished running all its iterations.
// //   for (let j = 1; j <= 5; j++) {
// //     console.log(`This is iteration number ${j} of the inner loop`);
// //     // This is iteration number 1 of the inner loop
// //     // This is iteration number 2 of the inner loop 
// //     // This is iteration number 3 of the inner loop
// //     // This is iteration number 4 of the inner loop
// //     // This is iteration number 5 of the inner loop
// //   }
// // }

// // let times = ""
// // for (let i = 1; i <= 10; i++) {
  
    
// // }

// //   function thisIsIt(){
// // for (let i = 1; i <= 10; i++){
// //    let times = ""
// //     for(let j = 1; j <= 10; j++)
// //         times += i * j + " "
// //     console.log(times);
// // }

// }
// // function multTable() {
// //     for (let i = 1; i <= 5; i++){
// //         let row= "";
// //         for (let j = 1; j <= 5; j++)
// //             row += i * j + "\t"
// //         console.log(row);
// //     }

// // }
// // multTable()


// //
// function countFreq (str) {
//     for (let i = 0; i <= str.length; i++){
//         //  console.log(str[i]);
//     for (let j = 0; j < str.length; j++) {
//         console.log();
//         const element str[j];
        
//     }
//     }
       
// }



// countFreq("itay")



// 30 Easy Nested Loop Exercises in JavaScript
// let star = 

let star = ""
function paper(number) {
    for (let i = 1; i <= number; i++) {
        for (j = 1; j <= number; j++){
            star+= "*"
        }
      star += "\n"
    }
    console.log(star);
}

paper(10)




let newLine = 1
function numbers(number) {
  for (let i = 1; i <= number; i++) {
    let row = ""
    for (let j = 1; j <= number; j++) {

        row += newLine + " "
        newLine ++
        
    } console.log(row);
 
  }
}
numbers(4)


/// 3
function starTriangle(g) {
  for (let i = 1; i <= 3; i++) {
    let smth = ""
    for (let j = 1; j <= i; j++) {
        smth += "* "
         
    }
   console.log(smth);
    
  }
}
starTriangle()