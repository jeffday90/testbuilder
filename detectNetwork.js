// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  
    
//if (cardNumber[0] === '3'){
//   if (cardNumber[1] === '8' || cardNumber[1] === '9'){
//      return cardNumber.length === 14 ? "Diner's Club" : 'INVALID CARD';
//    } else if (cardNumber[1] === '4' || cardNumber[1] === '7'){
//      return cardNumber.length === 15 ? 'American Express' : 'INVALID CARD';
//    } 
//  } 
//    
//    
//    else if (cardNumber[0] === '4'){
//    return cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 ? 'Visa' : 'INVALID CARD';
//  } else if (cardNumber[0] === '5'){
//    if (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5');
//    return cardNumber.length === 16 ? 'MasterCard' : 'INVALID CARD';
//  }
//  
    
    //Diner's Club
    if (cardNumber.length === 14){
        if (cardNumber[0] === '3'){
            if (cardNumber[1] === '8' || cardNumber[1] === '9'){
                return "Diner's Club";
        }
    }
       
    //American Express    
    } else if (cardNumber.length === 15){
        if (cardNumber[0] === '3'){
            if (cardNumber[1] === '4' || cardNumber[1] === '7'){
                return 'American Express';
        }
    } 
    
    //MasterCard
    } else if (cardNumber.length === 16 && cardNumber[0] === '5') {
     if (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5'){
                return 'MasterCard'; 
     
    }
    
    
    //Discover
    } else if (cardNumber.length === 16 ||
              cardNumber.length === 19) {
    if (cardNumber.indexOf('6011') === 0 ||
        cardNumber.indexOf('65') === 0) {
      return "Discover";
    }

    for (var i = 644; i < 650; i++) {
      if (cardNumber.indexOf(i.toString()) === 0) {
        return "Discover";
      }
    }
  }
  
    //Maestro    
    for (var j = 12; j <= 19; j++){
        if(cardNumber.length === j){
            if (cardNumber[0] === '5' && cardNumber[1] === '0'){
                return 'Maestro';
            }
            if (cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4'){
                return 'Maestro'
            }
        }
    }

    //China UnionPay
    for (var q = 16; q <= 19; q++){
       if (cardNumber.length === q){
         
         for (var z = 622126; z <= 622925; z++){
          if (cardNumber.indexOf(z.toString()) === 0){
            return 'China UnionPay';
          }
         }
          
          for (var k = 624; k <= 626; k++){
            if (cardNumber.indexOf(k.toString()) === 0){
              return 'China UnionPay';
            }
          }

          for (var n = 6282; n <= 6288; n++){
            if (cardNumber.indexOf(n.toString()) === 0){
              return 'China UnionPay';
            }
          }
        }
    }
    
    //Switch
    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
        if (cardNumber.indexOf('4903') === 0){
        return 'Switch';
      } else if (cardNumber.indexOf('4905') === 0){
        return 'Switch';
      } else if (cardNumber.indexOf('4911') === 0){
        return 'Switch';
      } else if (cardNumber.indexOf('4936') === 0){
        return 'Switch';
      } else if (cardNumber.indexOf('564182') === 0){
        return 'Switch';
      } else if (cardNumber.indexOf('633110') === 0){
        return 'Switch';
      } else if (cardNumber.indexOf('6333') === 0){
        return 'Switch';
      } else if (cardNumber.indexOf('6759') === 0){
        return 'Switch';
      }
    }
    
    //Visa
    if (cardNumber[0] === '4'){
        if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
            return 'Visa';
        }
    }

    //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19

    // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
