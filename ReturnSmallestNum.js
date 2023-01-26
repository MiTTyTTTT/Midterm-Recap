function sumTwoSmallestNumbers(numbers) {
    let sorting = numbers.sort((a,b) => {
      if(a > b) {
        return a;
      }
    });
  return sorting[0] + sorting[1];
  
  }
  
  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));