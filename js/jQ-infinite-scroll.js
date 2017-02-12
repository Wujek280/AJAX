//
$(document).ready(function () {
   'use strict';
   $(window).scroll(function () { //wykrywacz skrolowania 
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
         //console.log("BOTOM!!");
         $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
            
            for (var index = 0; index < data.length; index++) {
               var endOfLine = document.createElement('p');
               var pUserId = document.createElement('p');
               var pUserName = document.createElement('p');
               var pUserURL = document.createElement('p');
               
               pUserId.innerHTML = "<hr>User ID: " + data[index].id;
               pUserName.innerHTML = "User Name: " + data[index].username;
               pUserURL.innerHTML = "User URL: http://" + data[index].website + "<hr>";
               
               if (index == 0) {
                  endOfLine.innerHTML = "-------------BEGIN------------";
                  document.body.appendChild(endOfLine);
               }
               
               document.body.appendChild(pUserId);
               document.body.appendChild(pUserName);
               document.body.appendChild(pUserURL);
               
               if (index == data.length - 1) {
                  endOfLine.innerHTML = "-------------END------------ <br><br><br><br><br>";
                  document.body.appendChild(endOfLine);
               }
               
            }
         })
      }
   });
});