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
const elInputTask = document.getElementById("Input-task") // task input

const elInputStatus = document.getElementById("Input-status") // status input

const elUl = document.getElementById("ul-id") //ul

function renderTasks() {

    for (let i = 0; i < gTasks.length; i++) {
      const task = gTasks[i]  
      console.log(task);
      const elTask = document.createElement("li"); //li
      elTask.innerHTML = `
<div>${task.taskName}</div>      
<div>${task.status}</div>
<button>delete</button>`
    elUl.appendChild(elTask)
    }
}    
renderTasks()

    
const elButton = document.querySelector(".submit")
elButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    const elTask = document.createElement("li"); //li
    const taskValue = elInputTask.value //task value
    const statusValue = elInputStatus.value // status value
    elTask.innerHTML = `
<div>${taskValue}</div>    
<div>${statusValue}</div>`
{/* <button onclick="deleteTask('${student.id}')">Delete</button>`; */}
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
  
  