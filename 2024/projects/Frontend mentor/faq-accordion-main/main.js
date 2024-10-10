    const plus = document.querySelectorAll(".plus-asset")
    const text = document.querySelectorAll(".explanation")
    console.log(text);
    plus.forEach((plusS, index) => {
        plusS.addEventListener("click", () =>{
            plusS.classList.add('hidden');
            text[index].classList.remove("hidden")
        })
    });
