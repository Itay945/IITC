
function makeId() {
    let id = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }
  
let gTodos = [{
    id: makeId,
    title: "Clean room",
    isCompleted: false,
},
{
    id: makeId,
    title: "Do dishes",
    isCompleted: false,
},
{
    id: makeId,
    title: "feed the cat",
    isCompleted: false,
}];

//DOM elements
const elTodoList = document.getElementById("todo-list")
const elTodoForm = document.getElementById("todo-form")

// Handling event listeners 
elTodoForm.addEventListener("submit", function (ev){
    // prevent form page refresh
    ev.preventDefault()
    // get the input element value
const eltodoinput = document.getElementById("todo-input")
    const todoTitle = eltodoinput.value

    // Calling add todo function
    AddTodo(todoTitle)
    // Clearing the input
    eltodoinput.value = ""
})
function renderTodos() {
    // Clearing the list
    elTodoList.innerHTML = "";

    //Append each li to the list
    for (let i = 0; i < gTodos.length; i++) {
        const currentTodo = gTodos[i]
        const elTodo = document.createElement("li")
        elTodo.textContent = currentTodo.title;
         
        const elDeleteBtn = document.createElement("button")   
        elDeleteBtn.textContent = "Delete";

        elDeleteBtn.addEventListener("click", function () {
            deleteTodo(currentTodo.id)
        })
        // Appending elements
        elTodo.appendChild(elDeleteBtn) 
        elTodoList.appendChild(elTodo)  
    }
}


// Adding todo
function AddTodo(todoTitle) {
    // Create a new todo object and set its title 

    if (!todoTitle) return
    const todo = {
        id: makeId,
        title: todoTitle,
        isCompleted: false,
    }
    // Push the new todo to the todo gTodos Array
    gTodos.push(todo);
    console.log(gTodos);
    
    // Call renderTodos function
    renderTodos()
}

// Delete todo
function deleteTodo(id) {
    gTodos = gTodos.filter((currentTodo) => currentTodo.id !== id);
    renderTodos()
}


renderTodos();
