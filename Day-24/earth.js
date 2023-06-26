


const calculate = () => {
    let mass = document.getElementById("mass").value
    let select = document.getElementById("select").value

    if (mass != "" && select != '') {
        let Weight = Math.floor(mass * 9.8) + " " + "N"


        let weightresult = document.querySelector('#bold')

        weightresult.innerHTML = `Weight of Object on  ${select}  : ${Weight}`

        let image = document.querySelector('img')
        image.setAttribute("src", `image/${select}.jpg`)

        let massage = document.querySelector('.error')

        let errormassage = massage.innerHTML = ""
         document.getElementById("mass").value=""
    } else {
        let massage = document.querySelector('.error')

        let errormassage = massage.innerHTML = "All field is required"
    }

}