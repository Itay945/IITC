    // const plus = document.querySelectorAll(".plus-asset")
    // const text = document.querySelectorAll(".explanation")
    // console.log(text);
    // plus.forEach((plusS, index) => {
    //     plusS.addEventListener("click", () =>{
    //         plusS.classList.add('hidden');
    //         text[index].classList.remove("hidden")
    //     })
    // });

    const plus = document.querySelectorAll(".plus-asset");
const minus = document.querySelectorAll(".minus-asset");
const text = document.querySelectorAll(".explanation");

plus.forEach((plusS, index) => {
    plusS.addEventListener("click", () => {
        plusS.classList.add('hidden'); 
        minus[index].classList.remove('hidden');
        text[index].classList.remove("hidden");
    });
});

minus.forEach((minusS, index) => {
    minusS.addEventListener("click", () => {
        minusS.classList.add('hidden');
        plus[index].classList.remove('hidden'); 
        text[index].classList.add("hidden"); 
    });
});
