console.log("test");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1. What did we discuss in class were the two keywords we use to declare variables?
//Answer:
//  1. let   => For variables that might change, can re assign the value
//  2. const => For varialbes that won't change, cannot re assign the value
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. What is another keyword used to declare variables that is generally not used?
//Answer:
//  1. var
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. What are the 3 primitive datatypes that we discussed in class?
//Answer:
//  1. Number  => "1,2,3,4...."
//  2. Boolean => "true or false"
//  3. String  => "'Word', 'Hello World!'"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. In your own words, describe why we would use console.log.
//Answer:
//  We use console.log to print out a message or value to the console, we can use it as well as a tool that can let us know what is going on within the code
//  It can be your best friend
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5. What are the three ways to declare a string that we discussed in class?
//Answer:
//  1. Double quotes => "Hello World!"
//  2. Single quotes => 'Hello World!'
//  3. Backticks     => `Hello World!`
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6. In your own words, describe the advantage of using backticks.
//Answer:
//  I can do all the quotations mark that I want to.
//  For example if I type on js console.log(`"Hello World!"`) I will see on the console "Hello World!" with the double quotes.

//  Backticks are useful as well because allow us to code within a string like make a basic math operations like 1+1.
//  For example if I type on js console.log(`Hello World #${2+1}!`) I will see on the console "Hello World #3!".
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7. Declare 5 different variables with values associated with them that run without errors.
//   These should be different in the naming convention: a combination of characters,
//   uppercase, lowercase and spacing, to see what runs.
//Answer:
let LangaraID = 100404984;
const First_Name = `Alberth`;
const full_name = `Alberth Fabian Rodriguez Sotelo`;
let Number = 0.5;
let operation = LangaraID*Number;
/*
console.log(LangaraID);
console.log(First_Name);
console.log(full_name);
console.log(Number);
console.log(operation);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//8. Declare 5 different variables with values associated with them that show an error when it
//   runs. These should be different in the naming convention: a combination of characters,
//   uppercase, lowercase and spacing, to see what runs.
//   a. Copy and paste the error as a comment under your variable.
//   b. Comment out your variable code.
//   c. In your own words describe what information is the error telling you?
//8.1.
//let langara I_D = 100404984;
//Uncaught SyntaxError: Unexpected identifier 'I_D' (at index.js:62:13)   index.js:62
//This error is telling me that in the file index.js there is an error at line 62, character 13.
//8.2.
//let num = 123 45;
//Uncaught SyntaxError: Unexpected number (at index.js:66:15)   index.js:66
//This error is telling me that in the file index.js there is an error at line 66, character 15.
//The value of a variable cannot contain spaces
//8.3.
//const languages = English French;
//Uncaught SyntaxError: Unexpected identifier 'French' (at index.js:71:27)   index.js:71
//This error is telling me that in the file index.js there is an error at line 71, character 27.
//The value of a variable cannot contain spaces.
//8.4.
//let figure = 123abc;
//Uncaught SyntaxError: Invalid or unexpected token (at index.js:76:14)   index.js:76
//This error is telling me that in the file index.js there is an error at line 76, character 14.
//The value of a variable is not valid because contain numbers and letters.
//8.5.
//const word = `";
//Uncaught SyntaxError: Unexpected end of imput (at index.js:81:17)   index.js:81
//This error is telling me that in the file index.js there is an error at line 81, character 17.
//The value of a variable has not been defined or the code is missing the last quotation or backticks in this case.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//9. Declare 3 variables, one of each datatype. Print to the console a string that contains:
//   a. A sentence that runs your 3 variables (it prints out the value of the variable, not the variable name)
//   b. Prints out to the console the double quotation symbol (“) at the beginning and the end of the sentence.
//   c. A sentence that makes sense with your variables, so it is a complete sentence, not just a jumble of random words.

const Name = `Alberth`;
const College = `Langara`;
let ID = 100404984;

console.log(`Name: `,Name,`, College: `,College,`, ID: `,ID)
console.log(`"`,`Name: `,Name,`, College: `,College,`, ID: `,ID,`"`)
console.log(`" Mi name is`,Name,`, I'm currently a student at`,College, `college and mi ID is`, ID,`"`)


