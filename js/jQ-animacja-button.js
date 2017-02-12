'use strict';
var button = document.createElement('input');
button.setAttribute('id', 'przycisk');
 button.setAttribute('type', 'button');
 button.setAttribute('class', 'button');
 button.setAttribute('value', 'DAWAJ ANIMACJE');
 document.body.appendChild(button);

var sq = document.createElement('div');
sq.setAttribute('id', 'sq');
 sq.setAttribute('class', 'square');
 //$('#sq').css.position = 'absolute';
 document.body.appendChild(sq);

$(document).ready(function () {
   
   $('#przycisk').click(function() {
      
   console.log("heh");
      
     $( '#sq').animate({ width:"100px", height:"100px", marginLeft:"100px" }, 3000,function() {
        
     });
      
   });
   
});