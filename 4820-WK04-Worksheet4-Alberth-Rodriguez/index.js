console.log(`test`)
//===========================================================================================================

// 1. In your own words, explain the difference between parameters and arguments.
//Answer

//===========================================================================================================

// 2. Why would we want to use a return value, using the keyword ‘return’, in a function?
//Answer

//===========================================================================================================


// 3. What is meant by “calling a function”?
//Answer

//===========================================================================================================


// 4. In your own words, explain why we would use a function.
//Answer

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
    console.log(" Quarter: ",Math.floor(quarterCoins),", Dime: ",Math.floor(dimeCoins),", Nickel: ",Math.floor(nickelCoins),", Penny: ",Math.floor(pennyCoins) )
}
}
coinConvert(49)


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

//===========================================================================================================

//7. Declare a function called numberFilter that takes in an array called ‘names’ as a parameter. The array will have a mixture of non-negative numbers and strings, and returns a new array without the strings.
//Example Output:
//Input array: [1, 345, 89, "Hello", "Howdy", 23, 90, "Hi There"]
//Output array: [1, 345, 89, 23, 90]
//Answer

//===========================================================================================================

//8. Declare a function called stringSort and an array with at least 6 strings of varied length. stringSort returns an array of strings sorted by length in ascending order.
//Example Output:
//Input array: ["How's it going", "Hello", "Greetings", "Hi there", "Hi", "Welcome back"]
//Output array: ["Hi", "Hello", "Hi there", "Greetings", "Welcome back", "How's it going"]
//Answer

//===========================================================================================================

//9. A group of students have decided to start a club at Langara. The name of the club will be the first letter of each of their names, sorted in alphabetical order. Declare a function called groupName that has an array as a parameter, and returns the name of the club.
//Example Output:
//Input array: ["Harry", "Newt", "Luna", "Cho"]
//Returned string: "CHLN Club"
//Answer

//===========================================================================================================

//10. Declare a function named symNum that has a parameter called num, and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
//Example Output: 
//asymNum(7227)
//true 
//symNum(12567)
//false
//Answer





