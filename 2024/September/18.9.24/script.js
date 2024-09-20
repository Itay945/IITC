let gTasks = [
    {
        id: makeId(),
        taskName: "gardening",
        status: "in progress"
    },
    {
        id: makeId(),
        taskName: "constraction",
        status: "finished"
    },
    {
        id: makeId(),
        taskName: "cooking",
        status: "in progress"
    }
    ]



    
const elButton = document.querySelector(".submit")
elButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    const elTask = document.createElement("li"); //li
    const taskValue = elInputTask.value //task value
    const statusValue = elInputStatus.value // status value
    elTask.innerHTML = `
<div>${taskValue}</div>
<div>${statusValue}</div>`
// <button onclick="deleteStudent('${student.id}')">Delete</button>`;
    elUl.appendChild(elTask)
   elInputStatus.value = "" // resetting the input each time
   elInputTask.value = "" // resetting the input each time
    
})  
    
// for (let i = 0; i < gTasks.length; i++) {        // not working for me //
//     const taskName = gTasks[i].taskName // task name
//     const taskStatus = gTasks[i].status // task status
    
//     elTask.innerHTML = `
//     <div>${taskName}</div>
//     <div>${taskStatus}</div>`
//     elUl.appendChild(elTask) 
// }
const elInputTask = document.getElementById("Input-task") // task input

const elInputStatus = document.getElementById("Input-status") // status input

const elUl = document.getElementById("ul-id") //ul




  

 
     
console.log(elButton);


function makeId() {
    let id = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }
