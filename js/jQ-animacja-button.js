'use strict';
var button = document.createElement('input');
button.setAttribute('id', 'przycisk');
 button.setAttribute('type', 'button');
 button.setAttribute('class', 'button');
 button.setAttribute('value', 'DAWAJ ANIMACJE');
 document.body.appendChild(button);

var sq = document.createElement('div');
var header = document.createElement('h2');
sq.setAttribute('id', 'sq');
 sq.setAttribute('class', 'square');
 document.body.appendChild(sq);

 header.innerHTML = "";
document.getElementById('sq').appendChild(header);


$(document).ready(function () {
   
   $('#przycisk').click(function() {
      
   console.log("heh");
      
     $('#sq').animate({ width:"100px", height:"100px", marginLeft:"100px" }, 300,function() {
      $('#sq').animate({"backgroundColor":"blue"},500,function() {
         document.getElementById('sq').appendChild(header);
          header.innerHTML = "Gz!";         
      })
        
     });
      
   });
   
});