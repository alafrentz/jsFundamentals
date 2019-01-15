// FOR LOOPS

for(var i = 0; i < 10; i++)  {
    console.log(i)
}

for(var i = 2; i <= 20; i+=2 ) {
    console.log(i)
}

for(let i = 10; i >= 0; i--){
    console.log(i)
}

for(let i = 0; i >=-24; i-=2){
    console.log(i)
}

let word1 = "milk";
let word2 =  word1.split("")
let wordL = word1.length

for(let x = 0; x < wordL; x += 1){
    console.log(word2[x])
}

var str = "name"

for (var i = 0; i < str.length; i++) {
    console.log(str[i])
}

for(var i = 0; i < 51; i+i+1)  {
    console.log(i)
}

var sum = 0;

for (var i = 1; i <= 50; i++) {
    sum += i
}
-
console.log(sum);

//for loop
//Challenge (Arrays):
//Color List:

//Create a function that can take in arrays.
//Create an array of colors
//Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)

//In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.

//Not to make it too hard on yourself, you can stop the count at ten


let colors = ['red','orange','coral','yellow','green','teal','blue','indigo','violet','black']
let suf = ['st','nd','rd','th','th','th','th','th','th','th']
function colorNums(color,sufx){
   for(let x =0; x<10;x++){
       console.log(`${x+1}${sufx[x]} is ${color[x]} `)
   }
}
colorNums(colors,suf);