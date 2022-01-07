//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
//brackets allow access to values

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}
console.log('\n\n')
console.log("(1) Printout of all key/value pairs:")
for (f in person3) {
    console.log(` ${f}: ${person3[f]}`);
}
console.log('\n\n')
console.log("(2) Food value keys and arrays separated:")
console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log('\n\n')

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called. Create two people using the 'new' keyword, and print 
both of their infos and increment one persons age by 3 years. Use an arrow function for both methods
*/

// (1) Create the Person Prototype consisting of a (name and age)
// (2) Create the first method that incrememts age by 3 when method is called - .addAge
// (3) Create a a third printInfo method using 'new' keyword - .newAge - accepts one param
// (4) Create the first printInfo method using (=>) that will print out the sentence result of your calculations using an f string
// (5) .newAge method will increase one persons age by 3 years

function superheroaging(name, age) {
    this.name = name;
    this.age = age;

    // JS prototype object can have method
    this.addyears = () => {
        this.age1 = age + 3
        console.log(` ${this.name} is ${this.age} plus 3.`);
    }
    this.newyears = () => {
        this.newAge = this.age + 3
        console.log(`${this.name} is ${this.newAge} years old`)

    }
    this.printInfo = () => {
        console.log(` ${this.name} is ${this.age} years old.`);
    }
}

let batman = new superheroaging('Batman', 80);
let superman = new superheroaging('Superman', 90);

batman.printInfo();
superman.printInfo();
batman.newAge();
superman.newAge();
// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/