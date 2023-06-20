console.log ("test")
//======================================================================
//(1). In your own words, explain the difference between a selection and an event listener.

//Selection is the process we use to identifying element on HTML by `id`, `class`, `tag` etc.
//An event listener allow us to set up an event if something happen like a `click`, `keydown`, `mouseover` etc.

//======================================================================

//(2). What are two ways to round up a decimal number to an integer?

//We can use the function "Math.ceil( )" or the operator "|" and add 1.

//let num =  3.535736

// console.log (Math.ceil(num))
// console.log ((num | 0)+1)

//======================================================================

//(3). What does .toFixed() do, what do you put in the brackets, and does it round up or down?

//The function ".toFixed( )" round up the number with the amount of decimals we put on the brackets.

// console.log (num.toFixed(3))

//======================================================================

//(4). What datatype do we get from an input box when we use .value?

//We will receive a value with a String datatype

//======================================================================

//(5). Using the HTML code below, create a currency converter, to change Canadian dollars to British pounds or vice versa, depending on which button is clicked . Output to the UI (webpage) a message that says the original amount, and the changed amount. 
//Answer

// //create an event to attach an event handler to the bottom
// cadBtn.addEventListener("click", function(e){
//     e.preventDefault() //Prevents the default form submission behavior
//     if(amount.value.length > 0){//Check if the box is NOT empty
//         let value = Number(amount.value) / 0.59//Calculate the equivalent value
//         if (isNaN(value)){//Check if the box is NOT a number
//             outputArea.innerHTML = `Not a Number`//message
//             amount.value = ``//empty the box
//         }else{//If the value in the box is a number 
//         outputArea.innerHTML = amount.value + ` British pound(s) = ` + value.toFixed(2) + ` Canadian dollar(s)`//message
//         amount.value = ``//empty the box
//         }
//     }else{//If the box is empty
//         outputArea.innerHTML = `Type some amount`//message
//     }
// })

// //create an event to attach an event handler to the bottom
// gbpBtn.addEventListener("click", function(e){
//     e.preventDefault() //Prevents the default form submission behavior
//     if(amount.value.length > 0){//Check if the box is NOT empty
//         let value = Number(amount.value)*0.59 //Calculate the equivalent value
//         if (isNaN(value)){//Check if the box is NOT a number
//             outputArea.innerHTML = `Not a Number`//message
//             amount.value = ``//empty the box
//         }else{//If the value in the box is a number
//         outputArea.innerHTML = amount.value + ` Canadian dollar(s) = ` + value.toFixed(2) + ` British pound(s)`//message
//         amount.value = ``//empty the box
//         }
//     }else{//If the box is empty
//         outputArea.innerHTML = `Type some amount`//message
//     }
// })

//======================================================================

//(6). Using the HTML below, write code that allows the user to add flower types to a bouquet, and output a list to the UI. The flower types cannot repeat.

// let flowArr = [] // Array to storage al flowers
// let flowArr2 = [] //Array to storage all flowers with no repetition
// //create an event to attach an event handler to the bottom
// submitBtn.addEventListener("click", function(e){
//     e.preventDefault()//Prevents the default form submission behavior
    
//     if(flowerName.value.length > 0 ){//Check if the box is NOT empty
//         let list = ""
//         let flower = flowerName.value.toUpperCase()
//         flowArr.push(flower)//Push the value of the box onto the flowArr
//         flowArr2 = flowArr.filter((flow,j)=>{
//             return flowArr.indexOf(flow) === j;
//           })//Push the value of the box onto the flowArr2 while the value is still NOT there

//         for(let i = 0; i < flowArr2.length; i++){
//             list += `• Flower #${[i+1]}: ${flowArr2[i]}<br>` //Create the output to print out
//         }
//         flowerName.value = ""//empty the box
//         bouquetList.innerHTML = list// Print out
        
//     }else{//If the box is empty
//         bouquetList.innerHTML = `Type some amount`//message
//     }
// })

//======================================================================

//(7). Using the HTML code below, write code that creates a bill splitter for a restaurant. The UI should have an output that breaks down all the information given. Therefore, it needs to include the original bill, the tax amount, the tip amount, the number of people to split the bill between, the total bill with tax and tip added, and finally, the split amount. For example:

//Answer

// //create an event to attach an event handler to the bottom
// submitBtn.addEventListener("click", function(e){
//     e.preventDefault()//Prevents the default form submission behavior
//     if(billAmount.value.length > 0 && taxPercent.value.length > 0 && tipPercent.value.length > 0 && splitAmount.value.length > 0){//Check if the box is NOT empty
//         let bill = Number (billAmount.value)
//         let bill2 = bill / bill// For future alidation

//         let tax = Number (taxPercent.value)
//         let tax2 = tax / tax// For future alidation

//         let tip = Number (tipPercent.value)
//         let tip2 = tip / tip// For future alidation

//         let people = Number (splitAmount.value)
//         let people2 = people / people// For future alidation

//         let fullBill = ``
//         if (bill2 === 1 && tax2 === 1 && tip2 === 1 && people2 === 1) {//Check if the value boxes are a number (This is necessary if we want to return a message)
//             fullBill = `Original bill amount: $${bill}<br> 
//                         Tax amount: $${(bill*(tax/100)).toFixed(2)}<br> 
//                         Tip amount: $${(bill*(tip/100)).toFixed(2)}<br> 
//                         Split between: ${people} people <br> 
//                         Total bill: $${(bill+(bill*(tax/100))+(bill*(tip/100))).toFixed(2)} <br> 
//                         Split total: $${((bill+(bill*(tax/100))+(bill*(tip/100)))/people).toFixed(2)}`//Create the output with the operations
        
//             billOutput.value = ``//empty the box
//             billAmount.value = ``//empty the box
//             taxPercent.value = ``//empty the box
//             tipPercent.value = ``//empty the box
//             splitAmount.value = ``//empty the box
//             billOutput.innerHTML = fullBill//Print out the Bill

//           }else{//If the previous validation fails we can print out a message
//             billOutput.innerHTML = "Must type numbers !!" //message
//             }

//     }else {//if there are an empty box(es)
//         billOutput.innerHTML = "Fill in all the boxes !!"//message
//     }
// })

//======================================================================

//(8). Using the HTML code below, write some code that converts temperature from Celsius to Fahrenheit, or from Fahrenheit to Celsius, depending on the button pressed. You will have to search the conversion formula. 

// fahrConvert.addEventListener("click", function(e){
//         e.preventDefault()
//         if(tempAmount.value.length > 0){
//             if((tempAmount.value+1)/(tempAmount.value+1) ===1){
//             let fahrenheit = ((9/5)*tempAmount.value)+32
//             tempOutput.innerHTML = `${tempAmount.value} °C = ${fahrenheit.toFixed(2)} °F`}
//             else{tempOutput.innerHTML = "Must type a number !!"}
//             tempAmount.value = ``
//         }else{tempOutput.innerHTML = "Fill in the box !!"}
// })
    
// celConvert.addEventListener("click", function(e){
//     e.preventDefault()
//     if(tempAmount.value.length > 0){
//         if((tempAmount.value+1)/(tempAmount.value+1) ===1){
//         let celsius = (5*(tempAmount.value - 32))/9
//         tempOutput.innerHTML = `${tempAmount.value} °F = ${celsius.toFixed(2)} °C`}
//         else{tempOutput.innerHTML = "Must type a number !!"}
//         tempAmount.value = ``
//     }else{tempOutput.innerHTML = "Fill in the box !!"}
// })

