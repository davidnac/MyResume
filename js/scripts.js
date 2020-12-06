

    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

  

///////////items filter code/////////////
$(document).ready(function(){
    $(".list").click(function(){
      const value = $(this).attr("data-filter");
  
      //1000 is msec for animation
      if(value == "All"){
        $(".itemBox").show("1000");
      }else{
        //hides all elements that dont have class .fillter
          $(".itemBox").not("."+value).hide("1000");
          //shows all elements that have class .fillter
          $(".itemBox").filter("."+value).show("1000");
      }
    })
      $(".list").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
      })
  })
  ///////////items filter code/////////////

  function showDiveLog(){
    const title = "Dive log";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Android studio, Java, Sqlie, Google maps SDK, Location API, Excel with Apache POI, PDF generation, Google drive sdk, Firebase Crashlytics, Camera & images.";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.david.divelog";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showDivePlanner(){
    const title = "Dive planner";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Android studio, Java, Sqlie, Async, Google drive sdk, Firebase Crashlytics & Auth.";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.davidnac.diveplanner";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showTtsReader(){
    const title = "TTS Reader";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Android studio, Java, Sqlie, Async, Text to speech API, Firebase Crashlytics, Google vision API (text recognition), In app purchase API.";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.davidnac.ttsreaderfree";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showBarcodeReader(){
    const title = "Barcode reader";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.davidnac.barcodereader";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showMorseTranslator(){
    const title = "Morse Translator(";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Android studio, Java, Kotlin, Room sqlite, MVVM Architecture, Async, Firebase Crashlytics, CameraX API,  In app purchase";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.david.morsetranslator";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  
  function showBlog(){
    const title = "Morse Translator";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "NA";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showAccellix(){
    const title = "Accellix";
    const logo = "images/buy4baby-1.png";
    const bio = "Accellix is an advanced automated flow cytometer which does high speed blood tests and analyzes the results.The android app, along with a dll built in C# for connecting the device to the cloud, allows the device handlers (which i was at the time), to monitor all the tests run on the device, detect bugs, and easily manage the device remotely. instead of asking the users to do all kinds of actions and using a team viewer everytime something had to be done.";
    const technologies = "Android studio, Java, Firebase realtime database,Authentication, Async timers";
    const mainImage = "images/galaxy.jpg";
    const link = "NA";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showBuy4babyAndroid(){
    const title = "Buy4baby";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.david.mybaby";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showBuy4babyIos(){
    const title = "Buy4baby";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "https://apps.apple.com/us/app/buy4baby/id1474004620";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showBuy4babyWeb(){
    const title = "Buy4baby";
    const logo = "images/buy4baby-1.png";
    const bio = "ffffffffffffffffff";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "www.buy4baby.co.il";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showModal(title,bio,link,mainImage,technologies,logo){
    
    // set title and body of alert
      $('#appModal .modal-logo').attr("src",logo);;
      $('#appModal .modal-mainImage').attr("src",mainImage);
      $('#appModal .modal-title').text(title);
      $('#appModal .modal-bio').text(bio);
      $('#appModal .modal-link').text(link);
      $('#appModal .modal-link').attr("href", link);
      $('#appModal .modal-tech').text(technologies);

      $('#appModal').modal();
    }


/*
//multiple categories
  $('.category').on('change', function() {
    var category_filters = [];
  
    $('.search-filters select').each(function() {
      if ($(this).val() != 0) {
        category_filters[$(this).attr('id')] = $(this).val();
      }
    });
  
    $(".result-set .result").hide().filter(function() { 
      var show = true;
      for (var category in category_filters) {
         show = show && $(this).data(category) == category_filters[category];
      }
  
      return show;
    }).show();
  
  });*/
