document.addEventListener('deviceready', function () {
    
  document.addEventListener("backbutton", function(e){
    
      var bodyId = document.body.id;
//      alert(bodyId);
      
   if(bodyId == 'index'){
       e.preventDefault();
       navigator.app.exitApp();
   }
//   else if (bodyId == 'series'){ window.location.href = "index.html";  }
//   else if (bodyId == 'product'){ window.location.href = "series.html";  }
//   else if (bodyId == 'calculator'){ window.location.href = "product.html";  }
   else {
       navigator.app.backHistory()
   }
      
//     alert("Hello Aq kembali");
  }, false);
  
  // Call syncHashedEmail anywhere in your app if you have the user's email.
  // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);

// batasan jquery