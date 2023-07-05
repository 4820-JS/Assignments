
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

let opt1 = document.createElement("option")
opt1.innerHTML = "WMDD 4811"
opt1.value = "4811"

let opt2 = document.createElement("option")
opt2.innerHTML = "WMDD 4800"
opt2.value = "4800"

// course.add(opt1)
course.prepend(opt1)
course.prepend(opt2)




let studentArr = []
let studentObj = []
addData.addEventListener("click",function(e){
	e.preventDefault()
	// console.log("Click")
	// if (studentObj.length>0){
	if(studentGrade.value >= 0 && studentGrade.value <= 100){
    studentObj={
		course: course.value,
		name: studentName.value,
		id: studentID.value,
		grade: studentGrade.value
	}

	studentArr.push(studentObj)
	// console.log(studentArr)
    // console.log(studentObj)
    // let j = 0

    if (studentArr.length == 1){
// console.log("new")
		for (let i = 0; i < studentArr.length; i++) {
			let row = content.insertRow(0)

			let cell1 = row.insertCell(0)
			let cell2 = row.insertCell(1)
			let cell3 = row.insertCell(2)
			let cell4 = row.insertCell(3)
            
			cell1.innerHTML = `WMDD ${studentArr[i].course}`
			cell2.innerHTML = studentArr[i].name
			cell3.innerHTML = studentArr[i].id
			cell4.innerHTML = `${studentArr[i].grade}%`

            // j++
            // cell1.innerHTML = studentObj[i].course
			// cell2.innerHTML = studentObj[i].name
			// cell3.innerHTML = studentObj[i].id
			// cell4.innerHTML = studentObj[i].grade

		}
    }else if (studentArr.length > 1){
        // console.log(studentArr.length)
        
        // for (j ; j < studentArr.length; j++) {
			let row = content.insertRow(0)

			let cell1 = row.insertCell(0)
			let cell2 = row.insertCell(1)
			let cell3 = row.insertCell(2)
			let cell4 = row.insertCell(3)
            
			cell1.innerHTML = `WMDD ${studentArr[studentArr.length-1].course}`
			cell2.innerHTML = studentArr[studentArr.length-1].name
			cell3.innerHTML = studentArr[studentArr.length-1].id
			cell4.innerHTML = `${studentArr[studentArr.length-1].grade}%`

            // j++
    // }
}
}else{alert("Grade must be betwen 0 and 100")}
}
)

//When you say overwrite you mean the new students that I'm adding or the ones that are already on the html file.