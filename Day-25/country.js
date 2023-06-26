function populationdata() {
    document.getElementById('headline').innerHTML = "10 Most populatade country in the World"

    async function data() {

        let res = await fetch("https://restcountries.com/v2/all")
        let data = await res.json()

        let value = data.map((items) => {

            return {
                name: items.name,
                population: items.population
            }
        }).sort((a, b) => b.population - a.population)
            .slice(0, 10)


        document.getElementById('table').innerHTML = ""
        let table = document.getElementById('table')

        value.forEach((items) => {
            let row = table.insertRow()
            row.insertCell(0).innerHTML = items.name
            row.insertCell(1).innerHTML = items.population
        })

    }
    data()
}


function languagedata() {
    document.getElementById('headline').innerHTML = "10 Most spocken language in the World"
    async function data() {
        let res = await fetch("https://restcountries.com/v2/all")
        let data = await res.json()
        let language = data.map((items) => {
            return items.languages
        })
        let languagedata = language.map((items) => {

            return items.map((items) => {
                return items.name
            })

        })
        const flatdata = languagedata.flat()
        let Objectdata = {}
        // console.log(flatdata)
        flatdata.forEach((items) => {
            Objectdata[items] = (Objectdata[items] || 0) + 1

        })
        // console.log(Objectdata);
        const arr = []
        for (let key in Objectdata) {
            arr.push([key, Objectdata[key]]);
        }

        const sortingdata = arr.sort((a, b) => b[1] - a[1]).slice(0, 10)
        // console.log(sortingdata);


        document.getElementById('table').innerHTML = ""
        let table = document.getElementById('table')

        sortingdata.forEach((items) => {
            let row = table.insertRow()
            row.insertCell(0).innerHTML = items[0]
            row.insertCell(1).innerHTML = items[1]
        })


    }
    data()
}