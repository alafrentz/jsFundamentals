/*
What is scope?

JS has both LOCAL and GLOBAL scope

Local = like Indianapolis
Global = like Earth

Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet
*/

var x = 12

function scope() {
  var x = 33
  console.log(x);
}
scope()//33
console.log(x); //12
 

var x = 12

function scope() {
  x = 33 // HERE
  console.log(x);
}

scope() 
console.log(x);









var x =12;

function scope() {
    //Declaration          Initialization
var  x = 33;
    console.log(x);
}

scope();
console.log(x);

// Var vs. Let

var y = 12;


varlet();
console.log(y);

function constTest() {
    const scope = 1;
    if (true)  {
    const scope = 2;
    console.log(scope);
}
console.log(scope);
}

