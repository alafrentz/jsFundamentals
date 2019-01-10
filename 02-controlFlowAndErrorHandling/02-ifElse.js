// If ELse Statement

let money = false

if (money) {
    console.log('Starbucks')
} else {
    console.log('Make Coffee')
}

let weather = 75

if (weather < 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket necessary')
}


let myName = Aaron

if (myname = Aaron) {
    console.log('Hello, my name is ' + myName)
    console.log('Hello, my name is' , myName)
    console.log('Hello, my name is ${myName}')
} esle; {
    console.log('Hello, what is your name?')
}


let myName = 'harRy'
let str = 'harRy'

let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
console.log(newStr)

// conditionals

let str = 'SebAstian'
if (str[0] === str[0].toUpperCase()) {
  let firstLetter = str[0] + str.slice(1).toLowerCase()
  console.log(firstLetter)
} else {
  let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  console.log(otherLetters)
}
let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
console.log(newStr)
//let mynameChanged = myname.charAt(3).toLowerCase()
//let myNameChanged2 = myname.charAt(0).toUowerCase()

///Else If Statements

let weather = 40

if (weather > 70){
    console.log('Wear a t-shirt')
} else if (weather <= 70 && weather > 50){
    console.log('Wear a light jacket')
} else {
    console.log('Stay inside')
}



let age = 19

if (age >= 17){
    console.log('You cant do anything')
} else if (age <= 18 && age >= 21){
    console.log('You can vote!')
} else {
    console.log('You can drink')
}






let age = 10
let young = 'Sorry, you\'re too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'

if (age > 0 && age < 120){
if (age >= 25){
    console.log(rent, drink,vote)
}else if (age >=21) {
 console.log( vote, drink)
}else if (age>=18) {
console.log(vote)
} else{
    console.log(young)
    }
}else{
    console.log('Please pick a real human age...dummy')
}


