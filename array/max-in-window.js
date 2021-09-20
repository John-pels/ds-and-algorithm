/*
Question:

Given a large array of integers and a window of size w, find the current maximum value in the window as the window slides through the entire array.
**/

/* 
Runtime Complexity
The runtime complexity of this solution is linear O(n)
*/

/* 
Memory Complexity
The memory complexity of this solution is linear O(w), where w is the window size
*/

/*
The algorithm uses deque data structure to find the maximum in a window. A deque is double-ended queue in which push and pop operations work in O(1) at both ends.
*/

let findMaxSlidingWindow = (arr, windowSize) => {
  var result = [];

  if (arr.length === 0) {
    return result;
  }

  if (windowSize > arr.length) {
    return result;
  }

  let window_ = [];
  //find out max for first window
  for (let i = 0; i < windowSize; i++) {
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    window_.push(i);
  }

  result.push(arr[window_[0]]);

  for (let i = windowSize; i < arr.length; i++) {
    //remove all numbers that are smaller than current number from the tail of the list

    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }

    if (window_.length > 0 && window_[0] <= i - windowSize) {
      window_.shift();
    }

    window_.push(i);
    result.push(arr[window_[0]]);
  }

  return result;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array " + array);
console.log("Max = " + findMaxSlidingWindow(array, 3));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];
console.log("Array =" + array1);
console.log("Max = " + findMaxSlidingWindow(array1, 3));
