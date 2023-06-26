

// classes Es6 cunstructure 

// class Car {
//     constructor(name, lastname) {
//         this.name = name
//         this.lastname = lastname
//         console.log(this)
//     }
// }

// const car = new Car("vikas", "kateshiya")
// console.log(car)



class Person {
    constructor(
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 25,
        country = 'Finland',
        city = 'Helsinki'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get gettarget() {
        return this.firstName
    }
    set setage(age) {
        this.age += age
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

const person1 = new Person()
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
// console.log(person1.getFullName())

// console.log(person1.gettarget)
// console.log(person2)

person1.setage = 22
// console.log(person1.age)

// console.log(person1)

console.log(Person.showDateTime())



// Object inheritanc 

class Car extends Person {
    someMethode() {
        console.log("hello i am object orianted program")
    }
}

const result = new Car()

result.someMethode()
console.log(result.gettarget)