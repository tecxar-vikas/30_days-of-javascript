

let domelement = document.getElementById('search')
domelement.addEventListener("input", fetchdata)


async function fetchdata() {

    let data = document.getElementById('search').value

    let res = await fetch("https://restcountries.com/v2/all")
    let newval = await res.json()
   console.log(newval)

}