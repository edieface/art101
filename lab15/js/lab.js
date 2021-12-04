/*
* Author: Edie Trautwein
* Created: 15 November
* License: Public Domain
*/


//Using the core $.ajax() method
$.ajax({
  url: "https://yourapiendpoint.com/",
  data: {
    id: 123
    api_key: "blahblahblah",
  },
  type: "GET",
  dataType : "json",
  success: function(data){
    console.log(data);
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("Error:", textStatus, errorThrown);
  }
})
