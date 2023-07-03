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

//======================================================================
console.log('7 ========================================================================')

//(7)..............Setup:
// Create a cookie object called cookie, that has different ingredient 
// parameters and their amounts, such as flour: "2 cups", or flour: "250 grams"
//.................Problem:
// Create a function called objLength that takes in your object as a parameter 
// and returns the length of the object. In other words,
// it returns the number of elements in an object.
//.................Allowed tools:
// Loops, if/else, switch, variables, arrays (no array methods),
// functions (you can use arrow functions),
// Math library (Math.floor, Math.ceil, Math.round, Math.random),
// toFixed(), calculations and booleans (+,-,/,*,%, <, <=, >=, >, ===)

let cookie = { // define parameters
    butter:"1 cup",
    sugar:"1 cup",
    eggs: 2,
    vanilla: "2 teaspoons",
    bakingSoda: "1 teaspoons",
    hotWater: "1 teaspoons",
    salt: "0.5 teaspoons",
    flour: "3 cups"
}

function objLength(object){ // define unction
    i=0
    for (key in object){
	i++ //instead of printing out all the parameters (as we learned in class) just add to i how many there are
    } return i //return the answer
}

console.log(objLength(cookie))

//======================================================================
console.log('8 ========================================================================')

//(8).............Setup:
// Use the following array of objects in this question:

let bookshelf = [
    { title: "The Animator's Survival Kit",
      author: "Richard Williams",
      rating: 2.7,
      read: true
    },
    { title: "Electronics All-in-one",
      author: "Doug Lowe",
      rating: 4.2,
      read: false
    },
    { title: "The Calvin and Hobbs Lazy Sunday Book",
      author: "Bill Watterson",
      rating: 8.7,
      read: true
    },
    { title: "The Count of Monte Cristo",
      author: "Alexander Dumas",
      rating: 3.9,
      read: true
    },
    { title: "Lore Olympus: Volume 4",
      author: "Rachel Smythe",
      rating: 6.7,
      read: false
    },
]

//...............Problem:
// Write a function worthReading, which returns a string that has the reading status of each book.
// If a book is NOT yet read, and has a rating under 5, then tell the person to skip it.

//.................Allowed tools:
// Loops, if/else, switch, variables, arrays (no array methods),
// functions (you can use arrow functions),
// Math library (Math.floor, Math.ceil, Math.round, Math.random),
// toFixed(), calculations and booleans (+,-,/,*,%, <, <=, >=, >, ===)

function worthReading (arrBooks){//define the function
    let book = "" //define varible to save every object temporary 
    let title = [] //define an empty array for titles
    let author = [] //define an empty array for author
    let rating = [] //define an empty array for rating
    let read = [] //define an empty array for read
    for (let i = 0; i < arrBooks.length; i++) {
        book = arrBooks[i]
        title.push(book.title) //saving titles
        author.push(book.author) //saving names
        rating.push(book.rating) //saving rating
        read.push(book.read) //saving is read
    }
    let answ = ''// define the answer
    for (let i = 0; i < title.length; i++) {
        // let answ = ''
        if (read[i] == true){ //save if the book has been read
            answ += `${title[i]} by ${author[i]} has already been read.\n`
        }else if (rating[i] > 5){ //save if the book has not been read
            answ += `${title[i]} by ${author[i]} has not been read.\n`
        }else if (rating[i] < 5){ //save if the book should be skipped
            answ += `${title[i]} by ${author[i]} should be skipped.\n`
        }
    }
    return answ //return the answer
}

console.log(worthReading(bookshelf))


//======================================================================
console.log('9 ========================================================================')

//(9)..........Setup:
// Use the following object for this question:

let ikeaCouch = {
    esseboda: 1499.00,
    morabo: 1399.00,
    applaryd: 1890.00,
    soderhamn: 900.00,
    stockholm: 2690.00,
    jatterbo: 150.00,
    friheten: 1098.00
}

//.............Problem:
// You go to Ikea to replace your couch, and try to find the most expensive one there,
// as you have high end tastes. You write down the name of each couch and its 
// price in the object above.
// Create a function called mostExpensive that gets the name of the couch with the highest
// price and returns "The most expensive one is the {name of couch}".

//.................Allowed tools:
// Loops, if/else, switch, variables, arrays (no array methods),
// functions (you can use arrow functions),
// Math library (Math.floor, Math.ceil, Math.round, Math.random),
// toFixed(), calculations and booleans (+,-,/,*,%, <, <=, >=, >, ===)


function mostExpensive(couch){ // define unction
    let price = ''//define varible to save every object price temporary 
    let name = ''//define varible to save every object name temporary 
    for (key in couch){
        if (couch[key] > price){
            price = couch[key] //save the price if is >
            name = key //save the name if is >
        }
    }
    let ans = `"The most expensive one is the ${name}".`
    return ans //return the answer
}

console.log(mostExpensive(ikeaCouch))




