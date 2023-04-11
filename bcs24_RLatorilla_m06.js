function oddEvenChecker(num) {
    if (typeof num !== 'number') {
      console.log('Invalid Input.');
    } else if (num % 2 === 0) {
      console.log('The number is even.');
    } else {
      console.log('The number is odd.');
    }
  }
  
  // Function to check if a number is over the recommended budget
  function budgetChecker(num) {
    if (typeof num !== 'number') {
      console.log('Invalid Input.');
    } else if (num > 40000) {
      console.log('You are over the budget.');
    } else {
      console.log('You have resources left.');
    }
  }

oddEvenChecker(2); 
oddEvenChecker(3); 
oddEvenChecker('hotdog'); 

budgetChecker(50000); 
budgetChecker(30000); 
budgetChecker('cheesedog'); 