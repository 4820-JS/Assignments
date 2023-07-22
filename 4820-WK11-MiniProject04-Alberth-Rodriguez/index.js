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

function insertTablaHeaders() {//function to create table header

    let headersArr = ["Meal Name", "Meal Type", "Meal Origin", "Select"]//new array to save 4 headers table
    let table = document.createElement("table")//define table and create new element on document

    // let divt = document.createElement("div")
    // divt.setAttribute("class","container")

    table.setAttribute("id", "mealTable")// setup attribute id
    table.setAttribute("class", "card") // setup attribute class

    let headerRow = document.createElement("tr")//define row and create new element on document tr
    for (let headerText of headersArr) {//for to use every header
        let headerCell = document.createElement("th")//define cell and create new element on document th

        headerCell.textContent = headerText//assign title to cell
        headerRow.appendChild(headerCell)//assign appendChild
    }
    table.appendChild(headerRow)//assign appendChild
    // divt.appendChild(headerRow)

    let rootElement = document.getElementById("root")//define father
    let searchButton = document.getElementById("findItem")//define child

    rootElement.insertBefore(table, searchButton.nextSibling)//assign position
}

insertTablaHeaders()//calling function to print out the header table


//====================Search Button==============================

findItem.addEventListener("click", function () {//addEventListener for Search button
    
    document.getElementById("mealTable").remove()//remove table this is to clean the table if we are doing a second search in a row
    insertTablaHeaders()// print out the new header for the new search

    if (document.getElementById("recipe") !== null) {//if the element recipe is on the document 
        document.getElementById("recipe").remove()//remove it
    }
    else {
        if (document.getElementById("moreInfo") !== null){//if the element moreInfo (button More Info) is on the document
            document.getElementById("moreInfo").remove()//Remove it
        }
    }

    let infoBtn = document.createElement("button")//define button and create new element on document

    infoBtn.setAttribute("id", "moreInfo")//setup attribute id
    infoBtn.innerHTML = "More Info"//assign button name

    let main = document.querySelector("body")//define main and create new element on document
    main.appendChild(infoBtn)//assign child

    let val = document.getElementById("searchItem").value//get the user input

    let url = ""//define empty variable
    if (document.getElementById("searchLetter").checked) {//if searchLetter is checked
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=`//use this url
    } else if (document.getElementById("searchName").checked) {//if searchName is checked
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`//use this url
    }

    let mealArr = []// make an empty array ot put the data form API 

//====================Print out table==============================

    async function getMeals() {//new function to print the selected data from mealArr
        let response = await fetch(url + val)//use the API
        let data = await response.json()//assign the response API to data

        let div = document.createElement('tbody')//define div and create new element on document
        div.setAttribute("class", "tbody")//setup attribute class

        mealArr = data//assign data to the empty array

        for (let i = 0; i < Object.keys(mealArr.meals).length; i++){//for loop to print data
            let row = mealTable.insertRow()//1st row
            let cell1 = row.insertCell(0)//cell1 Meal Name
            let cell2 = row.insertCell(1)//cell2 Meal Type
            let cell3 = row.insertCell(2)//cell3 Meal Origin
            let cell4 = row.insertCell(3)//cell4 Select

            cell1.innerHTML = mealArr.meals[i].strMeal//assign value strMeal
            cell2.innerHTML = mealArr.meals[i].strCategory//assign value strCategory
            cell3.innerHTML = mealArr.meals[i].strArea//assign value strArea
            cell4.innerHTML = `<input type="checkbox" id="${i}"/>`//assign value checkbox
        }
    }

    getMeals()//call the function to print the table

    document.getElementById("moreInfo").onclick = function () {//function for More Info button
        document.getElementById("moreInfo").remove()//remove mor info button
    }

//====================More Info Button==============================

    moreInfo.addEventListener("click", function () {//addEventListener for More Info button

        let cbs = document.querySelectorAll(`[type="checkbox"]:checked`)//get checkboxes checked
        let div = document.createElement('div')//define div and create new element on document

        div.setAttribute("class", "container")//setup attribute class
        div.setAttribute("id", "recipe")// setup attribute id

        for (let boxes of cbs) {//for to use every checkbox from cbs
            let index = Number(boxes.id)//assign number checkbox to index
            if (boxes.checked) {//
                let divd = document.createElement('div')
                divd.setAttribute("class", "card")

                let name = document.createElement('h1')//define name and create new element on document h1 recipe name
                // name.setAttribute("class", "card")
                name.innerHTML = mealArr.meals[index].strMeal//print out recipe name

                let instructions = document.createElement('p')//define instruction and create new element on document p recipe
                // instructions.setAttribute("class", "card")
                instructions.innerHTML = mealArr.meals[index].strInstructions//print out recipe or instructions

                div.appendChild(divd)
                divd.appendChild(name)//assign child from div
                divd.appendChild(instructions)//assign child from div
                main.appendChild(div)//assign child from main

            }
        }

    })
    searchItem.value= ``//clean input searchItem
})
