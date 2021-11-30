/*
* Author: Edie Trautwein
* Created: 15 November
* License: Public Domain
*/


function fizzBuzzBoom(maxNums, factorObj) {
  //iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    //reset output oneLongString
    var outputStr = "";
    //iterate over the factors we got from the html
    for (var factor in factorObj){
      //check to see if this num is a multiple of factor
      if (num%factor==0){
        outputStr += factorObj[factor];
      }
    }
    //now if we have words in outputStr, format it like this "- FizzBuzz!"
    if (outputStr){
      outputStr += " - " +outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str){
  outputEl.innerHTML = "<div class='error'>"+str+"</div>";
}

document.getElementByID("submit").addEventListener("click", function() {
  var max=document.getElementById("max").value;
  console.log("max:",max)
});
