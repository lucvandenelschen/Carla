$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $(".navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth; //With of the browser window itself.
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide'); //collapse is een functie in bootstrap.js, hetgeen JQuery is.
      console.log('test2');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  // Moet dat hieronder niet .navbar-toggler zijn?
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
  
  $(".navbar-collapse a").click(function(event){
    console.log('test');
            $("#collapsable-nav").collapse('show');
  });

});



window.onscroll = function() {myFunction()};

function myFunction() {
 // console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 290
   /* && window.innerWidth > 575*/)  {
    document.getElementById("logo").className = "logo-scroll";
  //  document.getElementById('header-nav').style.height = "103px";
   // document.getElementById('header-nav').style.backgroundColor = "#d7cbc5";
    //document.getElementById('header-nav').style.backgroundColor = "#ffeae0";
    //document.getElementById('header-nav').style.backgroundColor = "#ecc7b3";
    //document.getElementById('header-nav').style.backgroundColor = "#fff7f4";
    document.getElementById('header-nav').style.boxShadow = "0px 10px 5px 0px rgba(0,0,0,0.28)";
  } 

  if (document.documentElement.scrollTop < 220 
   /* && window.innerWidth > 575*/) { 
    document.getElementById("logo").className = "";
    //document.getElementById('header-nav').style.height = "170";
    document.getElementById('header-nav').removeAttribute("style");
  //  document.getElementById('header-nav').style.backgroundColor = "#fff9f6";
  }
}

/*
$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
        console.log('more');
        $('#logo').addClass('logo-scroll');
        $('#header-nav').addClass('header-nav-scrolled');
    } else {
        console.log('less');
        $('#logo').removeClass('logo-scroll');
        $('#header-nav').removeClass('header-nav-scrolled');      
    }
  });
}); 
*/

/*L54 unobstrusive event binding */
function getName (event) {
	var enteredName = document.getElementById("fname").value;
	document.getElementById("to-be-filled").innerHTML = 
		"<h2> Hello " + enteredName + "</h2>";
		//console.log (event);
}
document.querySelector(".mybutton").addEventListener("click", getName);
console.log(this);



