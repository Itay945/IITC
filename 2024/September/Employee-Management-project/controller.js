import { editEmployees, saveChanges} from "./service.js";
import { utils } from "./utilities.js"
import { gEmployees } from "./service.js";

// keys

// ID's
const elForm = document.getElementById("form") //form
const elUl = document.getElementById("ul") //ul
const elFirstName = document.getElementById("input-name")
const elLastName = document.getElementById("input-lastName")
const elAge = document.getElementById("input-age")
const elDate = document.getElementById("input-startDate")
const elDepartment = document.getElementById("input-Department") 
const elSalary = document.getElementById("input-salary")
const elFilterDepartment = document.getElementById("Filter");

const dataFromStorage = utils.getFromStorage('employees')

let dataBase = dataFromStorage ? dataFromStorage : gEmployees 

function loadEmployees() {

    
//     const storedEmployees = loadFromStorage(employees_key_added);
   
//     if (storedEmployees.length > 0) {
        
//         gEmployees.splice(0, gEmployees.length, ...storedEmployees);
       

//     }
// renderEmployees()
}
//rendering dummy database
function renderEmployees() {
    


for (let i = 0; i < gEmployees.length; i++) {
    const Employee = gEmployees[i]  
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
    
    utils.saveToStorage();
  }
} 

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

    const newEmployee = {id: utils.makeId(),
        firstName: nameValue,
        lastName: lastNameValue,
        age: ageValue,
        startDate: dateValue,
        department: departmentValue,
        salary: salaryValue}
    dataBase.push(newEmployee)
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
    utils.saveToStorage(dataBase)
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


})



elFilterDepartment.addEventListener("change", function() {
    const selectedDepartment = elFilterDepartment.value;
    filterEmployeesByDepartment(selectedDepartment); 
});
function filterEmployeesByDepartment(department) {
    elUl.innerHTML = ""; 





    dataBase.forEach(employee => {
        
        if (department === "" || employee.department === department) {
            const elNewLi = document.createElement("li");
            elNewLi.innerHTML = `
                <div class="employee-firstName">${employee.firstName}</div>    
                <div class="employee-lastName">${employee.lastName}</div>
                <div class="employee-age">${employee.age}</div>
                <div class="employee-startDate">${employee.startDate}</div>
                <div class="employee-department">${employee.department}</div>
                <div class="employee-salary">${employee.salary}</div>
                <div class="innerHTMLdiv">
                    <button class="delete-button">Delete</button>
                    <button class="edit-button">Edit</button>
                    </div>`;
                    
                let employeeId = employee.id
            elUl.appendChild(elNewLi);

            const elDeleteButton = elNewLi.querySelector(".delete-button");
            elDeleteButton.addEventListener('click', function () {
                elNewLi.remove();
               
            
                console.log(employeeId);
                
                let newList = dataBase.filter(worker => worker.id !== employeeId)
                dataBase = newList
                utils.saveToStorage(dataBase)
                
            });

            const elEditButton = elNewLi.querySelector(".edit-button");
            elEditButton.addEventListener('click', function (ev) {
                ev.preventDefault();
                if (ev.target.textContent === "Edit") {
                    editEmployees(elNewLi);
                    ev.target.textContent = "Save";
                } else if (ev.target.textContent === "Save") {
                    saveChanges(elNewLi);
                    ev.target.textContent = "Edit";
                }
            });
        }
    });
}

function loadFromStorage(key) {
    let storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : []; 
}
filterEmployeesByDepartment("")
// renderEmployees()
// loadEmployees()