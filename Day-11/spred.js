let arr = [[1, 2], [3, 4], [5, 6]]


for (let [a, b] of arr) {
    console.log(a, b)
}



let name = ["apple", "banana", "mango", "lamone"]
let newName = [...name]
name[1] = 22
console.log(newName)
console.log(name)

// let pattern = 'love'
// let regEx = new RegExp(pattern)
// console.log(regEx)

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

console.log(regEx)


const str = 'I love JavaScript'
const pattern1 = /love/g
const result = str.search(pattern1)
console.log(result)

console.log("my name is vikas ")
console.warn("my name is vikas")
console.error("my name is vikas")
console.table([1, 2, 3, 354, 556, 6, 7, 778, 4])