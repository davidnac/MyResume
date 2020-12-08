

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


/*---------------------JAVA SCRIPT SCROLLSPY----------------------*/

(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;
  var offset = 80;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition+offset) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();

/*---------------------JAVA SCRIPT SCROLLSPY----------------------*/

  

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
    const logo = "images/dive_log_logo.png";
    const bio = "Dive log book allows you to keep your records & diving certifications with you at all times.It has many features including: Digital dive log book - including field to record Marine life spotted on dive (Something i haven't seen, in most dive log apps), Easily copy & edit dives, for fast input, Dive Certifications log, View all your dive sites on a map, Export dive log to PDF & Excel, get detailed statistics.";
    const technologies = "Android studio, Java, Sqlie, Google maps SDK, Location API, Excel with Apache POI, PDF generation, Google drive sdk, Firebase Crashlytics, Camera & images.";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.david.divelog";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showDivePlanner(){
    const title = "Dive planner";
    const logo = "images/dive_planner_logo.png";
    const bio = "Dive planner for recreational diving that aims to replace the tedious planning with paper dive tables, and automates the planning process, plus many other extras.";
    const technologies = "Android studio, Java, Sqlie, Async, Google drive sdk, Firebase Crashlytics & Auth.";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.davidnac.diveplanner";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showTtsReader(){
    const title = "TTS Reader";
    const logo = "images/tts_reader_logo.png";
    const bio = "TTS Reader allows users to have any text read out to you simply by marking it and copying it to the clipboard or by sharing text or a webpage to the app. It also incorporates OCR technology for identifying text and reading straight away or saves it for later. ";
    const technologies = "Android studio, Java, Sqlie, Async, Text to speech API, Firebase Crashlytics, Google vision API (text recognition), In app purchase API.";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.davidnac.ttsreaderfree";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showBarcodeReader(){
    const title = "Barcode reader";
    const logo = "images/barcode_reader_logo.png";
    const bio = "QR & Barcode scanner which support all the common formats with Instant scanning and decoding, Scan from camera or image in your gallery. Scan history, Create all types of QR code and save them to your device as an image, or have them stored in the app's history tab.";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.davidnac.barcodereader";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showMorseTranslator(){
    const title = "Morse Translator(";
    const logo = "images/morse_translator_logo.png";
    const bio = "Everything you ever wanted from a Morse code translator app! Translate Morse code to  many different languages, including English, Russian, Greek, Japanese, Korean,Hebrew, Arabic, Persian, Number and Punctuation marks! features include: Real time translation - no need for annoying button click every time, Text to Morse Auto detect - no need to select language, Transmit Morse code using sound, flash, device screen brightness & vibration, Text to speech to read translations, Speech to text to dictate words for translation, Real time translation from text to Morse code or vice versa, Save codes for fast future lookup, Share your translations, Customize dot & dash with custom symbols of your choosing.";
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
    const bio = "a social store where you can sell/give and buy many kinds of new or used products such as: clothing, footwear, textile, strollers, toys and more. The application allows you to view products other users have uploaded and contact them easily. Find exactly what you are looking for, using a smart search and advanced filter options.Create a wishlist, and keep track of what you need and get notified when an item you are looking for is uploaded by another user.";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "https://play.google.com/store/apps/details?id=com.david.mybaby";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showBuy4babyIos(){
    const title = "Buy4baby";
    const logo = "images/buy4baby-1.png";
    const bio = "a social store where you can sell/give and buy many kinds of new or used products such as: clothing, footwear, textile, strollers, toys and more. The application allows you to view products other users have uploaded and contact them easily. Find exactly what you are looking for, using a smart search and advanced filter options.Create a wishlist, and keep track of what you need and get notified when an item you are looking for is uploaded by another user.";
    const technologies = "Sqlite, Firebase: Auth,storage, realtime database ++, Async";
    const mainImage = "images/galaxy.jpg";
    const link = "https://apps.apple.com/us/app/buy4baby/id1474004620";

    showModal(title,bio,link,mainImage,technologies,logo);
  }

  function showBuy4babyWeb(){
    const title = "Buy4baby";
    const logo = "images/buy4baby-1.png";
    const bio = "a social store where you can sell/give and buy many kinds of new or used products such as: clothing, footwear, textile, strollers, toys and more. The application allows you to view products other users have uploaded and contact them easily. Find exactly what you are looking for, using a smart search and advanced filter options.Create a wishlist, and keep track of what you need and get notified when an item you are looking for is uploaded by another user.";
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
