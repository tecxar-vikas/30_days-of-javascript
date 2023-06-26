
document.getElementById("update").style.display = "none"


// let localsetdata = localStorage.setItem("task", arr)

let localgetdata = localStorage.getItem("user")

const localstoragedata = JSON.parse(localgetdata)
if (localgetdata) {
    localstoragedata.forEach((items, index) => {
        let row = table.insertRow()
        row.insertCell(0).innerHTML = index + 1
        row.insertCell(1).innerHTML = items.task
        row.insertCell(2).innerHTML = items.status
        row.insertCell(3).innerHTML = items.date
        row.insertCell(4).innerHTML = `<button class="btn btn-warning me-2" onClick="edit(this)">Edit</button><button class="btn btn-danger mt-2 mt-md-0" onClick="delet(this)">Delet</button>`
    })
}


// console.log(localgetdata)

function adddata() {
    let validation = validatinfun()
    if (validation == true) {
        let domvalue = getinputvalue()

        setlocalstoragevalue(domvalue)

        rowinsert(domvalue)
        reset()
    }


}
// check the validation 
function validatinfun() {
    let validate = true
    let task = document.getElementById("task").value
    let status = document.getElementById("status").value


    if (task == "") {
        validate = false
        alert("Enter Your Task")
    }
    else if (status == "") {
        validate = false
        alert("Select Status")
    }
    return validate
}

//reset  fild 
function reset() {
    document.getElementById("task").value = ""
    document.getElementById("status").value = ""
}
//get input data
function getinputvalue() {
    let task = document.getElementById("task").value
    let status = document.getElementById("status").value

    let arr = [task, status]
    return arr

}

//local storage setvalue

function setlocalstoragevalue(domvalue) {

    let localgetdata = localStorage.getItem("user")

    const localstoragedata1 = JSON.parse(localgetdata)
    let inputdata;

    if (localstoragedata1 == null) {
        inputdata = []

    } else {
        inputdata = [...localstoragedata1]
    }

    let obj = { task: domvalue[0], status: domvalue[1], date: new Date().toDateString() }
    inputdata.push(obj)

    localStorage.setItem("user", JSON.stringify(inputdata))

}

//dom added data

function rowinsert(domvalue) {
    let localgetdata = localStorage.getItem("user")

    const localstoragedata1 = JSON.parse(localgetdata)

    let row = table.insertRow()
    row.insertCell(0).innerHTML = localstoragedata1.length
    row.insertCell(1).innerHTML = domvalue[0]
    row.insertCell(2).innerHTML = domvalue[1]
    row.insertCell(3).innerHTML = new Date().toDateString()
    row.insertCell(4).innerHTML = `<button class="btn btn-warning me-2" onClick="edit(this)">Edit</button><button class="btn btn-danger mt-2 mt-md-0" onClick="delet(this)">Delet</button>`

}
// edit value 

function edit(data) {
    row = data.parentElement.parentElement

    document.getElementById("task").value = row.cells[1].innerHTML
    document.getElementById("status").value = row.cells[2].innerHTML

    document.getElementById("additem").style.display = "none"
    document.getElementById("update").style.display = "block"
}
// Update value 

function update() {
    let a = row.cells[1].innerHTML = document.getElementById("task").value
    let b = row.cells[2].innerHTML = document.getElementById("status").value

    document.getElementById("additem").style.display = "block"
    document.getElementById("update").style.display = "none"

    reset()
    // local storage save data
    let localgetdata = localStorage.getItem("user")
    const localstoragedata1 = JSON.parse(localgetdata)


    let updatedvalue = localstoragedata1.map((item, index) => {
        if (index + 1 == row.cells[0].innerHTML) {
            return { ...item, task: a, status: b }
        }
        return item
    })

    localStorage.setItem("user", JSON.stringify(updatedvalue))
}

function delet(tr) {
    let confirmmassage = confirm("Are you sure")

    let row = tr.parentElement.parentElement
    if (confirmmassage == true) {
        document.getElementById("table").deleteRow(row.rowIndex)

    }

    //local storage save data

    let localgetdata = localStorage.getItem("user")
    const localstoragedata1 = JSON.parse(localgetdata)
    let filter = localstoragedata1.filter((item, index) => {
        return index + 1 != row.cells[0].innerHTML
    })

    localStorage.setItem("user", JSON.stringify(filter))
} 