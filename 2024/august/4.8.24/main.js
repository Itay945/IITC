// let students = [
//     {id: "1", name: "omer"},
//     {id: "2", name: "avi"},
//     {id: "3", name: "gaga"},
// ];


// function getArrayByKeys(array, key) {
//     let firstName = []
//     for (let i = 0; i < array.length; i++) {
//    firstName.push(array[i][key])
    
        
//     } 
//     return firstName;
// }getArrayByKeys(students, "name"))




// let students = [
//     {id: "1", name: "omer", grade: 100},
//     {id: "2", name: "avi", grade: 40},
//     {id: "3", name: "gaga", grade: 80},
// ];


// function getPassStudents(array, grade) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].grade > grade )
//        newArray.push(array[i]["grade"])
         
        
        
//     }return newArray
    
    
// }console.log(getPassStudents(students, 80));
 



// let people = ["yossi","liraz","baba"]


// function createPeople(names) {
//     let people = []
//     for (let i = 0; i < names.length; i++) {
//        people.push({ name: names[i]})
        
//        people.push(newguy)
//     }



//     return people
// // } console.log(createPeople(["yossi","liraz","baba"]));





// /// 1

// let person = {
//     name: "John",
//     age: 17,
//     address: {
//       city: "New York",
//       zip: "10001",
//     },
//   };
  

// function updateCity(person, newCity) {
        
//         person.address.city = newCity
//     }




// updateCity(person, "Los Angeles");
// console.log("Updated Person:", person);






// let students = [
//     { id: 1, name: "Alice", age: 20 },
//     { id: 2, name: "Bob", age: 22 },
//     { id: 3, name: "Charlie", age: 19 },
//   ];
  
//   // TODO: Write a function to return an array of student names
//   function getStudentNames(array) {
//     let emptArray = []
//     for (let i = 0; i < array.length; i++) {
//         emptArray.push(array[i].name)
        
//     }return emptArray
//   }


//   function getStudentById(students, id) {
    
//   }
//     console.log(getStudentById(students, ));
    
  





    let school = {
      name: "Greenwood High",
      address: {
        city: "Springfield",
        zip: "12345",
      },
      students: [
        { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
        { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
      ],
    };



    function updateStudentGrade(school, studentId, subject, newGrade){
      for (let i = 0; i < school.students.length; i++) {
        if (school.students[i].id === studentId) {
          school.students[i].grades[subject] = newGrade;  
        }
        
        return school.students[i]
        
      }
    }

    // console.log(updateStudentGrade(school, 1, "math", 90));
    



    // ///


    // let orders = [
    //   { id: 1, product: "Laptop", status: "delivered" },
    //   { id: 2, product: "Mouse", status: "pending" },
    //   { id: 3, product: "Keyboard", status: "delivered" },
    //   { id: 4, product: "Monitor", status: "pending" },
    //   { id: 5, product: "Laptop", status: "shipped" },
    // ];
      
    // function getDeliveredOrders(orders) {
    //   let array = []
    //   for (let i = 0; i < orders.length; i++) {
    //     if (orders[i].status === "delivered") {
    //       array.push(orders[i])
    //     }
    //   } return array
    // }
    // console.log(getDeliveredOrders(orders));
    
    // let addedProducts
    // function countProductOccurrences(orders) {
    //   let allOrdersNumber = []
    //   for (let i = 0; i < orders.length; i++) {
       
       
        
    //   }
    // }
    // console.log(countProductOccurrences(orders));
    



    let school_1 = {
      name: "Greenwood High",
      address: {
        city: "Springfield",
        zip: "12345",
      },
    }
    //   students: [
    //     { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    //     { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
    //   ],
    // };





      function some(students) {
        const emptyObj =
       }
        {
        for (let i = 0; i < school_1.length; i++) {
          obj.emptyObj = 
          
          
        }
         
        }
        
      
      
      


  console.log(some(school_1));
  