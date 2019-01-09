// Switch cader

let friend= 'Zach';

switch (friend) {
    case 'Zach':
      console.log('Let\'s go play ultimate!')
      break;
    case 'Ing':
      console.log('So...are you taking me to Belgium?')
      break;
    case 'Adam':
      console.log(' I probably have baby stuff for you tomorrow.')
      break;
    default:
      console.log(`You, ${friend}, are not my firend.`)


}


let desert= 'ice';

switch (desert) {
    case 'pie':
      console.log('pie, pie, me oh my!')
      break;
    case 'ice cream':
      console.log('I scream for ice cream!')
      break;
    case 'Cake':
      console.log(' Cake is great')
      break;
    default:
      console.log('Not on the menu.')
}


//muti (case) conditions switch

let range = -8

switch (true) {
    case (range < 0 && range > -10):
        console,log('worked')
        break;
    case range >= 0 || range <= -10:
        console.log('also worked')
        break;
}

