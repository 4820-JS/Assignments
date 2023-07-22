// Create a recipe box app, where the user can search by first letter or by meal name. 
// The data will come from an api call from the website https://www.themealdb.com/api.php

// Please visit the website and try different searches beforehand. 

// When the user presses the search button, the data from the api is put into a table. Please refer
// to the screenshots. 

// If the checkboxes are selected, and the user presses the "more info" button, then the cooking
// instructions appear below the table, and the button disappears. 

// As always, you must include comments to recieve marks on this assignment. No comments = no marks.
// You are NOT allowed to modify the CSS or HTML file.
// You are NOT allowed to use concepts that we have not covered in class. If you need clarification,
// please message me. 

//====================Insert Table Headers==============================

function insertTablaHeaders() {
    let headersArr =["Meal Name", "Meal Type", "Meal Origin", "Select"];


    let table = document.createElement("table");
    table.setAttribute("id", "mealTable"); // Agregar el atributo id a la tabla
    table.setAttribute("class","card")

    let headerRow = document.createElement("tr");
    for (let headerText of headersArr) {
        let headerCell = document.createElement("th");
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    let rootElement = document.getElementById("root");
    let searchButton = document.getElementById("findItem");
    rootElement.insertBefore(table, searchButton.nextSibling);
}

insertTablaHeaders();


//====================Search Button==============================

let k=0
findItem.addEventListener("click", function(){
    // e.preventDefault()
    // reaload the page like f5
    // findItem.addEventListener('click', _ => {
    //         location.reload();
    //     })
    // let element = document.getElementById("mealTable");
    // element.remove(); 
    document.getElementById("mealTable").remove();//remove table
    insertTablaHeaders();

    if (document.getElementById("recipe") !== null) {
        document.getElementById("recipe").remove()
    }
    else {
        console.log("The element does not exist");
        if (document.getElementById("moreInfo") !== null) {
            document.getElementById("moreInfo").remove()
        }
        
    }


    // console.log(typeof(document.getElementById("recipe")))
    // if (k>0){
    //     console.log(document.getElementById("recipe"))
    //     document.getElementById("recipe").remove()
    // }
    // insertButton()
    // insertTableHeaders();

    let infoBtn = document.createElement("button")
    infoBtn.setAttribute("id","moreInfo")
    infoBtn.innerHTML = "More Info"
    
    let main = document.querySelector("body")
    main.appendChild(infoBtn)


    // insertButton()

    let val = document.getElementById("searchItem").value
    // console.log(val)

    let url = ""
if(document.getElementById("searchLetter").checked){
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=`
}else if(document.getElementById("searchName").checked){
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
}
console.log(url)

// const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=e"
// const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"

// const url = "https://www.themealdb.com/api/json/v1/1/search.php?f="


// make an empty array ot put the data
let mealArr = []

async function getMeals() {
    let response = await fetch(url+val)
    let data = await response.json()

    mealArr = data
    // let x = data.length

    // console.log(mealArr)
    // console.log(mealArr.length)
    // console.log(Object.keys(mealArr.meals).length)


    for (let i = 0; i < Object.keys(mealArr.meals).length; i++) {
        let row = mealTable.insertRow()
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)

        cell1.innerHTML = mealArr.meals[i].strMeal
        cell2.innerHTML = mealArr.meals[i].strCategory
        cell3.innerHTML = mealArr.meals[i].strArea
        cell4.innerHTML = `<input type="checkbox" id="${i}"/>`
    }
}

getMeals()

document.getElementById("moreInfo").onclick = function() {
    document.getElementById("moreInfo").remove();//remove mor info button
}

moreInfo.addEventListener("click", function(){
    // let cbs = document.querySelectorAll('table [type="checkbox"]:checked')
    let cbs = document.querySelectorAll(`[type="checkbox"]:checked`)
    console.log(cbs)
    let div = document.createElement('div')
    div.setAttribute("class","card")
    div.setAttribute("id","recipe")
    for(let boxes of cbs){
        let index = Number(boxes.id)
        if (boxes.checked){
            console.log(boxes)
            
            // let div = document.createElement('div')
            // div.setAttribute("class","card")
            // div.setAttribute("id","recipe")
            let name = document.createElement('h1')
            name.innerHTML=mealArr.meals[index].strMeal
            let instructions = document.createElement('p')
            instructions.innerHTML= mealArr.meals[index].strInstructions

            div.appendChild(name)
            div.appendChild(instructions)
            main.appendChild(div)
            
        }
    }

})
k++
})
// console.log(mealArr)

// function insertButton(){

// let infoBtn = document.createElement("button")
// infoBtn.setAttribute("id","moreInfo")
// infoBtn.innerHTML = "More Info"

// let main = document.querySelector("body")
// main.appendChild(infoBtn)
// }
// insertButton()

// moreInfo.addEventListener("click", function(){
//     let cbs = document.querySelectorAll("input")
//     for(let boxes of cbs){
//         let index = Number(boxes.id)
//         if (boxes.checked){
//             console.log(boxes)
            
//             let div = document.createElement('div')
//             div.setAttribute("class","descriptionContainer")
//             let text = document.createElement('p')
//             text.innerHTML= mealArr[index].strInstructions

//             div.appendChild(text)
//             main.appendChild(div)
//         }
//     }

// })

















// const url = "https://api.tvmaze.com/shows/1603/episodes"

// //make an empty array ot put the data
// let episodesArr = []


// //get the data by calling the data
// async function getSamuraiEps(){

//     //this line fetches the data
//     let response = await fetch(url)
//     //this line give us 
//     let data = await response.json()
    
//     episodesArr = data
    
//     //console.log(data)

// //format the data
//     for(let i=0 ; i<26; i++){
//         let row = mealTable.insertRow()
//         let cell1=row.insertCell(0)
//         let cell2=row.insertCell(1)
//         let cell3=row.insertCell(2)
//         let cell4=row.insertCell(3)
    
//         cell1.innerHTML = episodesArr[i].name
//         cell2.innerHTML = episodesArr[i].airdate
//         cell3.innerHTML = episodesArr[i].rating.average
//         cell4.innerHTML = `<input type="checkbox" id="${i}"/>`
//     }
// }

// getSamuraiEps()








