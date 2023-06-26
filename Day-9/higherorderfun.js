// Higher order function

//Map function

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(8))



// let i=0;

// function hello(){
//     console.log(`hello world ${i}`)
//     i++
// }

// setInterval(hello,1000)


// const time = () => {
//     console.log("hello time start")
// }

// setTimeout(time, 3000)


const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 7, 767, 6, 4]


let newarr = arr.map(function (element) {
    return element * 2
})
console.log(newarr)


// Filter Function

//Filter countries containing land
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesContainingLand = countries.filter((country) => {
    return country.includes('land')
}
)
console.log(countriesContainingLand)


const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users)

let number=[1,2,3,4,5,6]

console.log(number.some((arg)=>arg ==5))