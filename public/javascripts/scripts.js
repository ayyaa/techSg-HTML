$(window).scroll(function() {    
  const scrollUp = 0;
  const scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $("#navbar").addClass("navbar-background");
    $("#navbar").removeClass("navbar-transparent");
  } else if (scroll === 0) {
    $("#navbar").removeClass("navbar-background");
    $("#navbar").addClass("navbar-transparent");
  }
});

function myFunction() {
  var link = document.getElementById("resposiveMenu");
  var logo = document.getElementById("logo");
  var line = document.getElementById("line");
  if (link.className === "navbar-link" && logo.className === "logo" && line.className === "line") {
    link.className += " responsive";
    logo.className += " responsive";
    line.className += " responsive";
  } else {
    link.className = "navbar-link";
    logo.className = "logo";
    line.className = "line";
  }
}
