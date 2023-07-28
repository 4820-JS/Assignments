// console.log("asd")

const apiKey = "9ecb4928913e29d67f1fbbb7b3b11227"

const baseURL = "https://api.themoviedb.org"

const tendingEndpoints = "/3/trending/movie/day"

const keyTrend = "?api_key="


// movies.addEventListener("change", function(){

url = baseURL + tendingEndpoints + keyTrend + apiKey


async function getMovies() {
    let res = await fetch(url)
    let data = await res.json()

    movieData = data.results

    // console.log(movieData)
    for (let i = 0; i < movieData.length; i++) {

        let row = movieTableBody.insertRow(-1)

        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)
        let cell5 = row.insertCell(4)
        let cell6 = row.insertCell(5)

        cell1.innerHTML = `<input type="checkbox" id="${i}"/>`
        // cell2.innerHTML = `<img src="https://image.tmdb.org/t/p/w300/hnzXoDaK346U4ByfvQenu2DZnTg.jpg"/>`
        cell2.innerHTML = `<img src="https://image.tmdb.org/t/p/w300${movieData[i].poster_path}"/>`
        // cell2.innerHTML = movieData[i].poster_path
        cell3.innerHTML = movieData[i].original_title
        // cell4.innerHTML = movieData[i].vote_average
        if (movieData[i].vote_average > 6) {
            cell4.innerHTML = `<select time="time" id="${i}time">
                                <option value="11AM">11AM</option>
                                <option value="3PM">3PM</option>
                                <option value="9PM">9PM</option>
                                </select>`
        } else if (movieData[i].vote_average < 6) {
            cell4.innerHTML = `<select time="time" id="${i}time">
                                <option value="1PM">1PM</option>
                                <option value="4PM">4PM</option>
                                </select>`
        }
        cell5.innerHTML = `<td>$15.98 each</td><input type="number" min="0" value="0" id="${i}adult"/>`
        if (movieData[i].genre_ids.includes(10751) === true) {
            cell6.innerHTML = `<td>$8.98 each</td><input type="number" min="0" value="0" id="${i}child"/>`
        } else {
            cell6.innerHTML = `<input type="texbox" value="0" id="${i}child"disabled/>`
        }

    }
}
getMovies()

let submitButton = document.createElement("button")
submitButton.setAttribute("id", "button")
submitButton.innerHTML = "SUBMIT ORDER"

let main = document.getElementById("movieContainer")
main.appendChild(submitButton)

// button.addEventListener("click", function(){
//     console.log("asd")
//     let card = document.createElement("header")
//     card.setAttribute("id","movieContainer")
//     card.setAttribute("class","card")

//     card.innerHTML = "<h1>asdfas</h1><h2>aegudoo</h2>"


// let maine = document.querySelector("body")
// maine.appendChild(card)

//     }
// )

// button.addEventListener("click", function () {//addEventListener for More Info button

//     let cbs = document.querySelectorAll(`[type="checkbox"]:checked`)//get checkboxes checked
//     // let div = document.createElement('div')//define div and create new element on document

//     console.log(cbs)

//     for (let boxes of cbs) {
//         let index = Number(boxes.id)

//         if (boxes.checked) {
//             let div1 = document.createElement("div")
//             div1.setAttribute("class", "container")
//             div1.setAttribute("id", "container")
//             let mani = document.querySelector("body")
//             mani.appendChild(div1)


//             let div2 = document.createElement("div")
//             div2.setAttribute("class", "card")
//             div2.setAttribute("id", "card")
//             let mani2 = document.getElementById("container")
//             mani2.appendChild(div2)

//             div2.innerHTML = ("<header><h1>sfg</h1></header>")
            
//             let div3 = document.createElement("p")
//             // div3.setAttribute("class", "card")
//             // div3.setAttribute("id", "cardr")
//             let mani3= document.getElementById("card")
//             mani3.appendChild(div3)

//             div3.innerHTML = (index)
//         }
//     }
// })



button.addEventListener("click", function () {//addEventListener for More Info button

    // let ddms = document.querySelectorAll(`[type="checkbox"]:checked`)//get checkboxes checked 
    let cbs = document.querySelectorAll(`[type="checkbox"]:checked`)//get checkboxes checked
    let div = document.createElement('div')//define div and create new element on document

    div.setAttribute("class", "container")//setup attribute class
    div.setAttribute("id", "container")// setup attribute id

    for (let boxes of cbs) {//for to use every checkbox from cbs
        let index = Number(boxes.id)//assign number checkbox to index
        if (boxes.checked) {//
            let divd = document.createElement('div')
            divd.setAttribute("class", "card")

            let name = document.createElement('header')//define name and create new element on document h1 recipe name
            name.innerHTML = ("<h1>SUCCESSFUL BOOKING</h1>")//print out recipe name

            let item1 = ""
            item1 = index+"time"
            let val = document.getElementById(item1).value
            console.log(val)

            let item2 = ""
            item2 = index+"adult"
            let val2 = document.getElementById(item2).value
            console.log(val2)

            let item3 = ""
            item3 = index+"child"
            let val3 = document.getElementById(item3).value
            console.log(val3)

            // let instructions = document.createElement('p')//define instruction and create new element on document p recipe
            // instructions.innerHTML = (  "Your movie showing of "+movieData[index].original_title+" is at "+val+"<br>"+
            //                             "You purchased "+val2+" adult tickets"+"<br>"+
            //                             "and "+val3+" child tickets"+"<br>"+
            //                             "Your total is $"+(val2*15.98+val3*8.98)+"<br>"+
            //                             "Enjoy The Show!"+"<br>")

            let instructions = document.createElement('p')//define instruction and create new element on document p recipe
            instructions.innerHTML = (  "<p>"+"Your movie showing of "+movieData[index].original_title+" is at "+val+"</p>"+"<br>"+
                                        "<p>"+"You purchased "+val2+" adult tickets"+"</p>"+"<br>"+
                                        "<p>"+"and "+val3+" child tickets"+"</p>"+"<br>"+
                                        "<h2>"+"Your total is $"+(val2*15.98+val3*8.98)+"</h2>"+"<br>"+
                                        "<h2>"+"Enjoy The Show!"+"</h2>"+"<br>")
                                        
            div.appendChild(divd)
            divd.appendChild(name)//assign child from div
            divd.appendChild(instructions)//assign child from div
            main.appendChild(div)//assign child from main

        }
    }

})
