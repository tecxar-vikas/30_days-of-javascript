const addData = () => {
    let validation = validationinput()
    if (validation == true) {
        let useradata = getdata()
        inset(useradata)
        cleardata()
        document.getElementById('error').innerHTML = ""
    } else {
        document.getElementById('error').innerHTML = "All fild is required"
    }


}

function validationinput() {
    let value = true
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let country = document.getElementById('country').value
    let score = document.getElementById('score').value
    if (!firstName || !lastName || !country || !score) {
        value = false
    }
    return value
}

// Cleare input fild value
function cleardata() {
    document.getElementById('firstName').value = ""
    document.getElementById('lastName').value = ""
    document.getElementById('country').value = ""
    document.getElementById('score').value = ""

}

//collact data in inputFild

function getdata() {
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let country = document.getElementById('country').value
    let score = document.getElementById('score').value
    let arr = [firstName, lastName, country, score]
    return arr
}

// insertdat in table row
function inset(useradata) {
    let row = table.insertRow() 

    row.insertCell(0).innerHTML = useradata[0]
    row.insertCell(1).innerHTML = useradata[1]
    row.insertCell(2).innerHTML = useradata[2]
    row.insertCell(3).innerHTML = useradata[3]
    row.insertCell(4).innerHTML = `<button class="btn btn-light border rounded-5 me-2" onClick="remove(this)">Delet</button><button class="btn btn-light border rounded-5 me-2" onClick="addscore(this)"> + </button><button class="btn btn-light border rounded-5 me-2" onClick="removescore(this)"> - </button>`

}

function addscore(data) {

    let row = data.parentElement.parentElement;
    let count = row.cells[3]

    count.innerHTML = + count.innerHTML + 5
}
function removescore(data) {
    let row = data.parentElement.parentElement;
    let count = row.cells[3]

    count.innerHTML = + count.innerHTML - 5
}

//remove line in table 

function remove(td) {
    let row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex)
}