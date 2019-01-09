var student = { name: "Harry", awesome: true, degree:
"javaScript", week: 1 };

for (item in student) {
    console.log(item);
    console.log(student[item])
}

var pieArry = ['cherry', 'apple', 'chocolate peanut buter', 'chicken pot'];
for(pie in pieArry)  {
    console.log(pie)
}


var studentName = 'hArRy'
var capName;
for (let n in studentName){
    if (n == 0)  {
        capName =studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase();
    }
}
    console.log(capName);