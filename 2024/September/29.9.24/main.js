// https://ta-at-iitc.vercel.app/

// const array = [1, 2, 3, 4, 5]
const domView = document.getElementById("my-dom")

// domView.innerHTML = `<p>${array}</p>`
// array.forEach(num => {
//    let number = num * 2
//     console.log(number);
    
// })

// const array = [1, 2, 3, 4, 5]

// array.forEach(num => {
//    let number = num * 2
//     console.log(number);
    
// })

// const array = [1, 2, 3, 4, 5]
// let secondArray = []
// array.forEach(num => {
//    secondArray.push(num)
    
    
// })
// console.log(secondArray);

// const array = [1, 2, 3, 4, 5]
// let sum = 0
// array.forEach(num => {
//     sum+=num
// })
// console.log(sum);

// const array = [1, 2, 3, 4, 5]
// numbers = []
// array.forEach(num => {
    
//   number = num ** 2
//   numbers.push(number)
// })
// console.log(numbers);

// const arr = [1, 2, 3, 4, 5]

// array = arr.map(num => {
    //     numbers = num * 2    
    //     return numbers
    // })
    // console.log(array);
    

    
//   const array =  ['Hello', ' ', 'World', '!']
//     empt = ""
//     array.forEach(string => {
//         empt += string

        
//     })

// console.log(empt);





// const array = ['תפוח', 'בננה', 'דובדבן']

// const newArr = array.map(str =>{
//     const speed = str.length
//     return speed
// })
// console.log(newArr);


// const array = [1, 4, 9, 16, 25]

// const smth = array.map(str => {
//    const num = str ** 2
//     return num
// })
// console.log(smth);


// const arr = ['שלום', 'עולם']

// const array = arr.map(str =>{
//     smth = str.toUpperCase()
//     return smth
// })
// console.log(array);



// const arr = [true, false, true]
// const array = arr.map(bool => {
//     smth = !bool
//     return smth
// })
// console.log(array);


//  const arr = [1, 2, 3, 4, 5, 6]

//     const array = arr.filter(num => {
        
//     if (num % 2 === 0) {
//         return num
//     }
//     else {
//         return ""
//     }
        
       
//     })
//     console.log(array);
    


// const arr = ['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי']


// const array = arr.filter(num => num.length > 5)
// console.log(array);


// //13
// const arr = [5, 10, 15, 20, 25]

// const array = arr.filter(num => num > 10)

// console.log(array);


// const arr = ['תפוח', 'בננה', 'תפוז', 'דובדבן']

// const array = arr.filter(string => string.startsWith("ת"))
// console.log(array);


// const arr = [1, 2, 3, 4, 5, 6]

// const array = arr.filter(num => num % 2 === 0)
// console.log(array);

// //16fj

// const arr = [1, 2, 3, 4, 5]

// const sum = arr.reduce((initial, value ) => {
//      return initial + value
// },0)    
// console.log(sum);


// const arr = [10, 5, 15, 20, 25]


// const sum = arr.reduce((initial, value ) => {
//     return initial > value ? initial : value
        
//     })    
//     console.log(sum);

// const arr = ['שלום', ' ', 'עולם', '!']

// const that  = arr.reduce((initial, value) => {
// return initial + value
// })
// console.log(that);

// const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]              ******************************** need to asnwer

// const count = arr.reduce((initial, value) => {
// initial[value]
// })


// const arr = [1, 2, 3, 4, 5]

// const smth = arr.some(num => num > 3)
// console.log(smth);


// const arr = [2, 4, 6, 8, 10]

// const smth = arr.every(smth => smth % 2 === 0) 

// console.log(smth);



// const arr = ['תפוח', 'בננה', 'דובדבן'] 
// const smth = arr.some(num => num.length > 6)
// console.log(smth);


// const arr = ['אדדש', 'גדד', 'א']
// const vowels = ['א', 'ה', 'י', 'ו'];


// const smth =  arr.every(str => {
    
//     for (let index = 0; index < vowels.length; index++) {
//         const vowel = vowels[index]
//         if (str.startsWith(vowel)) {
//             return true
//         } else {
//             continue
//         }
        
//     }



// })
 

// console.log(smth);


// const arr = [false, false, false, true]

// const smth = arr.some(str => {
//     return str
// })
// console.log(smth);


// const arr = [1, 2, 3, 4, 5]

// const smth = arr.find(str =>{
//    const that = str > 3
//     return that
// })
// console.log(smth);


// const arr = [1, 3, 5, 2, 4, 6]

// const smth = arr.findIndex(num => {
//     const that = num % 2 === 0
//     return that
    
    
// })
// console.log(smth);


// const arr = ['תפוח', 'בננה', 'דובדבן']

// const array = arr.find(str => {
//    const smth = str.length > 5
//    return smth
// })
// console.log(array);


// const arr = ['תפוח', 'בננה', 'דובדבן', 'תמר']


// const array = arr.findIndex(str => {
//    return str === 'דובדבן'
// }  )
// console.log(array);


// const arr = [1, 2, 3, -4, 5, -6]

// const array = arr.find(num => {
//     if (Math.sign(num) === -1)
//     return num
// })
// console.log(array);


// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5]

// const array = arr.sort((a, b) => {
//     return a - b
// })
// console.log(array);


// const arr = ['בננה', 'דובדבן', 'תפוח', 'תמר']

// const array = arr.sort()
// console.log(array);


// 33

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5]

// const array = arr.sort((a,b) => {
//     return b - a
// })
//  console.log(array);


// const arr = ['בננה', 'דובדבן', 'תפוח', 'תמר', 'קמהקהקהמקהמ'] 

// const array = arr.sort((a,b) => {
// return    a.length - b.length
// })
// console.log(array);

// const arr = [{name: 'יוחנן', age: 25}, 
// {name: 'יעל', age: 30}, 
// {name: 'בועז', age: 20}]

// const array = arr.sort((a,b) => {
//    return a.age - b.age
// })
// console.log(array);


// const arr = [1, [2, 3], [4, [5, 6]]]

// const array = arr.flat(2)

// console.log(array);

// const arr = [1, [2, [3, [4]]]]

// const array = arr.flat(2)
// console.log(array);



// const arr = [1, 2, , 4, 5]


// const array = arr.flat(1)


// console.log(array);
// console.log(arr);


// const arr = ['א', ['ב', 'ג'], 'ד']

// const array = arr.flat(1)

// console.log(array);


// const arr = [1, [2, [3, [4, [5]]]]]

// const array = arr.flat(Infinity)

// console.log(array);

// const arr = ['א', 'ב', 'ג', 'ד']
// const array = arr.forEach((str, index) => {
    
//    return console.log(str, index)
    
// })

// const arr = [10, 20, 30, 40]

// const array = arr.map((num, index) => {
//     const obj = {}
//     obj.number = num
//     obj.index = index
//     return obj
  
// })
// console.log(array);


// const arr = ['תפוח', 'בננה', 'אבטיח', 'תמר']

// const array = arr.filter(str => str.includes("א"))
// console.log(array);


const arr = ['א', 'ב', 'א', 'ג', 'ב', 'א']

const array = arr.reduce((initial, value) => {
const obj = {}
    obj.key = value
    obj.key
})