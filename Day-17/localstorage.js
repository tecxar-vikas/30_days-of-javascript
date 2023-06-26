let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)


const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user)
localStorage.setItem('user', userText)
console.log(JSON.parse(localStorage.getItem("user")))