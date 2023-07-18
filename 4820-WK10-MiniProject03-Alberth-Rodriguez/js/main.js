//create a to-do list with checkboxes that the user can check off when a task is finished
//Use an array of objects
//Don't forget to include comments, and delete testing "console.log"s before submitting a zip file.

//*A  https://www.freecodecamp.org/espanol/news/como-formatear-fechas-en-javascript-con-una-linea-de-codigo/

//=================================Arrays to save objects=============================================

let todo = []//original array of objects

let todo2 = [] //array to organize if completed

//=================================Add to List=============================================

addItem.addEventListener("click", function () {//Click event listener to the element with the id "addItem"

    var today = new Date();//get the current date
    var now = today.toLocaleDateString('en-US', { weekday: "short", year: "numeric", month: "short", day: "numeric" });//*A date format
    task = {//object 
        task: document.getElementById('userInput').value,//property task
        added: now,//property added date
        check: false, //property check
        completed: ""//property completed date
    }
    todo.push(task)// add the task object to the todo array

    let cbs = document.querySelectorAll("input")//select all input elements from document
    let just = []//empty array called just
    for (let item of cbs) {//for loop
        if (item.checked) {//if checcked
            just.push(item)//add the item to the just array
            todo[item.id].check = true//update the check parameter
            todo[item.id].completed = today.toLocaleDateString('en-US', { weekday: "short", year: "numeric", month: "short", day: "numeric" });//*A update the update date if checked
        }
    }

    todo2 = todo //create a copy form the original array
    function stringSort(todo2) {//define a function to organize by completed
        let done = false//define false variable
        while (done === false) {//do this while done = false
            done = true
            for (let i = 0; i < todo2.length - 1; i++) {//for loop
                if (todo2[i].completed.length > todo2[i + 1].completed.length) {//if the first objects.compelted its biger than the next one
                    let value = todo2[i]//assign variable value the object
                    todo2[i] = todo2[i + 1]//take the second place
                    todo2[i + 1] = value
                }
            }
        }
    }
    stringSort(todo2)//calling the function

    tableBody.innerHTML = ''//clean the table

    for (let i = 0; i < todo2.length; i++) {//foor loop to print the table

        let row = tableBody.insertRow(i)//insert new row
        row.setAttribute("id", `row${i}`)//set attributes for the new row

        let cell1 = row.insertCell(0)//insert new cell for task
        cell1.setAttribute("id", `task${i}`)//set atributes for task cell
        let cell2 = row.insertCell(1)//insert new cell for added
        cell2.setAttribute("id", `added${i}`)//set atributes for added cell
        let cell3 = row.insertCell(2)//insert new cell for check

        let cell4 = row.insertCell(3)//insert new cell for omplete
        cell4.setAttribute("id", `completed${i}`)//set atributes for complete cell

        cell1.innerHTML = todo2[i].task//assign value to the cell1
        cell2.innerHTML = todo2[i].added//assign value to the cell2
        if (todo2[i].check == true) {
            cell3.innerHTML = `<input type="checkbox" id="${i}" checked>`//assign value to the cell3 if checked
        } else {
            cell3.innerHTML = `<input type="checkbox" id="${i}">`//assign value to the cell3 if not checked
        }
        cell4.innerHTML = todo2[i].completed   //assign value to the cell4
    }
    userInput.value = ""//clean the input box 
})
