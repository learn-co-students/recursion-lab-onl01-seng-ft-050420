function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length <= 1) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(myString) {
  let length = myString.length;

  if (length <= 1) {
    return true;
  } else if (myString[length - 1] === myString[0]) {
    return isPalindrome(myString.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNum) {
  if (myArray.length < 1) {
    return false;
  } else if (myArray[0] === myNum) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNum);
  }
}
