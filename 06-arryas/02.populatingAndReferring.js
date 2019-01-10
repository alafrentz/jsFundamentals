let food = ['pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake','Hotdog'];

food.push('Pizza')

for(f in food){
    console.log(food[f])
}

food.push('Pizza')

food.splice(1,0, 'Bananas');

food.pop();