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
            cell4.innerHTML = `<select time="time" id="time">
                                <option value="11">11AM</option>
                                <option value="3">3AM</option>
                                <option value="9">9PM</option>
                                </select>`
        } else if (movieData[i].vote_average < 6) {
            cell4.innerHTML = `<select time="time" id="time">
                                <option value="1">1PM</option>
                                <option value="4">4PM</option>
                                </select>`
        }
        cell5.innerHTML = `<td>$15.98 each</td><input type="texbox" id="${i}"/>`
        if(movieData[i].genre_ids.includes(10751)===true){
            cell6.innerHTML = `<td>$8.98 each</td><input type="number" min="0" id="${i}"/>`
        }else {
            cell6.innerHTML = `<input type="texbox" id="${i}"disabled/>`
        }
        
    }
}
getMovies()
// })
