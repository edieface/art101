/**
* Author: Edie Trautwein
* Created: 25 October
* License: Public Domain
*/


//sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hello, please tell me your name so I can fix it.");
  console.log("userName = ", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);
  return nameSorted;
}

//output
document.writeln("Hi again, I fixed your name: ", sortUserName(),  "</br>");
