function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a-b)
  return (numbers[0]+numbers[1])
}

// Sort numbers in order 
// return sum of 2 index
