// console.log("start");
// setTimeout(() => {
//     console.log("end");
    
// }, 2000)


// for (let i = 1; i <= 3; i++) {
//    setTimeout(() => {
//     console.log(i);
//    }, 1000)
// }


// for (let i = 1; i <= 3; i++) {
//    setTimeout(() => {
//     console.log(i);
//    }, 1000)
// }


// function solution(cb) {
//     cb()
// }

// const cbfn = () =>  {
//     console.log("Hallo World");
    
// }

// solution(cbfn)


// const smth = ((cb, fName) =>    {
//     cb(fName)
// })
// const dpMsg = (string) => {
//     console.log(`hello ${string}`);
    
// }
// smth(dpMsg,"LIAV")
//https://github.com/public-apis/public-apis
const imgDiv = document.querySelector(".imageDiv");


let smth = fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
    
    insertImage(data.message);
});

function insertImage(src) {
    imgDiv.insertAdjacentHTML("afterbegin", `
        <img src="${src}" alt="Dog Image">
        `);
    }
    insertImage(smth);





const cats = document.querySelector(".cat-fact");


let that = fetch("https://cat-fact.herokuapp.com/fact")
.then(response => response.json())
.then(data => {
    
    insertImage(data.message);
});

function insertImage(src) {
    imgDiv.insertAdjacentHTML("afterbegin", `
        <p src="${src}">
        `);
    }
    insertImage(smth);
