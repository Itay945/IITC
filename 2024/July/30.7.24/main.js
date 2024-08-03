"use strict"
// //https://docs.google.com/document/d/1yB6ErFdyjXWh7INfikVXyVpZ5sTM-htDnYth5FXK0sM/edit#heading=h.4wlm6fu2m3v3
// //// task 1
// function starPattern() {

//     for (let i = 1; i <= 5; i++){
//         let star = "";
    
//         for (let j = 1; j <= i; j++){
//             star += "*"; 
//         }
//         console.log(star);
//     } 
// }

// /// task 2


// function multTable() {
//     for (let i = 1; i <= 5; i++){
//         let row= "";
//         for (let j = 1; j <= 5; j++)
//             row += i * j + "\t"
//         console.log(row);
//     }

// }


 




// // /// task 3

// // function number_2D() {
// //     for (let i = 0; i <= arr.length; i++){
// //         let horiz = ""
// //         let 
// //     }
        
// // }






// // let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// // number_2D()




// /////// Exercise 4: Count Vowels and Consonants

// // function searchInArray(array_2D, target) {
// //     let row = null;
// //     let col = null;
  
// //     for (let i = 0; i < array_2D.length; i++) {
  
// //       for (let j = 0; j < array_2D[i].length; j++) {
// //         if (array_2D[i] === array_2D[j]) {
// //           row = i;
// //           col = j;
// //           break;
// //         }
// //       }

// //       if (row !== null || col !== null) {
// //         break;
// //       }
// //     }
  
// //     if (row !== null || col !== null) {
// //       console.log(
// //         `For target = ${target}, output: Found ${target} at position (${row}, ${col})`
// //       );
// //     } else {
// //       console.log(`Target ${target} not found`);
// //     }
// //   }
  
 
// //   searchInArray(arr, 2);
//     let arr = [ [1, 2, 3],[4, 5, 6],[7, 8, 9]];
// function searchInArray(array, index) {
    


// for (let i = 0; i < array.length; i++) {
   
// for (let j = 0; j < array[i].length; j++ ){
//     if (array[i][j] === index) {
//         console.log(`Value ${index} found at index [${i}][${j}]`);
//     break
//     }
//       console.log(array[i][j]);
// } 
// }
// }
//   searchInArray(arr, 9)



//   //// Exercise 4: Count Vowels and Consonants

// function checkVowels(string){
//     let vowels = "aeiouAEIOU"
//     let count = 0
//     for (let i = 0; i < string.length; i++){
//         for (let j = 0; j < vowels.length; j++){
//           if  (string[i] === vowels[j])
//             count++
            
            
//         }console.log(count);
//     }
//   }




//     checkVowels("itay")
    

//     ///  Exercise 5: Reverse a String

// function stringReverse(string){
//     let reversedString = ""
//     for (let i = string.length - 1; i >= 0; i--){
//     reversedString += string[i]
//         if (reversedString === string.length)
//         break
//     }        console.log(reversedString);
  
// }

//             stringReverse("benadon")



// //// Exercise 6: Number Pyramid

//     function numPyramid(){

//     for (let i = 1; i <= 5; i++){
//      let   extraNumbers = ""
//         for (let j = 1; j <= i ;j++){
//               extraNumbers += j 
//        }       
//              console.log(extraNumbers);
// }         
//  }      
// numPyramid()

// //// 


// /// 11
// let letters = ""

// function isPalindrome(name) {
// for (let i = 0; i < name.length; i++){
//     for (let j = name.length - 1; j < name.length; j--){
//         letters = name[j]
//         console.log(lettrs);

// }

//     }
// }








// isPalindrome("natan1")






// // 1
// function smth(number){
// for (let i = 1; i <= 5; i++){
//    number = i
//    console.log(number);
// }
// }
// smth(6) 



// // 2
// function smth_1(number){
// for (let i = 0; i <= 9; i++){
//    number = i
//    console.log(number);
// }
// }
// smth_1(6) 


// // 3
// let smth = ''
// function backwards(){
//     for (let i = 10;i >= 1; i--){
//         let smth = i
//         console.log(smth);
// } 
  
// }

// backwards()

function someLoop(){
for (let i = 10; i >= 1; i--) {
    console.log(i);
    }
}



<<<<<<< HEAD
// 4

function vash() {
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0)
   console.log(i);
    
}
}



// 5

function something() {
    for (i = 1; i <= 10; i++) {
        if (i % 2 !== 0)
            console.log(i);
    }
}


/// 6

function HIHIHAHA() {
    for (let i = 0; i <= 19; i++) {
        if (i % 3 === 1){

            console.log(i);
            
            console.log("mod", i % 3);
        }
       
    // console.log("modulus",i % 3);
    }
 }

HIHIHAHA()
=======

// /// 4
// function even(){
//     for (let i = 1; i <= 10; i++){
//        if (i % 2 === 0)
//         console.log(i);
//     }
// }

// even()

// task 5


// function even(){
//     for (let i = 1; i <= 10; i++){
//        if (i % 2 === 1)
//         console.log(i);
//     }
// }
// even()



// task 6

function smh() {
   for  (let i = 0; i <= 25; i+=5) {
        console.log(i);
    }
    

}
smh()



//

>>>>>>> 40afb50ef853a6bd85d73e7a00ee9ed782b6c314
