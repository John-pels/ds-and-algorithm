"use strict";

/*
* Complete the 'closestNumbers' function below
*
* The function accepts INTEGER_ARRAY number as parameter

*/

function closestNumbers(numbers) {
  // write your code here

  let maxNumber = Number.MAX_VALUE;
  let newArr = [];

  numbers.sort((x, y) => x - y);

  for (let i = 1; i < numbers.length; i++) {
    let absValue = Math.abs((numbers[i] = numbers[i - 1]));
    if (absValue <= maxNumber) {
      if (absValue < maxNumber) {
        newArr = [];
      }
      maxNumber = Math.min(maxNumber, absValue);
      newArr.push([number[i - 1], numbers[i]]);
    }
  }

  newArr.forEach((val) => {
    console.log(`${val[0]} ${val[1]}`);
  });
}
