/**
* Author: Edie Trautwein
* Created: 20 October
* License: Public Domain
*/

//Define Variables
var myTransport = ["bike" , "walking" , "bus" , "carpool"];

var myMainRide = {
  myMainRide.name: "bus";
  myMainRide.color: "blue";
  myMainRide.size;"double wide"
};

//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln ("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
