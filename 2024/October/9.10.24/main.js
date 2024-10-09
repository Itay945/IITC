// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Simulate success or failure
//             if (success) {
//                 resolve("Operation was successful!");
//             } else {
//                 reject("Operation failed.");
//             }
//         }, 1000);
//     });
// }

// asyncOperation()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });

function asyncOperation() {
    console.log("It's Lottery Time!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber >= 0.5) {
                resolve("You Won!");
            } else {
                reject("You Lose!");
            }
        }, 2000);
    });
}

asyncOperation()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
