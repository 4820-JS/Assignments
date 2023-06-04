console.log(`test`)
//===========================================================================================================

// 1. In your own words, explain the difference between parameters and arguments.
//Answer
//Parameter is the definition of a variable on a function and the argument is the value that the parameter is gonna take in the function:

//=>Defining the function:

// function example(parameter1, parameter2){
//    let answe = parameter1+parameter2
//    console.log(answe)
// }


//=>Calling the function:

// "example(argument1, argument2)"
// example(1,2)
//Output:
// 3

//parameter1 = argument1
//parameter2 = argument2
//===========================================================================================================

// 2. Why would we want to use a return value, using the keyword ‘return’, in a function?
//Answer

//It makes easier to have an available value ready to work within the code.

//===========================================================================================================


// 3. What is meant by “calling a function”?
//Answer

//It means providing the function with the argument(s) (real value(s)) to let the function do the algorithm and provide a final result. 

//===========================================================================================================


// 4. In your own words, explain why we would use a function.
//Answer

//We can use a function when we have to do the same operation or the same process several times, by doing those "mini programs" we can just call them whenever we need as many times we want to.

//mini programs = functions

//===========================================================================================================

//5. Declare a function called coinConvert, which accepts a number, called ‘num’, as a parameter. The value of that number input can be from 1-100. The function returns a string that contains the smallest combination of coins. The coins are: Quarter (25), Dime (10), Nickel (5) and Penny (1).
//Example:
//let cents = 100
// Example output:
// Quarter: 4, Dime: 0, Nickel: 0, Penny: 0
//let cents2 = 46
// Example output:
// Quarter: 25, Dime: 2, Nickel: 0, Penny: 1
//Answer

//Whithout Array

function coinConvert(num){
    let quarter = 25
    let dime = 10
    let nickel = 5
    let penny = 1

    let quarterCoins = 0
    let dimeCoins = 0
    let nickelCoins = 0
    let pennyCoins = 0
    
    if (num < 1 || num > 100){   
        console.log(`Icorrect, the number should be between 1 and 100`)
    }else if (1 < num < 100){
        if (num >= 25){
        quarterCoins = num / quarter
        num = num % quarter
    }if (num >= 10){
        dimeCoins = num / dime
        num = num % dime
    }if  (num >= 5){
        nickelCoins = num / nickel
        num = num % nickel
    }if  (num >= 1){
        pennyCoins = num / penny
        num = num % penny
    }
    const answer51 = ("Quarter: "+Math.floor(quarterCoins)+", Dime: "+Math.floor(dimeCoins)+", Nickel: "+Math.floor(nickelCoins)+", Penny: "+Math.floor(pennyCoins) )
    console.log(answer51)
    console.log("Quarter: ",Math.floor(quarterCoins),", Dime: ",Math.floor(dimeCoins),", Nickel: ",Math.floor(nickelCoins),", Penny: ",Math.floor(pennyCoins) )
}
}
coinConvert(49)

//With Array

function coin_Convert(num){
    let value = [25,10,5,1]
    let coins = [0,0,0,0]
    let i  = 0
    
    if (num < 1 || num > 100){   
        console.log(`Icorrect, the number should be between 1 and 100`)
    }else if (1 < num < 100){
        if (num >= 25){
        coins[i] = num / value[i]
        num = num % value[i]
    }i++
    if (num >= 10){
        coins[i] = num / value[i]
        num = num % value[i]
    }i++
    if  (num >= 5){
        coins[i] = num / value[i]
        num = num % value[i]
    }i++
    if  (num >= 1){
        coins[i] = num / value[i]
        num = num % value[i]
    }
    const answer52 = "Quarter: "+Math.floor(coins[0])+", Dime: "+Math.floor(coins[1])+", Nickel: "+Math.floor(coins[2])+", Penny: "+Math.floor(coins[3])
    console.log(answer52)
    console.log("Quarter: ",Math.floor(coins[0]),", Dime: ",Math.floor(coins[1]),", Nickel: ",Math.floor(coins[2]),", Penny: ",Math.floor(coins[3]))
    }
}
coin_Convert(38)

//===========================================================================================================

//6. Declare a function called planetAge, that has ‘age’ and ‘planet’ as parameters. Code a function that prints to the console the age on a different planet, based on the orbit.
//● Mercury: orbital period 0.24 Earth years
//● Venus: orbital period 0.61 Earth years
//● Earth: orbital period 1.0 Earth years
//● Mars: orbital period 1.88 Earth years
//● Jupiter: orbital period 11.86 Earth years
//● Saturn: orbital period 29.44 Earth years
//● Uranus: orbital period 84.01 Earth years
//● Neptune: orbital period 164.79 Earth years
//Example Output:
//If age is 40 and the planet is Jupiter,
//then 40/11.86 = 3.37
//In the console:
//Your age on Jupiter is 3.37 years old
//Answer

