// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.
// const strings = [
//     "baba",
//     "my success",
//     "no more lives",
//     "and of session",
//     "good discussion",
//   ];
  



// function groupOccurences(params) {
    
// let obj = {}
// for (let i = 0; i < strings.length; i++) {
//     let spaceCount = 0
//   for (let j = 0; j < strings[i].length; j++) {
//     if (strings[i][j] === " ") {
//       spaceCount++
      
      
//       }
//     }
    
//    if (!obj[spaceCount]){
//       obj[spaceCount] = []
      
// }
// obj[spaceCount].push(strings[i])
// }
// console.log(obj);
// }


// groupOccurences()

  
// const nestedArray = [[1, 2, 3], [4, [5, 6]], [7, 8], [9]];
// const flatArr = []

//   for (let i = 0; i < nestedArray.length; i++) {
//     if (!Array.isArray(nestedArray[i])) {
//       flatArr.push(nestedArray[i])
//     }
//     else
//     for (let j = 0; j < nestedArray[i].length; j++) {
//       if (!Array.isArray(nestedArray[i][j])) {
//         flatArr.push(nestedArray[i][j])
      
//     }
//     else
//     for (let k = 0; k < nestedArray[i][j].length; k++) {
//       flatArr.push(nestedArray[i][j][k])
      
//     }
    
      
//     }
    
    
//     }console.log(flatArr);
  

// const numberGrid = [
//   [3, 5, 1],
//   [9, 7, 2],
//   [6, 8, 4]
// ];


// function calculateArray(arr) {

//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum+= arr[i][j]
      
      
//     }
    
    
    
   
    
//   }return sum
// }



// console.log(calculateArray(numberGrid))



const numberGrid = [
  [15, 29, 12],
  [48, 33, 21],
  [5, 7, 26]
];

let max = numberGrid[0][0]

for (let i = 0; i < numberGrid.length; i++) {
  for (let j = 0; j < numberGrid[i].length; j++) {
    if (max < numberGrid[i][j]) {
      max = numberGrid[i][j]
    }
    
  }
  
  
}console.log(max);
  
