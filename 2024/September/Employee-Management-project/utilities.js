import { gEmployees } from "./service.js";
function makeId() {
    let id = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }
  
  function getFromStorage(key) {
    console.log(key);
    console.log(localStorage.getItem(key));
    
    return JSON.parse(localStorage.getItem(key));
  }
                           
  // function saveToStorage(key, value) {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }
  function saveToStorage(dataBase) {
    localStorage.setItem('employees', JSON.stringify(dataBase));
  }
  
  
 
  export let utils = {
    makeId,
    getFromStorage,
    saveToStorage,
  };
  
