// let promise = new Promise((resolve, reject) => {
//     resolve("hello everyone")
//     reject("next sumtime")
// })

// promise
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })

const url = 'https://restcountries.com/v2/all'
const apple = async () => {
    const response = await fetch(url)
    return response
}

let value = apple()

value.then((res) => {
    return res.json()
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.error(err)
})


