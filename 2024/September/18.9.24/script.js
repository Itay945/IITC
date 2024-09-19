let gTasks = [
    {
        id: makeId(),
        taskName: "gardening",
        status: "false"
    },
    {
        id: makeId(),
        taskName: "constraction",
        status: "false"
    },
    {
        id: makeId(),
        taskName: "cooking",
        status: "true"
    }
    ]
    console.log(gTasks);



const elInputTask = document.getElementById("Input-task") // task input
const Taskvalue = elInputTask.value //task value
const elInputStatus = document.getElementById("Input-status") // status input
const statusValue = elInputStatus.value // status value
const elUl = document.getElementById("ul-id") //ul

console.log(Taskvalue);
console.log(statusbar);




const elButton = document.querySelector(".submit")
    elButton.addEventListener("click", function (ev) {
        ev.preventDefault();
        const elTask = document.createElement("li"); //li
        elTask.innerHTML = `
    <div>${Taskvalue}</div>
    <div>${statusValue}</div>`
    // <button onclick="deleteStudent('${student.id}')">Delete</button>`;
        elUl.appendChild(elTask)
        console.log(Taskvalue);
        
    })    

// for (let i = 0; i < gTasks.length; i++) {
//     const taskName = gTasks[i].taskName // task name
//     const taskStatus = gTasks[i].status // task status
//     elUl.push(taskName)
//     elUl.push(taskStatus)
//      console.log(gTasks[i].taskName);
     
// }

function createTask(task, status) {
    const newTask = {
        id: makeId(),
        taskName: task,
        status: status,

    }   
gTasks.push(newTasktask)
}

function makeId() {
    let id = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }
