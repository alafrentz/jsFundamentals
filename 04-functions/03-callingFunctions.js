function hi(){
    console.log('HI');
    return 'Hey';
}

//hi;
//hi();
console.log(hi);
console.log(hi());

function list(){
    for(var x = 1; x <= 10; x++)  {
        console.log(x);
    }
  return 'Done';
}


console.log(list());

function list(){
    let arr = ['This', 'is', 'really', 'cool?'];
    for (list of arr);
}
console.log(arr)

//correct

function ind(){
    let arr = ['This', 'is', 'really', 'cool?'];
    for (item of arr) {
        console.log(item);
    }
}

ind();