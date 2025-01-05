// 1.
function greet(name) {
    return "Hello, " + name;
  }
  
  greet("Alice")
  
  // 2. 
  function add(a, b) {
    return a + b;
  }
  
  add(5, 10)
  
  // 3. 
  function getNames(names) {
    return names.join(", ");
  }
  
  getNames(["Alice", "Bob", "Charlie"])
  
  // 4. 
  function isAdult(age) {
    return age >= 18;
  }
  
  isAdult(20)
  
  // 5.
  function displayPerson(preson) {
    return` User: ${preson.name}, Age: ${preson.age}`;
  }
  
  displayPerson({ name: "Alice", age: 25 })
  
  // 6. 
  function processNumber(number, callback) {
    return callback(number);
  }
  
  processNumber(5, n => n * 2)
  
  // 7.
  function multiply(a, b = 1) {
    return a * b;
  }
  
  multiply(5)
  multiply(5, 2)
  
  // 8. 
  function printId(id) {
    if () {
      return id.toUpperCase();
    } else {
      return id.toFixed();
    }
  }
  
  printId("123")
  printId(123)
  
  // 9. 
  function getProducts(products) {
    return products.map(product => product.name);
  }
  
  getProducts([{ name: "Laptop" }, { name: "Phone" }])
  
  // 10. 
  function getFullName(user) {
    return user.lastName ? user.firstName + user.lastName : user.firstName;
  }
  
  getFullName({ firstName: "Alice" })
  getFullName({ firstName: "Alice", lastName: "Smith" })
  
  // 11. 
  function getFirstItem(arr) {
    return arr[0];
  }
  
  const firstNumber =  getFirstItem([1, 2, 3])
  firstNumber.toFixed()
  const firstString =  getFirstItem(["a", "b", "c"])
  firstNumber.toUpperCase()
  
  // 12. 
  function getAddress(business) {
    return ${business.address.street}, ${business.address.city};
  }
  
  getAddress({ address: { street: "Main St", city: "Boston" } })
  
  //13. 
  function render() {
    const button = document.getElementById('btn')
    document.body.appendChild(button)
  }