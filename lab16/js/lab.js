/*
* Author: Edie Trautwein
* Created: 2 December
* License: Public Domain
*/

$.ajax({
  url: "https://yourapiendpoint.com/",
  data: {
    id: 123,
    api_key: "blahblahblah"
  },
  type: "GET",
  datatype: "json",
  success: function(data) {
    console.log(data);
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("Error:", textStatus, errorThrown);
  }
})
