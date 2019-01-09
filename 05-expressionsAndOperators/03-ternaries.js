//Ternaries

let x = 6

if (x > 0) {
    console.log('yes')
} else{
    console.log('no')
}

(x > 0) ? console.log('yes') : console.log('no')


let age = 30
let age = 10
let young = 'Sorry, you\'re too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'


(age >=25) ? console.log('rent,drink,vote') :  (age >=21) ? console.log('drink,vote') :  (age >=18) ? console.log(vote) : console.log(young)

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















