console.log(`test`)

//1. Name the 4 array methods.
//Answer:
// ".filter" filters the elements of an array with a specific condition 
// ".push" adds a new element to the array
// ".pop" removes the last element form array
// ".concat" creates a new array

//2. In your own words, describe the benefits of a for loop over a while loop.
//Answer: You can make a for loop in a single line of code, making it easier to read, with for loop you can control the exit with the 'break' statement.

//3. Let’s say that I have an array named fruitArr, with an unknown number of elements.
// If I run: fruitArr[5]
// And I get the output: undefined
// What does that tell me about the array?
//Answer: It means that the array has less than 5 elements

//4. In your own words, describe the difference between a while and a do…while loop.
//Answer:
//In a while, the condition is evaluated before each iteration. If the condition is initially false, the body is not executed at all.
//In a do...while, body is executed first, and then the condition is evaluated. This guarantees that at least once itaration is executed, even if the condition is false.

//5. Declare an array with 5 different numbers inside it. Use a while loop to find the largest number in the array and print it to the console. HINT: you will need to compare one number to another.
//Answer:

let array5 = [45, 36, 82, 46, 56]
//let array5 = [-45, -36, -82, -46, -56]
let largestNumber = 0
let i = 0

while (i< array5.length){
    if (array5[i]>largestNumber){
        largestNumber = array5[i]
    }
    i++
}
console.log("The largest # is: " + largestNumber)

//6. Declare a variable with a string as a value, that is a word of at least 10 characters. Using a do…while loop, change every second letter to uppercase.
// Example: javascript —-> jAvAsCrIpT
//Answer:

const string1 = 'assignment'
let string2 = ''
let j = 0

do{
    if(j % 2 == 1){
        string2 += string1[j].toUpperCase()
    }else{
        string2 += string1[j]
    }
    j++
}while (j<string1.length)
console.log(string2)

//7. Declare a variable with a positive integer. Using a for loop, write a program that finds the sum of 1 to the number in your variable. I only expect the total sum to the console as the output. 
// Example:
// let num = 5
// Example output:
// 1 + 2 + 3 + 4 + 5 = 15
//Answer:
const num = 5
let sum = 0

for (let x = 1; x <= num; x++){
    sum += x
}
console.log(sum)

//8. Declare an array with at least 8 numbers in it. Delete all the numbers that are divisible by 3. Print the resulting array to the console.
//Answer

const array8 = [12, 64, 63, 29, 20, 39, 30, 93]
let newarray8 = []
let y = 0

do{
    if(array8[y] % 3 === 0){
        newarray8.push(array8[y])
    }
    y++
}while (y<array8.length)
console.log(newarray8)

//9. Declare a variable that contains a string of a sentence. Using a for…of loop, count the number of vowels (a, e, i, o, u) that are in the sentence and print it to the console. HINT: strings ARE arrays.
//Answer:

const sentence = "Alberth Fabian Rodriguez Sotelo"
const vowels = "aeiou"
let sumvowels = 0

for (let z = 0; z <= sentence.length; z++){
    if(vowels.includes(sentence.toLowerCase()[z])){
        sumvowels++
    }
}
console.log(sumvowels)
