let food = ['pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake','Hotdog'];

food.forEach(f => {console.log(f); })

food.forEach((food, number) => {console.log(number);
console.log(food)
})

let movie = ['Good Fellas', 'Home Alone', 'Lion King', 'Comedy', 'Action' ];

movie.forEach(f => {console.log(f); })
    
movie.push('Wedding crashers')
movie.splice(3,1, 'Rain Man')
console.log('************')

movie.forEach(f =>{console.log(f)});