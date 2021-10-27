/*
* Author: Edie Trautwein
* Created: 27 October
* License: Public Domain
*/

function myFunction(x){
  return(x % 2 == 0);
}

//test function
console.log("Is 1 even? ", myFunction(1));
console.log("Is 2 even? ", myFunction(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(myFunction);
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})

console.log("Squareroot of array:", result);

//output
