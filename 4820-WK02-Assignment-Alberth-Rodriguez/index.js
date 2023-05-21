console.log("test")

// 1. In your own words, describe what an if/else or switch statement does. Why is it useful?
//Answer: if/else or switch statement are useful for scenarios based on conditions or evaluations. It helps you to control the flow of the program according on conditions or evaluations that you have aready programed. The program will make a decition true or false and will continue with the next line of code.

// 2. In your own words, describe what an array is. I don’t want a technical definition, but instead how it relates to real life.
//Answer: An array is like a variable that can store different values, for example the grades of a group of students : let grades = [3, 5, 6, 9, 2, 10, 4.....];

// 3. What is meant by saying JavaScript is a “Zero counting language”? Why is this important when we use arrays?
//Answer: It means that the first element of an arrays will be the index 0 and the second element will be the index 1 like this: Position [1, 2, 3, 4...] Index [0, 1, 2, 3...]

// 4. Make two variables, one that contains a singular noun and one that contains a number. Using logic gating (if/else or switch statement), print to the console either the plural or singular of that noun. Create 4 pairs of variables to make sure it works. For example:
//Answer:

//4.1 First pair of variables:
let noun1 = "car";
let number1 = 4;

switch (number1) {
  case 1:
    console.log(number1 + " " + noun1);
    break;
  default:
    console.log(number1 + " " + noun1 + "s");
}

//console has the output: "4 cars"

//4.2 Second pair of variables:
let noun2 = "student";
let number2 = 1;

if (number2 === 1) {
  console.log(number2 + " " + noun2);
} else {
  console.log(number2 + " " + noun2 + "s");
}

//console has the output: "1 student"

//4.3 Third pair of variables:
let noun3 = "dolar";
let number3 = 4;

switch (number3) {
  case 1:
    console.log(number3 + " " + noun3);
    break;
  default:
    console.log(number3 + " " + noun3 + "s");
}

//console has the output: "4 dolars"

//4.4 Fourth pair of variables:
let noun4 = "child";
let noun5 = "children";
let number4 = 1;

if (number4 === 1) {
  console.log(number4 + " " + noun4);
} else {
  console.log(number4 + " " + noun5);
}

//console has the output: "1 child"

// 5. In your own words, describe two advantages and two disadvantages to using a Ternary operator.
//Answer:

//Advantages
// It is easy to write and easy to read.
// It can be done in a single line of code, in consequence later on will be easy to understand.
//Disadvantages
// It is limited because allows you to have just one action for the output.
// In a complex condition will be hard to read and understand the code.

// 6. Create an array that contains two numbers. Use a Ternary operator to print to the console the highest number.
//Answer:

let towNumbers = [45, 24];
let highestNumber = (towNumbers[0] < towNumbers[1]) ? towNumbers[1] : towNumbers[0];
console.log("The highest number is => " + highestNumber + ".");


// 7. Create a variable that contains a number from 0-100. Create a switch statement without fall throughs, that assigns a letter grade (A, B, C, D, F) to that percentage. Print out the letter grade to the console. It is NOT necessary to do + or - grades (A+ or A- for example), and you can choose the range for the grade.
//Answer:

let grade = 0;
let letterGrade;

if (0 <= grade && grade <= 100){    
    switch (true) {
        case (grade >= 80 && grade <= 100):
        letterGrade = 'A';
        break;
        case (grade >= 70 && grade < 80):
        letterGrade = 'B';
        break;
        case (grade >= 62 && grade < 70):
        letterGrade = 'C';
        break;
        case (grade >= 51 && grade < 62):
        letterGrade = 'D';
        break;
        default:
        letterGrade = 'F';
    }
    console.log("The letter grade for " + grade + "% "+"is: " + letterGrade);
}else{
    console.log("grade is out of range")
}

// 8. A boardgame company has a kickstarter campaign for their new game Throw Throw Burrito. The more money a customer spends on the campaign, the more items they receive:

// =>$20 or more:
// --1 Throw Throw Burrito - Original Edition

// =>$35 or more:
// --1 Throw Throw Burrito -- Original Edition
// --1 Throw Throw Burrito -- Kickstarter Exclusive Edition

// =>$85 or more:
// --1 Throw Throw Burrito -- Original Edition
// --1 Throw Throw Burrito -- Kickstarter Exclusive Edition
// --1 Throw Throw Burrito -- Waterproof Deck
// --2 Giant Inflatable Throw Throw Burritos (for outdoor play)

// =>$95 or more:
// --1 Throw Throw Burrito -- Original Edition
// --1 Throw Throw Burrito -- Kickstarter Exclusive Edition
// --1 Throw Throw Burrito -- Waterproof Deck
// --2 Giant Inflatable Throw Throw Burritos (for outdoor play)
// --1 Throw Throw Burrito -- Extreme Going Pro Edition
// --1 Throw Throw Burrito Prototype Game Deck (Kickstarter Exclusive)


// Create a switch statement WITH fall throughs, that prints to the console what the customer will receive if they back a certain amount. Create a variable with a dollar amount to test the code.
//Answer:

let money = 95;

console.log("For $" + money + " customer will receive:")

switch(true){
    case (money >= 95): 
        console.log("-> 1 Throw Throw Burrito -- Extreme Going Pro Edition \n-> 1 Throw Throw Burrito Prototype Game Deck (Kickstarter Exclusive)");
    case (money >=85):
        console.log("-> 1 Throw Throw Burrito -- Waterproof Deck \n-> 2 Giant Inflatable Throw Throw Burritos (for outdoor play)");
        // break;
    case (money >=35):
        console.log("-> 1 Throw Throw Burrito -- Kickstarter Exclusive Edition");
        // break;
    case (money >=20):
        console.log("-> 1 Throw Throw Burrito -- Original Edition");
        break;
    default:
        console.log("-> Nothing");
        // break;    
}

// 9. Declare an array that contains at least 6 strings. Look up how to generate a random number in JavaScript. Create a variable that contains a random number from 0 to the length of your array minus 1. Use that random number variable to print a random string from your array to the console.
//Answer:

let arrayStrings = ['Arsenal', 'Liverpool', 'Juventus', 'PSG', 'Real Madrid', 'Barcelona'];
let random = Math.floor(Math.random()*arrayStrings.length)
console.log("Your team is: " + arrayStrings[random])