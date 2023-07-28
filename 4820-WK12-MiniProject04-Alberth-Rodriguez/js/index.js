//==============================Define main varibles=================================================

const apiKey = "9ecb4928913e29d67f1fbbb7b3b11227"//define api key
const baseURL = "https://api.themoviedb.org"// define base URL
const tendingEndpoints = "/3/trending/movie/day"//define endpont
const keyTrend = "?api_key="//define key trend

url = baseURL + tendingEndpoints + keyTrend + apiKey//define full URL

//===============Get object and print out all the data on a table=====================================

async function getMovies() {//defines an asynchronous function "getMovies"
    let res = await fetch(url)//waitting for the response
    let data = await res.json()//assign json answer to data variable

    movieData = data.results//assign data arr to moviedata variable

    for (let i = 0; i < movieData.length; i++) {//for loop through the "movieData" array

        let row = movieTableBody.insertRow(-1)//inserts a new row at the end of the movieTableBody

        let cell1 = row.insertCell(0)//Inserts cell 1
        let cell2 = row.insertCell(1)//Inserts cell 2
        let cell3 = row.insertCell(2)//Inserts cell 3
        let cell4 = row.insertCell(3)//Inserts cell 4
        let cell5 = row.insertCell(4)//Inserts cell 5
        let cell6 = row.insertCell(5)//Inserts cell 6

        cell1.innerHTML = `<input type="checkbox" id="${i}"/>`// assign value (checkbox) to cell1
        cell2.innerHTML = `<img src="https://image.tmdb.org/t/p/w300${movieData[i].poster_path}"/>`// assign value (poster) to cell2
        cell3.innerHTML = movieData[i].original_title// assign value (title) to cell3
        if (movieData[i].vote_average > 6) {//if vote average > 6 do 
            cell4.innerHTML = `<select time="time" id="${i}time">
                                <option value="11AM">11AM</option>
                                <option value="3PM">3PM</option>
                                <option value="9PM">9PM</option>
                                </select>`// assign value (time) to cell4
        } else if (movieData[i].vote_average < 6) {//if vote average < 6 do 
            cell4.innerHTML = `<select time="time" id="${i}time">
                                <option value="1PM">1PM</option>
                                <option value="4PM">4PM</option>
                                </select>`// assign value (time) to cell4
        }
        cell5.innerHTML = `<td>$15.98 each</td><input type="number" min="0" value="0" id="${i}adult"/>`// assign value (adult price and box) to cell5
        if (movieData[i].genre_ids.includes(10751) === true) {//if family do
            cell6.innerHTML = `<td>$8.98 each</td><input type="number" min="0" value="0" id="${i}child"/>`// assign value (child price and box) to cell6
        } else {
            cell6.innerHTML = `<input type="texbox" value="0" id="${i}child"disabled/>`// assign value (box disable) to cell6
        }
    }
}
getMovies()//calling the function

//=============================Create button==========================================================

let submitButton = document.createElement("button")//create button 
submitButton.setAttribute("id", "button") // set id attribute
submitButton.innerHTML = "SUBMIT ORDER"// set name

let main = document.getElementById("movieContainer")//define main 
main.appendChild(submitButton)//assign child to main

//=============================addEventListener for new button=========================================

button.addEventListener("click", function () {//addEventListener for SUBMIT ORDER button

    let cbs = document.querySelectorAll(`[type="checkbox"]:checked`)//get checkboxes checked
    let div = document.createElement('div')//define div and create new element on document

    div.setAttribute("class", "container")//setup attribute class
    div.setAttribute("id", "container")// setup attribute id

    for (let boxes of cbs) {//for to use every checkbox from cbs
        let index = Number(boxes.id)//assign number checkbox to index
        if (boxes.checked) {//if checkbox is checked
            let divd = document.createElement('div')//define divv and create new element on document
            divd.setAttribute("class", "card")//setup attribute class

            let name = document.createElement('header')//define name and create new element header on document 
            name.innerHTML = (`<h1 id="h1">SUCCESSFUL BOOKING</h1>`)//print out header

            let item1 = ""//define item1 for time
            item1 = index+"time"//create id
            let val = document.getElementById(item1).value//get value for id item1

            let item2 = ""//define item1 for q adults
            item2 = index+"adult"//create id
            let val2 = document.getElementById(item2).value//get value for id item2

            let item3 = ""//define item1 for children
            item3 = index+"child"//create id
            let val3 = document.getElementById(item3).value//get value for id item3

            let instructions = document.createElement('p')//define instruction and create new element p on document
            instructions.innerHTML = (  "<p>"+"Your movie showing of "+movieData[index].original_title+" is at "+val+"</p>"+"<br>"+
                                        "<p>"+"You purchased "+val2+" adult tickets"+"</p>"+"<br>"+
                                        "<p>"+"and "+val3+" child tickets"+"</p>"+"<br>"+
                                        "<h2>"+"Your total is $"+(val2*15.98+val3*8.98)+"</h2>"+"<br>"+
                                        "<h2>"+"Enjoy The Show!"+"</h2>"+"<br>")//print out full content
                                        
            div.appendChild(divd)//assign child from div
            divd.appendChild(name)//assign child from divd
            divd.appendChild(instructions)//assign child from divd
            main.appendChild(div)//assign child from main

//==================With these two lines, we can remove the white line above the first header card============
//==================I was trying to achieve the same effect as 'margin: 0;' on line 55 in style.css===========
            // var h1 = document.getElementById("h1")
            // h1.setAttribute("style","margin: 0")

        }
    }
})

