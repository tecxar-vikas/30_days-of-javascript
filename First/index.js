let Firstname = document.getElementById("firstName")
let LastName = document.getElementById("lastName")

function submitform() {
    event.preventDefault()

    console.log(Firstname.value, LastName.value)
    Firstname.value = ""
    LastName.value = ""

    console.log(Firstname)
}

const array = [1, 2, 7, 5, 4, 3, 6, 9, 8, 10]
console.log(array)
let arr = array.reverse()
console.log(arr)
console.log(array)





// let car = new Set()
// let name = [1, 1, 2, 3, 5]
// car.add(name)
// car.add("ajay")
// car.forEach((items) => {
//     console.log(items)
// })
// console.log(car)


// for (let i = 1; i <= 10; i++) {
//     let body = document.createElement("h3")
//     body.className = "title"
//     body.style.color = "red"
//     body.style.background = "yellow"

//     body.textContent = i
//     if (i % 2 === 0) {
//         body.style.background = "yellow"
//         body.style.fontSize = "44px"
//     } else {
//         body.style.background = "pink"
//     }
//     document.body.appendChild(body)
// }