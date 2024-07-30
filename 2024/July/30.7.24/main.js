"use strict"
//https://docs.google.com/document/d/1yB6ErFdyjXWh7INfikVXyVpZ5sTM-htDnYth5FXK0sM/edit#heading=h.4wlm6fu2m3v3
//// task 1
function starPattern() {

    for (let i = 1; i <= 5; i++){
        let star = "";
    
        for (let j = 1; j <= i; j++){
            star += "*"; 
        }
        console.log(star);
    } 
}

/// task 2


function multTable() {
    for (let i = 1; i <= 5; i++){
        let row= "";
        for (let j = 1; j <= 5; j++)
            row += i * j + "\t"
        console.log(row);
    }

}


 




// /// task 3

// function number_2D() {
//     for (let i = 0; i <= arr.length; i++){
//         let horiz = ""
//         let 
//     }
        
// }






// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// number_2D()




/////// Exercise 4: Count Vowels and Consonants

// function searchInArray(array_2D, target) {
//     let row = null;
//     let col = null;
  
//     for (let i = 0; i < array_2D.length; i++) {
  
//       for (let j = 0; j < array_2D[i].length; j++) {
//         if (array_2D[i] === array_2D[j]) {
//           row = i;
//           col = j;
//           break;
//         }
//       }

//       if (row !== null || col !== null) {
//         break;
//       }
//     }
  
//     if (row !== null || col !== null) {
//       console.log(
//         `For target = ${target}, output: Found ${target} at position (${row}, ${col})`
//       );
//     } else {
//       console.log(`Target ${target} not found`);
//     }
//   }
  
 
//   searchInArray(arr, 2);
    let arr = [ [1, 2, 3],[4, 5, 6],[7, 8, 9]];
function searchInArray(array, index) {
    


for (let i = 0; i < array.length; i++) {
   
for (let j = 0; j < array[i].length; j++ ){
    if (array[i][j] === index) {
        console.log(`Value ${index} found at index [${i}][${j}]`);
    break
    }
      console.log(array[i][j]);
} 
}
}
  searchInArray(arr, 9)