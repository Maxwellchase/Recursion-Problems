/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
function reverse(string){
  debugger
  if(string === ""){
    return ""
  }
  return reverse(string.slice(1)) + string[0]

  // return string[string.length-1] + reverse(string[string.length - 2])
}
console.log(reverse("house")); // "esuoh"


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
