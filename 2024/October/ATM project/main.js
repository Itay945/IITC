let elInput = document.querySelector("input")
let elBtn = document.querySelector("button[type='submit']")
const elForm = document.querySelector("form")
elForm.addEventListener ('submit', (ev) => {
    ev.preventDefault();
    enterPIN()
    elInput.value = ""
})

let retries = 0
    const maxAttempts = 3
    const pin = "1234"
function enterPIN() {
    

    
    while (retries < maxAttempts) {
        let enterPIN = elInput.value
        if (enterPIN === pin) {
            alert("Correct PIN, Proceeding to transactions.")
            renderButtons()
            break
        }
        else {
            retries++
        alert(`Wrong PIN, Please try again ${retries} left`)}
        
       if (retries === maxAttempts) {
        alert("Card retained due to too many incorrect attempts.")
       }break
    }
    
        
}

function renderButtons() {
    const elButtonWithdraw = document.createElement("button");
    elButtonWithdraw.className = "withdraw"; 
    elButtonWithdraw.textContent = "Withdraw";

    const elButtonDeposit = document.createElement("button");
    elButtonDeposit.className = "deposit"; 
    elButtonDeposit.textContent = "Deposit"; 

    elContainer.appendChild(elButtonWithdraw);
    elContainer.appendChild(elButtonDeposit);
}