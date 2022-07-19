/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:


***********************************************************************/

// your code here
function addToTwelve(array) {
debugger
  if(array.length < 2) {
    return false
  }
  if(array[0] + array[1] === 12 ){
    return true
  }else {
    return addToTwelve(array.slice(1)) 
  }
}
// [1, 3, 4, 7, 5] -> 1 + 3
//[3,4,7,5] -> 3+4
//[4,7,5] -> 4+7
//[7,5] -> 7+5 = 12


console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false
console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 11, 4, 7, 6])); // true

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
