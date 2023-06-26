function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumbers()



function sum() {
    let a = 22
    let b = 44
    let total = a + b
    return total
}

let total = sum()
console.log(total)

function square(arg) {
    let number = Math.random() * arg
    return number
}
console.log(square(111))

function myfunction() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];

    }
    return sum
}

console.log(myfunction(1, 2, 3, 4, 5, 6))



const collactSum = (...rest) => {
    sum = 0;
    for (let key of rest) {
        sum += key
    }
    return sum
}

console.log(collactSum(1, 2, 3, 4, 5, 6, 7))



const anonymousFun = function () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}

anonymousFun()

// let arg = ((n) => {
//     return n * n
// })(5)

// console.log(arg)


let arr = ["apple", "banana", ",mango", "chikoo", "orange"]




const myfunc = (arg) => {
    let newarray = []
    for (let key of arg) {
        newarray.push(key.toUpperCase())

    }
    return newarray
}
console.log(myfunc(arr))



const record = (para1, para2 = 2020) => {
    return para2 - para1
}

console.log(record(2010, 2022))



const area = (r) => {
    let pi = 3.14
    return pi * r * r
}
console.log(area(5))



const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

console.log(countries)

const uppercaseFun = (arg) => {
    const arr = []
    for (let key of arg) {
        arr.push(key.toUpperCase())
    }
    return arr
}

console.log(uppercaseFun(countries))


//convert degree to farenhit 

const convertion = (c) => {
    let faren = (c * 9 / 5) + 32
    return faren
}

console.log(convertion(0))

const findMax = (...rest) => {
    let maximum = Math.max(...rest)
    return maximum
}


console.log(findMax(0, 10, 5))

console.log(findMax(0, -10, -2))


const showDate = () => {
    let date = new Date().toLocaleDateString()
    return date
}

console.log(showDate())


const reverseArray = (arg) => {
    let array = arg;
    return array.reverse()
}
console.log(reverseArray([1, 2, 3, 4, 5]))




const evenodd = (arg) => {
    let even = 0
    let odd = 0
    for (let i = 1; i <= arg; i++) {
        if (i % 2 == 0) {
            even += 1
        } else {
            odd += 1
        }
    }

    console.log(`total 100 number of even number is ${even} and odd number is ${odd}`)
}

evenodd(100)



const genRanHex = (size) => {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("")

}

console.log(genRanHex(6));
console.log(genRanHex(6));
console.log(genRanHex(6));



let arr1 = [];
let i = 0
while (arr1.length < 8) {
    var r = Math.floor(Math.random() * 10) + 1;
    if (arr1.indexOf(r) === -1) arr1.push(r);
    i++
}
console.log(arr1);

const bools = [true, true, true,true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) 