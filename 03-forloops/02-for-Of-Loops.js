/*****************************************
 FOR OF LOOPS used for interable objects
 *********************/

var student = { name: "Harry", awesome: true, degree:
"javaScript", week: 1 };
for(item of student) {
    console.log(item);
}

// Doesn't work because an object i

var pieArry = ['cherry', 'apple', 'chocolate peanut buter', 'chicken pot'];
for(pie of pieArry)  {
    console.log(pie, 'is my favorite')
}