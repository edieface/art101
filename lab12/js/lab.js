/*
* Author: Edie Trautwein
* Created: 15 November
* License: Public Domain
*/


function sortingHat (str) {
  len = str.length;
  mod = len % 4;

  if (mod == 0)
    return "Apple"

    }

  elseif (mod == 1)
    return "Banana" ;

  elseif (mod == 2)
    return "Kiwi" ;


  elseif (mod == 3)
    return "Guava" ;



}

var myButton = document.getElementByID ("button");
  myButton.addEventListener ("click", function() {
    var name = document.getElementByID ("input").value;
    var house = sortingHat (name);
    newText = " <p> The Sorting Hat has named you + "house" + " </p "
    document.getElementByID ("output").innerHTML = newText;

  }}
