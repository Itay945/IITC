let newPerson = {
    favoriteFood: "Pizza",
    age: 24,
    city: "Rehovot",
    likes: "Cats",
    hate: "Dust"
}

let Laptop = {
    cpu: "intel i5 ultra",
    gpu: "125h",
    ram: "32gb",
    panel: "ips panel 60hz :( "
}
console.log(newPerson);




let person = {
    name: "john",
    age: "30",
    isStudent: "false"
}
console.log(person)


console.log(person.name,person.age);


person.isStudent = true
    console.log(person.isStudent);

    //////
////////////////// object saying the details about some huligan car
// let car = {
//     make: "subaro",
//     model: "pesha",
//     year: "1970"
// }
// console.log(car);


// console.log(car.make,car.model);

// car.year = "2024"

// console.log(car.year);



/////


let fruit = {
    name: "pomelo",
    color: "green",
    sweetness: "6"
}
console.log(fruit.sweetness);

fruit.color = "yellowish"
console.log(fruit.color);


//////


let book = {
    title: "ender's game",
    author: "Orson Scott Card",
    pages: 324
}

console.log(book.title,book.pages);



book.pages += 50
console.log(book.pages);


// let movie = {
//     title: "dune",
//     author: "Frank Herbert",
//     mins: 2.50 "hours"
// }



// console.log(move.title,);




let animal = {
    species: "felines",
    sound: "mew",
    isWild: true
}
console.log(animal);
console.log(animal.species,animal.sound);

animal.isWild = "false"

console.log(animal.isWild);


///// HW 6-10




let car = {
    make: "skoda",
    model: "octavia",
    year: 1030,
    print: function(){
        console.log(`key1 - ${this.make} key2 - ${this.model} key3 - ${this.year}`);
    }

}

car.year = 2024
car.color = "orange"

let carLoop object.keys(car)




