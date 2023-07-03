console.log("test")

//(1) In your own words, explain two ways that objects are different from arrays.

//Usage:
// With objects you can model real world you can create an idea and manipulate its attributes.
// Arrays are mainly to save elements.

//Structure: 
// Objects are collections of keys and values organized in pairs like "Key: Value"
// Arrays are collections of elements most of the times of the same data type (string, number, boolean...) but also combined 

//======================================================================

//(2) How do you access a value from an object in coding terms ?

// There are 2 way to access a value object :

// let object = {
//     key1: "A",
//     key2: "B",
//     key3: "C"
// }

// With dot
// object.key1 => A

// With brackets
// object[`key3`] => C

//======================================================================

//(3)What is the purpose of the keyword "this"?, Why do we use it?

//The purpose of the keyword "this" is to allow as to use any key or method within an object 
//so we use "this" to access and manipulate properties and methods within an object

//======================================================================

//(4) Describe in your own words why we would use an object instead of an array.

// Because objects are more flexible and they help us to model more complex data
// that could be associated theo the real world.
// in short word arrays are for simple data and objects for more complex data.

//======================================================================

//(5) There is a common thought that a dog’s age is seven times that of a human age.
console.log('5 ========================================================================')
//............Setup:........................
// Create an array of objects, called dogArr, which has 3 objects inside it.
// Each object will have three parameters: name, breed, and age

//............Problem:........................
// Create a function called dogsAge that takes in an array of objects as a parameter,
// that sums the dogs’ ages, and converts that sum from human years to dog years. 
// The function returns a string that says: 
// “<name1>, <name2>, and <name3>’s combined ages is <converted age> in dog years”

//............Allowed tools:........................
// Loops, if/else, switch, variables, arrays (no array methods),
// functions (you can use arrow functions),
// Math library (Math.floor, Math.ceil, Math.round, Math.random),
// toFixed(), calculations and booleans (+,-,/,*,%, <, <=, >=, >, ===)


let dogArr = [{name:"Cooper", breed:"Boxer",   age:1},
              {name:"Duke",   breed:"PitBull", age:2},
              {name:"Coco",   breed:"Rolo",    age:3}
]//Define Array of objects whit parameters 

function ages(dogObj){//define the function
    let dog = "" //define varible to save every object temporary
    let age = 0 //define varible to save ages 
    let names = [] //define an empty array
    for (let i = 0; i < dogObj.length; i++) {
        dog = dogObj[i]
        age = age + dog.age //saving and adding age
        names.push(dog.name) //saving names
    }
    answ = `"${names[0]}, ${names[1]}, ${names[2]}'s combined ages is ${age*7} in dog years"` //saving the answer
    return answ
}

console.log(ages(dogArr))

//======================================================================
console.log('6 ========================================================================')

//(6).............Problem:
// Create an object for a video rental store. It should have the following parameters
// with values added to make key/value pairs:
// movieName, 
// numberOfCopies,
// numberRented,
// genre,
// isForKids,
// alternateRentalTitles (at least 3).
// The object should have the following methods: rent, return, checkIfAvailable.
// Fill in the methods with code, using the keyword ‘this’ as we learned in class.
// If the movie is not available, there will be a message to the console that offers one 
// of the alternative movies to rent, at random.

//.............Allowed tools:
// Loops, if/else, switch, variables, arrays (no array methods),
// functions (you can use arrow functions),
// Math library (Math.floor, Math.ceil, Math.round, Math.random),
// toFixed(), calculations and booleans (+,-,/,*,%, <, <=, >=, >, ===)

//define the object
let movieStore = { // define parameters
    movieName:"The Black Demon",
    numberOfCopies:3,
    numberRented:1,
    genre:"horror",
    isForKids:false,
    alternateRentalTitles:["Evil Dead Rise","Smile","Malum"],

    rent: function(){ // method to rent a movie
        this.numberRented++
    },
    return: function(){ //method to return a copy
        this.numberRented--
    },
    checkIfAvailable: function(){ //method to check availability
        let availableCopies = this.numberOfCopies - this.numberRented //finding out if therre is an availabel copy
        let randoMovie = this.alternateRentalTitles[Math.floor(Math.random() * this.alternateRentalTitles.length)] //other option
        let answ = ''
        // console.log(availableCopies) // this line of code is to test the availabel copies
        if(availableCopies === 1){
            answ = console.log(`There is ${availableCopies} left`) //print out the amount of copies availabel for a singular answer (is)
        }else if (availableCopies > 1){
            answ = console.log(`There are ${availableCopies} left`) //print out the amount of copies availabel for a plural answer (are)
        }
        else {
            answ = console.log(`There are no copies of this movie you can rent "${randoMovie}".`) //printing out other option if there are no copies available
        }
        return answ //return the answer
    }
}

movieStore.rent()//rent 1 so 1 available
movieStore.return() //returnt 1 so 2 available 
movieStore.return() //returnt 1 so 3 available
movieStore.rent() //rent 1 so 2 available
movieStore.rent() //rent 1 so 1 available
movieStore.rent() //rent 1 so 0 available
movieStore.checkIfAvailable()





