function car() {
    let count = 0
    function box() {
        count++
        return count
    }
    return box
}

let result = car()
console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())


const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}
console.log(hexaColor())