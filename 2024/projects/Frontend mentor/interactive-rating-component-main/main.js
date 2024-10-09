const firstPart = document.querySelector(".first-part")
const secondPart = document.querySelector(".second-part")
const submitButton = document.querySelector(".submit-button")
const ratings = document.querySelector(".ratings")
const dots = document.querySelectorAll(".dot")
const span = document.querySelector(".span")
console.log(dots);

dots.forEach(dot => {
                
    dot.addEventListener('click', () => {
        dots.forEach(dot => dot.classList.remove('active'))
        dot.classList.add('active')
        selectedDot = dot.innerText
        span.innerHTML = `${selectedDot}`
        submitButton.addEventListener('click', () => {
            firstPart.classList.add('hidden')
            secondPart.classList.remove("hidden")
        })
    })
})

 
