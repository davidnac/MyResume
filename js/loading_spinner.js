//pase in head tag
/*$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
*/

document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".se-pre-con").style.visibility = "visible"; 
    } else { 
        document.querySelector(".se-pre-con").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
}; 


