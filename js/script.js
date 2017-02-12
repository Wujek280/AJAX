'use strict';

function ajax( ajaxOptions ) {
   var options = {
         type: ajaxOptions.type || "POST",
         url: ajaxOptions.url || "",
         onComplete: ajaxOptions.onComplete || function () {},
         onError: ajaxOptions.onError || function () {},
         onSuccess: ajaxOptions.onSuccess || function () {},
         dataType: ajaxOptions.dataType || "text"
   };
   
};

function pobierzDane() {
   
}

//utworzenie obiektu
var httpReq = new XHTMLHttpRequest();

//otwarcie połączenia 
httpReq.open(options.type, options.url, true);

//gdy status nr4 - gotowe dane
httpReq.onreadystatechange = function () {
   if(httpReq.readyState == 4){
      
   }
}