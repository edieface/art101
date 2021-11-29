/*
* Author: Edie Trautwein
* Created: 15 November
* License: Public Domain
*/


function sortingHat(str) {
  len = str.length;
  mod = length % 4;
  if (mod == 0) {
    return "Apple"
    }
  else if (mod == 1) {
    return "Banana"
    }
  else if (mod == 2) {
    return "Kiwi" ;
    }
  else if (mod == 3) {
    return "Guava"
    }
}

var myButton = document.getElementByID("button");
myButton.addEventListener("click", function() {
    var name = document.getElementByID("input").value;
    var house = sortingHat(name);
    var newText = "<p> The Sorting Hat has named you " + house + "</p>";
    document.getElementByID("output").innerHTML = newText;

  });

  /*
  Console is giving me an error on line 25. Does not like: "document.getElementByID is not a function" 
  */
