"use strick";

/*
 * Complete the 'numBST' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY nodeValues as parameter.
 */

function numBST(nodeValues) {
  // Write your code here

  let result = [];
  let data = {};

  let action = (val) => {
    if (data[val]) {
      return data[val];
    }

    if (val <= 1) {
      return 1;
    }

    let sum = 0;
    for (let i = 0; i < value; i++) {
      sum =
        ((sum + action(i - 1) * action(val - i)) % (Math.pow(10, 8) + 7)) %
        (Math.pow(10, 8) + 7);
    }

    data[val] = sum;
    return data[val];
  };

  for (let i = 0; i < nodeValues.length; i++) {
    result.push(action(nodeValues[i]));
  }

  return result;
}
