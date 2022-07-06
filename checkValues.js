function checkValues(x1, y1, x2, y2, x3, y3) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

function checkPairs(x1, y1, x2, y2, x3, y3, x, y) {
  let nutA = checkValues(x1, y1, x2, y2, x3, y3);
  let checkFirstA = checkValues(x, y, x2, y2, x3, y3);
  let checkSecondA = checkValues(x1, y1, x, y, x3, y3);
  let checkThirdA = checkValues(x1, y1, x2, y2x, y);

  return nutA == checkFirstA + checkSecondA + checkThirdA;
}

function pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
  //Write your code here

  let valueOfAB = Math.abs(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
  let valueOfBC = Math.abs(Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2));
  let valueOfAC = Math.abs(Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2));

  let checkFirstData = checkPairs(x1, y1, x2, y2, x3, y3, xp, yp);
  let checkSecondData = checkPairs(x1, y1, x2, y2, x3, y3, xq, yq);

  if (
    !(
      valueOfAB + valueOfBC > valueOfAC &&
      valueOfBC + valueOfAC > valueOfAB &&
      valueOfAC + valueOfAB > valueOfBC
    )
  ) {
    return 0;
  }

  if (checkFirstData && !checkSecondData) {
    return 1;
  }

  if (!checkFirstData && checkSecondData) {
    return 2;
  }

  if (checkFirstData && checkSecondData) {
    return 3;
  }

  if (!checkFirstData && !checkSecondData) {
    return 4;
  }
}
