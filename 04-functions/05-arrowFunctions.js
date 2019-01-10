/////nickname: FAT ARROW FUNCTIOn

function coffee() {
    console.log('Coffee is life!');
}

//NOT >=

let coffee = () => {
console.log('Coffee is cool');
}

coffee();

var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 35);


let fatArrows = (x) => console.log(x);

fatArrows('This is a function, nothing to see')


let score ="win"

function upperCase(big){
    return big.toUpperCase();
}

function lowerCase(small) {
    return small.toLowerCase();
}

console.log(uperCase(score));
console.log(lowerCase(score));

console.log(lowerCase(upperCase(score)))



// FUNCTIONCEPTION
// create two functions
// first - take a string parameter, and captitalize it;
// first - return that string;

// second - string as a parameter, and then lowercase;
// console.log result

// Take the return from the first, and then pass it into the second function.

let score = "Winner";

function upperCase(big) {
  return big.toUpperCase();
}

function lowerCase(small) {
  return small.toLowerCase();
}

console.log( lowerCase( upperCase(score) ) )



