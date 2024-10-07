// let elInput = document.querySelector("input")
// let elBtn = document.querySelector("button[type='submit']")
// const elForm = document.querySelector("form")
// const elContainer = document.querySelector(".container");
// const elbuttonwrapper = document.querySelector(".button-wrapper")
// elForm.addEventListener ('submit', (ev) => {
//     ev.preventDefault();
//     enterPIN()
//     elInput.value = ""
// })
// let balance = 2000
// let retries = 0
//     const maxAttempts = 3
//     const pin = "1234"
// function enterPIN() { 

//     while (retries < maxAttempts) {
//         let enterPIN = elInput.value
//         if (enterPIN === pin) {
//             renderButtons()
//             alert("Correct PIN, Proceeding to transactions.")
//             elInput.value = ""
//             elInput.disabled = true; 
//             const elBalance = document.createElement("p");
//             elBalance.className = "Balance"
//             elBalance.textContent = `Corrent Balance: ${balance}$`
//             elContainer.appendChild(elBalance)
//             break
//         }
//         else {
//             retries++
//         alert(`Wrong PIN, Please try again ${retries} left`)}
        
//        if (retries === maxAttempts) {
//         alert("Card retained due to too many incorrect attempts.")
//         elInput.disabled = true;
//        }break
//     }
    
        
// }

// function renderButtons() {
//     const elButtonWithdraw = document.createElement("button");
//     elButtonWithdraw.className = "withdraw"; 
//     elButtonWithdraw.textContent = "Withdraw";

//     let withdrawInputVisible = false;
//     let elWithdrawInput;

//     elButtonWithdraw.addEventListener("click", (ev) => {
//         if (!withdrawInputVisible) {
//         const elWithdrawInput = document.createElement("input")
//         elWithdrawInput.className = "withdrawInput"; 
//             elContainer.appendChild(elWithdrawInput)

//             const elWithdrawSubmit = document.createElement("button");
//             elWithdrawSubmit.className = "withdraw-submit";
//             elWithdrawSubmit.textContent = "Submit Withdrawal";
//             elContainer.appendChild(elWithdrawSubmit);

//             withdrawInputVisible = true;

//             elWithdrawSubmit.addEventListener("click", (ev) => {
//                 const withdrawalAmount = Number(elWithdrawInput.value); 
//                 if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
//                     alert("Please enter a valid amount to withdraw.");
//                 } else if (withdrawalAmount > balance) {
//                     alert("Insufficient funds. Your current balance is " + balance + "$.");
//                 } else {
//                     balance -= withdrawalAmount;
//                     elbalance.textContent = `Current Balance: ${balance}$`; 
//                     alert(`Withdrawal successful! You withdrew ${withdrawalAmount}$.`);
//                     elWithdrawInput.value = ""; 
//                 }
//             });
//         } else {
//             elWithdrawInput.remove()
//             withdrawInputVisible = false;
//              }        
//             })      

           
  

//     const elButtonDeposit = document.createElement("button");
//     elButtonDeposit.className = "deposit"; 
//     elButtonDeposit.textContent = "Deposit"; 

//     elbuttonwrapper.appendChild(elButtonWithdraw);
//     elbuttonwrapper.appendChild(elButtonDeposit);
// }

let elInput = document.querySelector("input");
let elBtn = document.querySelector("button[type='submit']");
const elForm = document.querySelector("form");
const elContainer = document.querySelector(".container");
const elbuttonwrapper = document.querySelector(".button-wrapper");

elForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    enterPIN();
    elInput.value = "";
});

let balance = 2000;
let retries = 0;
const maxAttempts = 3;
const pin = "1234";
let elBalance;

function enterPIN() {
    let enteredPIN = elInput.value;

    if (enteredPIN === pin) {
        renderButtons();
        alert("Correct PIN, Proceeding to transactions.");
        elInput.value = "";
        elInput.disabled = true;

        if (!elBalance) {
            elBalance = document.createElement("p");
            elBalance.className = "Balance";
            elContainer.appendChild(elBalance);
        }
        elBalance.textContent = `Current Balance: ${balance}$`;  
    } else {
        retries++;
        if (retries === maxAttempts) {
            alert("Card retained due to too many incorrect attempts.");
            elInput.disabled = true;
        } else {
            alert(`Wrong PIN, Please try again. ${maxAttempts - retries} attempts left.`);
        }
    }
}

function renderButtons() {
   
    const elButtonWithdraw = document.createElement("button");
    elButtonWithdraw.className = "withdraw";
    elButtonWithdraw.textContent = "Withdraw";

    let withdrawInputVisible = false;
    let elWithdrawInput;
    let elWithdrawSubmit;

    elButtonWithdraw.addEventListener("click", () => {
        if (!withdrawInputVisible) {
            elWithdrawInput = document.createElement("input");
            elWithdrawInput.className = "withdrawInput";
            elWithdrawInput.type = "number";
            elWithdrawInput.placeholder = "Enter withdrawal amount";
            elContainer.appendChild(elWithdrawInput);

            elWithdrawSubmit = document.createElement("button");
            elWithdrawSubmit.className = "withdraw-submit";
            elWithdrawSubmit.textContent = "Submit Withdrawal";
            elContainer.appendChild(elWithdrawSubmit);

            withdrawInputVisible = true;

            elWithdrawSubmit.addEventListener("click", () => {
                const withdrawalAmount = Number(elWithdrawInput.value);

                if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
                    alert("Please enter a valid amount to withdraw.");
                } else if (withdrawalAmount > balance) {
                    alert("Insufficient funds. Your current balance is " + balance + "$.");
                } else {
                    balance -= withdrawalAmount; 
                    elBalance.textContent = `Current Balance: ${balance}$`; 
                    alert(`Withdrawal successful! You withdrew ${withdrawalAmount}$.`);
                    elWithdrawInput.value = ""; 
                }
            });
        } else {
            elWithdrawInput.remove();
            elWithdrawSubmit.remove();
            withdrawInputVisible = false;
        }
    });

    elbuttonwrapper.appendChild(elButtonWithdraw);  

    const elButtonDeposit = document.createElement("button");
    elButtonDeposit.className = "deposit";
    elButtonDeposit.textContent = "Deposit";

    let depositInputVisible = false;
    let elDepositInput;
    let elDepositSubmit;

    elButtonDeposit.addEventListener("click", () => {
        if (!depositInputVisible) {
            elDepositInput = document.createElement("input");
            elDepositInput.className = "depositInput";
            elDepositInput.type = "number";
            elDepositInput.placeholder = "Enter deposit amount";
            elContainer.appendChild(elDepositInput);

            elDepositSubmit = document.createElement("button");
            elDepositSubmit.className = "deposit-submit";
            elDepositSubmit.textContent = "Submit Deposit";
            elContainer.appendChild(elDepositSubmit);

            depositInputVisible = true;

            elDepositSubmit.addEventListener("click", () => {
                const depositAmount = Number(elDepositInput.value);

                if (isNaN(depositAmount) || depositAmount <= 0) {
                    alert("Please enter a valid amount to deposit.");
                } else {
                    balance += depositAmount;
                    elBalance.textContent = `Current Balance: ${balance}$`; 
                    alert(`Deposit successful! You deposited ${depositAmount}$.`);
                    elDepositInput.value = ""; 
                }
            });
        } else {
            elDepositInput.remove();
            elDepositSubmit.remove();
            depositInputVisible = false;
        }
    });

    elbuttonwrapper.appendChild(elButtonDeposit); 
}
