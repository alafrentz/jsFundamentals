//FOR LOOP

let newArray = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < newArray.length; i++) //i increases after each iteration; forces the loop to break once i reaches the value of newArray.length
{
    console.log(newArray[i]); //prints the value of the element at index i each iteration
}

//while loop

let newArray = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < newArray.length; i++) //i increases after each iteration; forces the loop to break once i reaches the value of newArray.length
{
    console.log(newArray[i]); //prints the value of the element at index i each iteration
}

let long = [1,2,3,4,5,6,7,8,9,10];
//starts at 1
console.log(long.length)

let colors= ['blue', 'green', 'yellow', 'red', 'orange', 'purple']

colors.forEach( f => {console.log(f)})

console.log(colors.length)
console.log(colors.toString())

let colors= ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
console.log( colors instanceof Array)