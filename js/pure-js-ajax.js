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
         return (httpRequest.status >= 200 && httpRequest.status <300 || httpRequest.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");
      } catch(e) {
         return false;
      }
      //console log user agent
   }
   
   

      //utworzenie obiektu
   var httpReq = new XMLHttpRequest();

      //otwarcie połączenia 
   httpReq.open(options.type, options.url, true);

      //gdy status nr4 - gotowe dane
   httpReq.onreadystatechange = function () {

      if(httpReq.readyState == 4){
            //sprawdzenie succesu
            if(httpSuccess(httpReq)) {
               
               var returnData = (options.dataType == "xml")? httpReq.responseXML : httpReq.responseText ;
               
                  //jesli wszystko ok
               options.onSuccess (returnData);
               
                  //zeruj obiekt , drop połączenie
               httpReq = null;
               
            } else {
                  // w przypadku bledu
               options.onError(httpReq.statusText);
            }
      }
   }
   httpReq.send();
};

///////////////////////////////////////////////////////////////

function pobierzDane(e) {
   e.preventDefault();

   
   ajax({
      type: "GET"
      , url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl"
      , onError: function (msg) {
         
         console.log(msg);
      }
      , onSuccess: function (response) {
         
               //rzutowanie na dżejsona
         var jsonObj = JSON.parse( response );
            console.log("jsonOBJ: ",jsonObj);
         
         var pUserId = document.createElement('p');
         var pUserName = document.createElement('p');
         var pUserURL = document.createElement('p');
         
         document.body.appendChild(pUserId);
         document.body.appendChild(pUserName);
         document.body.appendChild(pUserURL);
         
         pUserId.innerHTML=   "<hr>USER ID: "+ jsonObj.userId;
         pUserName.innerHTML= "   NAME: "+ jsonObj.userName;
         pUserURL.innerHTML=  "    URL: "+ jsonObj.userURL+"<br><hr>";
 
      }
   });
}

///////////////////////////////////////////////////////////////


//console.log("Czteroliterowe słowo testowe na 'd' ")

//        
//         
//         console.log("połączenie działa i dane sa pobierane ..//////////////// 99% \n jeszcze chwilę...");
//
