// 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.
const strings = [
    "baba",
    "my success",
    "no more lives",
    "and of session",
    "good discussion",
  ];
  



function groupOccurences(params) {
    
let obj = {}
for (let i = 0; i < strings.length; i++) {
    let spaceCount = 0
  for (let j = 0; j < strings[i].length; j++) {
    if (strings[i][j] === " ") {
      spaceCount++
      
      
      }
    }
    
   if (!obj[spaceCount]){
      obj[spaceCount] = []
      
}
obj[spaceCount].push(strings[i])
}
console.log(obj);
}


groupOccurences()