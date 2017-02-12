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
   
      //sprawdza czy polaczenie sie udało <<>>
   function httpSuccess( httpRequest ) {
      try {
         return (httpRequest.status >= 300 && httpRequest.status <300 || httpRequest.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");
      } catch(e) {
         return false;
      }
      //console log user agent
   }
   
   
   function pobierzDane() {
   
   }

      //utworzenie obiektu
   var httpReq = new XHTMLHttpRequest();

      //otwarcie połączenia 
   httpReq.open(options.type, options.url, true);

      //gdy status nr4 - gotowe dane
   httpReq.onreadystatechange = function () {

      if(httpReq.readyState == 4){
         //sprawdzenie succesu
            if(httpSuccess(httpReq)) {
               
            }
      }
   }

   httpReq.send();
};

