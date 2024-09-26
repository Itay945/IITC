import { editEmployees, saveChanges, gEmployees } from "./service.js";
import { utils } from "./utilities.js"
// keys
const employees_key_added = "employeeAdded"
// ID's
const elForm = document.getElementById("form") //form
const elUl = document.getElementById("ul") //ul
const elFirstName = document.getElementById("input-name")
const elLastName = document.getElementById("input-lastName")
const elAge = document.getElementById("input-age")
const elDate = document.getElementById("input-startDate")
const elDepartment = document.getElementById("input-Department") 
const elSalary = document.getElementById("input-salary")
//rendering dummy database
function renderEmployees() {
    

for (let i = 0; i < gEmployees.length; i++) {
    const Employee = gEmployees[i]  
    console.log(Employee);
    const elNewLi = document.createElement("li"); //li
    elNewLi.innerHTML = `
    
<div class="employee-firstName">${Employee.firstName}</div>    
<div class="employee-lastName">${Employee.lastName}</div>
<div class="employee-age">${Employee.age}</div>
<div class="employee-startDate">${Employee.startDate}</div>
<div class="employee-department">${Employee.department}</div>
<div class="employee-salary">${Employee.salary}</div>
<div class="innerHTMLdiv">
<button class="delete-button">Delete</button>
<button class="edit-button">Edit</button>
<div>`
    elUl.appendChild(elNewLi)
    const elDeleteButton = elNewLi.querySelector(".delete-button")
    elDeleteButton.addEventListener('click', function () {
        elNewLi.remove()
        
    })
    const elEditButton = elNewLi.querySelector(".edit-button")
   elEditButton.addEventListener('click', function (ev) {
    if (ev.target.textContent === "Edit") {
        ev.preventDefault();
        editEmployees(elNewLi);
    } else if (ev.target.textContent === "Save") {
        ev.preventDefault();
        saveChanges(elNewLi);
    }
});
    
    utils.saveToStorage(employees_key_added, gEmployees);
  }
} renderEmployees()

//Preventing default
elForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let elNewLi = document.createElement("li"); //li
    const nameValue = elFirstName.value //first name value
    const lastNameValue = elLastName.value // last name value
    const ageValue = elAge.value // last name value
    const dateValue = elDate.value // last name value
    const departmentValue = elDepartment.value // last name value
    const salaryValue = elSalary.value // last name value
    elNewLi.innerHTML = `
<div class="employee-firstName">${nameValue}</div>    
<div class="employee-lastName">${lastNameValue}</div>
<div class="employee-age">${ageValue}</div>
<div class="employee-startDate">${dateValue}</div>
<div class="employee-department">${departmentValue}</div>
<div class="employee-salary">${salaryValue}</div>
<div class="innerHTMLdiv">
<button class="delete-button">Delete</button>
<button class="edit-button">Edit</button>
<div>`
    elUl.appendChild(elNewLi)
    elFirstName.value = "" // resetting the input each time 
    elLastName.value = "" // resetting the input each time
    elAge.value = "" // resetting the input each time
    elDate.value = "" // resetting the input each time
    elDepartment.value = "" // resetting the input each time
    elSalary.value = "" // resetting the input each time
    const elDeleteButton = elNewLi.querySelector(".delete-button")
    elDeleteButton.addEventListener('click', function () {
        elNewLi.remove() 
   })
   const elEditButton = elNewLi.querySelector(".edit-button")
   elEditButton.addEventListener('click', function (ev) {
    if (ev.target.textContent === "Edit") {
        ev.preventDefault();
        editEmployees(elNewLi);
    } else if (ev.target.textContent === "Save") {
        ev.preventDefault();
        saveChanges(elNewLi);
    }
});

    utils.saveToStorage(employees_key_added, gEmployees);
})


