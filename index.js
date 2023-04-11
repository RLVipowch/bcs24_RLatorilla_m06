
function oddEvenChecker(num) {
    if (typeof num !== 'number') {
      alert('Invalid Input.');
    } else if (num % 2 === 0) {
      console.log('The number is even.');
    } else {
      console.log('The number is odd.');
    }
  }
  

  function budgetChecker(num) {
    if (typeof num !== 'number') {
      alert('Invalid Input.');
    } else if (num > 40000) {
      console.log('You are over the budget.');
    } else {
      console.log('You have resources left.');
    }
  }
  oddEvenChecker(4); 
  oddEvenChecker(5); 
  oddEvenChecker('hello'); 
  
  budgetChecker(50000); 
  budgetChecker(30000); 
  budgetChecker('world'); 
    