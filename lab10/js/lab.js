/*
* Author: Edie Trautwein
* Created: 3 November
* License: Public Domain
*/

{var field = document.getElementByID("myfield");
var name = field.value;

//input change from 'hello,word' to 'hello' + user name
var headingEl = document.getElementByID("title");
headingEl.innerHTML="Hello, " + name;
}
//event handler within JS file that listens for button click.
var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", putNameInTitle);

//output
 
