
// objects
// iterating objects
// displaying in html

// complex data structures
// array of objects
// displaying in html

// codepen demos:

// arrays: https://codepen.io/jacobtran/pen/VwzpqdW
// objects: https://codepen.io/jacobtran/pen/BadWvqO
// array of objects: https://codepen.io/jacobtran/pen/QWMpzeR
// creating array of objects: https://codepen.io/jacobtran/pen/qBXrgWj?editors=1010

let opt1 = document.createElement("option")// Define a new element
opt1.innerHTML = "WMDD 4811"// Set what the user will see on the screen
opt1.value = "4811"//Set the value if the user select this option  

let opt2 = document.createElement("option")// Define a new element
opt2.innerHTML = "WMDD 4800"//Set what the user will see on the screen
opt2.value = "4800"//Set the value if the user select this option  

// course.add(opt1)//whit this we will Add opt1 as the las option of the "course" element
course.prepend(opt1)//Add opt1 as the first option of the "course" element
course.prepend(opt2)//Add opt1 as the second option of the "course" element




let studentArr = []//define an array to save student data
let studentObj = []//define an object to save student information
addData.addEventListener("click", function (e) {// Create a click event listener to the "addData" element
	e.preventDefault()//Whit this we can prevent the default behavior 
	if (studentGrade.value >= 0 && studentGrade.value <= 100) {// Check if the grade is correct between 0 and 100
		studentObj = {
			course: course.value, //Assign the course value to the "course" property of studentObj
			name: studentName.value,//Assign the studentName value to the "name" property of studentObj
			id: studentID.value, //Assign the studentID value to the "id" property of studentObj
			grade: studentGrade.value//Assign the studentGrade value to the "grade" property of studentObj
		}

		studentArr.push(studentObj)// Add studentObj to the studentArr array

		if (studentArr.length == 1) {//if is the first time print out this 
			for (let i = 0; i < studentArr.length; i++) {
				let row = content.insertRow(0)//insert a new row

				let cell1 = row.insertCell(0)//inserta a new cell
				let cell2 = row.insertCell(1)//inserta a new cell
				let cell3 = row.insertCell(2)//inserta a new cell
				let cell4 = row.insertCell(3)//inserta a new cell

				cell1.innerHTML = `WMDD ${studentArr[i].course}`//print out the value course
				cell2.innerHTML = studentArr[i].name//print out the value name
				cell3.innerHTML = studentArr[i].id//print out the value id
				cell4.innerHTML = `${studentArr[i].grade}%`//print out the value grade
			}
		} else if (studentArr.length > 1) { // if is not the first time do this
			let row = content.insertRow(0)//insert a new row

			let cell1 = row.insertCell(0)//inserta a new cell
			let cell2 = row.insertCell(1)//inserta a new cell
			let cell3 = row.insertCell(2)//inserta a new cell
			let cell4 = row.insertCell(3)//inserta a new cell

			cell1.innerHTML = `WMDD ${studentArr[studentArr.length - 1].course}`//print out the value course
			cell2.innerHTML = studentArr[studentArr.length - 1].name//print out the value name
			cell3.innerHTML = studentArr[studentArr.length - 1].id//print out the value id
			cell4.innerHTML = `${studentArr[studentArr.length - 1].grade}%`//print out the value grade
		}
	} else { alert("Grade must be betwen 0 and 100") }// Display an alert if the grade is not within the valid range (0-100)
}
)

