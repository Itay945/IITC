import { gEmployees } from "./service.js"

// ID's
const elForm = document.getElementById("form") //form
const elUl = document.getElementById("ul") //ul
const elFirstName = document.getElementById("input-name")
const elLastName = document.getElementById("input-lastName")
const elAge = document.getElementById("input-age")
const elDate = document.getElementById("input-startDate")
const elDepartment = document.getElementById("input-department") // add select option
const elSalary = document.getElementById("input-salary")
//rendering dummy database
function renderEmployees() {
    

for (let i = 0; i < gEmployees.length; i++) {
    const Employee = gEmployees[i]  
    console.log(Employee);
    const elNewLi = document.createElement("li"); //li
    elNewLi.innerHTML = `
<div>${Employee.firstName}</div>    
<div>${Employee.lastName}</div>
<div>${Employee.age}</div>
<div>${Employee.startDate}</div>
<div>${Employee.department}</div>
<div>${Employee.salary}</div>`
{/* <button onclick="deleteTask('${student.id}')">Delete</button>`; */}
    elUl.appendChild(elNewLi)
  }
} renderEmployees()

//Preventing default
elForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const elNewLi = document.createElement("li"); //li
    const nameValue = elFirstName.value //first name value
    const lastNameValue = elLastName.value // last name value
    const ageValue = elAge.value // last name value
    const dateValue = elDate.value // last name value
    const departmentValue = elDepartment.value // last name value
    const salaryValue = elSalary.value // last name value
    elNewLi.innerHTML = `
<div>${nameValue}</div>    
<div>${lastNameValue}</div>
<div>${ageValue}</div>
<div>${dateValue}</div>
<div>${departmentValue}</div>
<div>${salaryValue}</div>`
{/* <button onclick="deleteTask('${student.id}')">Delete</button>`; */}
    elUl.appendChild(elNewLi)
    elFirstName.value = "" // resetting the input each time 
    elLastName.value = "" // resetting the input each time
    elAge.value = "" // resetting the input each time
    elDate.value = "" // resetting the input each time
    elDepartment.value = "" // resetting the input each time
    elSalary.value = "" // resetting the input each time
    
})