function planetAge (age, planet){
    let orbitalPeriod = [0.24,0.61,1,1.88,11.86,29.44,84.01,164.79]
    let planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"]
    if (planets.includes(planet.toLowerCase()) === true && Math.sign(age) === 1){    
        let index = planets.indexOf(planet.toLowerCase()) 
        let newAge = age/orbitalPeriod[index]
        console.log("Your age on",planet,"is", newAge.toFixed(2), "years old")
    }else if(planets.includes(planet.toLowerCase()) === false){
        console.log("Please enter a correct planet")
    }else if(Math.sign(age) != 1){
        console.log("Please enter a correct age")
    }
}

planetAge(40,"Jupiter")

//===========================================================================================================

//7. Declare a function called numberFilter that takes in an array called ‘names’ as a parameter. The array will have a mixture of non-negative numbers and strings, and returns a new array without the strings.
//Example Output:
//Input array: [1, 345, 89, "Hello", "Howdy", 23, 90, "Hi There"]
//Output array: [1, 345, 89, 23, 90]
//Answer

let names = [1, 345, 89, "Hello", "Howdy", 23, 90, "Hi There"]

function numberFilter (names){
    let names2 = []
    let i = 0
    while (i < names.length){
        if (Math.sign(names[i]) === 1){
            names2.push(names[i])
            i++
        }else{
            i++
        }
    }
    const answer7= "["+names2.join(", ")+"]"
    console.log(answer7)
    console.log("[",names2.join(", "),"]")
}
numberFilter(names)

//===========================================================================================================

//8. Declare a function called stringSort and an array with at least 6 strings of varied length. stringSort returns an array of strings sorted by length in ascending order.
//Example Output:
//Input array: ["How's it going", "Hello", "Greetings", "Hi there", "Hi", "Welcome back"]
//Output array: ["Hi", "Hello", "Hi there", "Greetings", "Welcome back", "How's it going"]
//Answer

let array = ["How's it going", "Hello", "Greetings", "Hi there", "Hi", "Welcome back"]

//With .sort method
function string_Sort (array){
    return array.sort((a,b) => a.length - b.length)
}

console.log(string_Sort(array))

//Without .sort method
function stringSort (array){
    let done = false
    while (done === false){
        done = true
        for(let i = 0 ; i < array.length-1 ; i++){
            if (array[i].length > array[i+1].length){
              let value = array[i]
              array[i] = array[i+1]
              array[i+1] = value
              done = false 
            }
          }
        }
        console.log(array)
    }

stringSort(array)

//===========================================================================================================

//9. A group of students have decided to start a club at Langara. The name of the club will be the first letter of each of their names, sorted in alphabetical order. Declare a function called groupName that has an array as a parameter, and returns the name of the club.
//Example Output:
//Input array: ["Harry", "Newt", "Luna", "Cho"]
//Returned string: "CHLN Club"
//Answer

let clubNames = ["Harry", "Newt", "Luna", "Cho"]

//With .sort and .charAt method
function groupName (clubNames){
    let name = []
    // let names = ""
    for(let j = 0 ; j < clubNames.length ; j++){
        name.push(clubNames[j].charAt(0))
        // names += clubNames[j].charAt(0)
    }
    let name2 = (name.sort())
    let names = ""
    for(let i = 0 ; i < name2.length ; i++){
        // name.push(clubNames[i].charAt(0))
        names += name2[i].charAt(0)
    }
    const answer9 = `"`+names+` Club`+`"`
    console.log(answer9)
    console.log(names,"Club")
}

groupName(clubNames)

//Whithout .charAt Method
function group_Name (clubNames){
    let club = ``
    for (let name of clubNames.sort()){
        club += name[0]
    }const answer9 = `"`+club+` Club2`+`"`
    console.log(answer9)
}
group_Name(clubNames)

//===========================================================================================================

//10. Declare a function named symNum that has a parameter called num, and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
//Example Output: 
//asymNum(7227)
//true 
//symNum(12567)
//false
//Answer

function symNum (nume){
    const num = nume.toString()
    let num2 = []
    for(let i = num.length ; i > 0 ; i--){
        num2.push(num[i-1])
    }
    let num3 = []
    for(let j = 0 ; j < num.length ; j++){
        num3.push(num[j])
    }
    let answ = Boolean
    for(let k =0 ; k < num2.length ; k++){
        if (num2[k] !== num3[k]){
            answ = false
        }else{
            answ = true
        } 
    }console.log(answ)
}

symNum(123)
symNum(121)




