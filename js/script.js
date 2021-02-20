$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $(".navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth; //With of the browser window itself.
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide'); //collapse is een functie in bootstrap.js, hetgeen JQuery is.
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
  
});
$('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
    && (window.innerWidth > 575))  {
    document.getElementById("logo").className = "logo-scroll";
  } else {
    document.getElementById("logo").className = "";
  }
}