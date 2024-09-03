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
    
}
for (let i = 0; i < strings.length; i++) {
    spaceCount = 0
  for (let j = 0; j < strings[i].length; j++) {
    if (strings[i][j] === " ") {
      spaceCount++
      
    }
    
  }
    console.log(spaceCount);
    
    
}



groupOccurences()