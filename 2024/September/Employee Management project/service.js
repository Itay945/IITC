import { utils } from "./utilities.js";
 let employees_key = "employee"
export let gEmployees = [
    {
        id: utils.makeId(),
        firstName: "Alice",
        lastName: "Smith",
        age: 28,
        startDate: "2020-06-15",
        department: "Marketing",
        salary: 50000
    },
    {
        id: utils.makeId(),
        firstName: "John",
        lastName: "Doe",
        age: 35,
        startDate: "2018-01-25",
        department: "Sales",
        salary: 60000
    },
    {
        id: utils.makeId(),
        firstName: "Emma",
        lastName: "Johnson",
        age: 42,
        startDate: "2015-03-12",
        department: "IT",
        salary: 70000
    },
    {
        id: utils.makeId(),
        firstName: "Michael",
        lastName: "Brown",
        age: 30,
        startDate: "2019-07-01",
        department: "Finance",
        salary: 55000
    },
    {
        id: utils.makeId(),
        firstName: "Sophia",
        lastName: "Williams",
        age: 26,
        startDate: "2021-05-20",
        department: "HR",
        salary: 45000
    },
    {
        id: utils.makeId(),
        firstName: "David",
        lastName: "Taylor",
        age: 39,
        startDate: "2017-09-14",
        department: "Operations",
        salary: 64000
    },
    {
        id: utils.makeId(),
        firstName: "Laura",
        lastName: "White",
        age: 32,
        startDate: "2016-11-03",
        department: "Logistics",
        salary: 50000
    }
];
utils.saveToStorage(employees_key, gEmployees);

// edits employees
export    function editEmployees(elNewLi) {
    const firstNameDiv = elNewLi.querySelector(".employee-firstName");
    const lastNameDiv = elNewLi.querySelector(".employee-lastName");
    const ageDiv = elNewLi.querySelector(".employee-age");
    const startDateDiv = elNewLi.querySelector(".employee-startDate");
    const departmentDiv = elNewLi.querySelector(".employee-department");
    const salaryDiv = elNewLi.querySelector(".employee-salary");



    firstNameDiv.innerHTML = `<input type="text" value="${firstNameDiv.textContent}" class="edit-firstName">`;
    lastNameDiv.innerHTML = `<input type="text" value="${lastNameDiv.textContent}" class="edit-lastName">`;
    ageDiv.innerHTML = `<input type="number" value="${ageDiv.textContent}" class="edit-age">`;
    startDateDiv.innerHTML = `<input type="date" value="${startDateDiv.textContent}" class="edit-startDate">`;
    departmentDiv.innerHTML = `<input type="text" value="${departmentDiv.textContent}" class="edit-department">`;
    salaryDiv.innerHTML = `<input type="number" value="${salaryDiv.textContent}" class="edit-salary">`;
    

    const elEditButton = elNewLi.querySelector(".edit-button");
    elEditButton.textContent = "Save";
}
// saves edit changes
export    function saveChanges(elNewLi) {
    const firstNameInput = elNewLi.querySelector(".edit-firstName");
    const lastNameInput = elNewLi.querySelector(".edit-lastName");
    const ageInput = elNewLi.querySelector(".edit-age");
    const startDateInput = elNewLi.querySelector(".edit-startDate");
    const departmentInput = elNewLi.querySelector(".edit-department");
    const salaryInput = elNewLi.querySelector(".edit-salary");


    elNewLi.querySelector(".employee-firstName").textContent = firstNameInput.value;
    elNewLi.querySelector(".employee-lastName").textContent = lastNameInput.value;
    elNewLi.querySelector(".employee-age").textContent = ageInput.value;
    elNewLi.querySelector(".employee-startDate").textContent = startDateInput.value;
    elNewLi.querySelector(".employee-department").textContent = departmentInput.value;
    elNewLi.querySelector(".employee-salary").textContent = salaryInput.value;

    const elEditButton = elNewLi.querySelector(".edit-button");
    elEditButton.textContent = "Edit";
}