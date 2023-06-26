
let arr = [12, 3, 4, 5, 6]
// console.log(new Set(arr))
// let name = new Set(arr)
// console.log(name)

const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size)
console.log(companies)

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)


// const car = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let a = new Set(car)
// a.delete(1)
// a.clear()
// console.log(a.has(5))
// console.log(a)