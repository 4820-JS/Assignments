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

// cadBtn.addEventListener("click", function(e){
//     e.preventDefault()
//     if(amount.value.length > 0){
//         let value = Number(amount.value) / 0.59
//         // console.log(value)
//         outputArea.innerHTML = amount.value + ` British pound(s) = ` + value.toFixed(2) + ` Canadian dollar(s)`
//     }
    
// })

// gbpBtn.addEventListener("click", function(e){
//     e.preventDefault()
//     if(amount.value.length > 0){
//         let value = Number(amount.value)*0.59
//         // console.log(value)
//         outputArea.innerHTML = amount.value + ` Canadian dollar(s) = ` + value.toFixed(2) + ` British pound(s)`
//     }
    
// })

//======================================================================

//(6). Using the HTML below, write code that allows the user to add flower types to a bouquet, and output a list to the UI. The flower types cannot repeat.

// let flowArr = []
// let flowArr2 = []

// submitBtn.addEventListener("click", function(e){
//     e.preventDefault()
    
//     if(flowerName.value.length > 0 ){
//         let list = ""
//         // let flower = toUpperCase(flowerName.value)
//         let flower = flowerName.value.toUpperCase()
//         flowArr.push(flower)
//         flowArr2 = flowArr.filter((flow,j)=>{
//             return flowArr.indexOf(flow) === j;
//           })

//         // console.log(flowArr)
//         // bouquetList.innerHTML = flowArr

//         for(let i = 0; i < flowArr2.length; i++){
//             list += `• Flower #${[i+1]}: ${flowArr2[i]}<br>`
//         }
//         flowerName.value = ""
//         bouquetList.innerHTML = list
//         // console.log(list)
//         // console.log(flowArr)
//         // console.log(flowArr2)
//     }
// })

//======================================================================

//(7). Using the HTML code below, write code that creates a bill splitter for a restaurant. The UI should have an output that breaks down all the information given. Therefore, it needs to include the original bill, the tax amount, the tip amount, the number of people to split the bill between, the total bill with tax and tip added, and finally, the split amount. For example:

// Original bill amount: $50.00
// Tax amount: $5.00
// Tip amount: $ 10.00
// Split between: 5 people
// Total bill: $65.00
// Split total: $13.00

// let billArr = []

// submitBtn.addEventListener("click", function(e){
//     e.preventDefault()
//     if(billAmount.value.length > 0 && taxPercent.value.length > 0 && tipPercent.value.length > 0 && splitAmount.value.length > 0){
//         let bill = Number (billAmount.value)
//         let bill2 = bill / bill

//         let tax = Number (taxPercent.value)
//         let tax2 = tax / tax

//         let tip = Number (tipPercent.value)
//         let tip2 = tip / tip

//         let people = Number (splitAmount.value)
//         let people2 = people / people

//         let fullBill = ``

//         if (bill2 === 1 && tax2 === 1 && tip2 === 1 && people2 === 1) {
//             fullBill = `Original bill amount: $${bill}<br> 
//                         Tax amount: $${(bill*(tax/100)).toFixed(2)}<br> 
//                         Tip amount: $${(bill*(tip/100)).toFixed(2)}<br> 
//                         Split between: ${people} people <br> 
//                         Total bill: $${(bill+(bill*(tax/100))+(bill*(tip/100))).toFixed(2)} <br> 
//                         Split total: $${((bill+(bill*(tax/100))+(bill*(tip/100)))/people).toFixed(2)}`
        
//             billOutput.value = ``
//             billAmount.value = ``
//             taxPercent.value = ``
//             tipPercent.value = ``
//             splitAmount.value = ``
//             billOutput.innerHTML = fullBill

//           }else{billOutput.innerHTML = "Must type numbers !!"}

//     }else {billOutput.innerHTML = "Fill in all the boxes !!"}
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

//======================================================================



//======================================================================
