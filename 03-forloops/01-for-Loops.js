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