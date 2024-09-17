const content = document.getElementById("content");
content.style.backgroundColor="lightblue";
content.style.color="red"
const liContent = document.querySelectorAll("li")
    

for (let i = 0; i < liContent.length; i++) {
    console.log(liContent[i].textContent);
}

const myBtn = document.getElementById("button")

const list = document.getElementById("list")
myBtn.addEventListener("click", function (){
    list.style.backgroundColor="yellow"
    
})
const parant = document.getElementById("parant")
const newLi = document.createElement("li")
newLi.textContent = "New Item"
parant.appendChild(newLi)

const addItem = document.getElementById("addItem")
addItem.addEventListener("click" function (ev.){
    
})

