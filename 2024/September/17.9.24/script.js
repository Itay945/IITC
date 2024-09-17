const content = document.getElementById("content");
content.style.backgroundColor="lightblue";
content.style.color="lightred"
const liContent = document.querySelectorAll("li")
    

for (let i = 0; i < liContent.length; i++) {
    console.log(liContent[i].textContent);
}