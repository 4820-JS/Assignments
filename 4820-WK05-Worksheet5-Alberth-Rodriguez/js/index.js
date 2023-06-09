//This is a dance move application that allows for them to
// be saved in a list form

// You will need an array to save the entries to, and an event listener,
// like we went over in class, to save the entries when a button is clicked

// *** Hint: Look at the HTML IDs on how to select elements.
let danceArr = []
danceList.innerHTML = "<h2>Your Dance Moves:</h2>"


submitBtn.addEventListener("click", function(){
    if(danceInput.value.length > 0){
    let resut = ""
    let inputVal = danceInput.value
    //
    danceArr.push(inputVal)

    for(let i = 0; i < danceArr.length; i++){
        resut += `• Dance move #${[i+1]}: ${danceArr[i]}<br>`
        danceInput.placeholder=`Dance Type #${[i+2]}`
    }
    // danceList.innerHTML = "<h2>Your Dance Moves:</h2>"
    danceList.innerHTML = "<h2>Your Dance Moves:</h2>"+resut
    }
})
