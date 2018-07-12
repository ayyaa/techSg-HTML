$(window).scroll(function() {    
  var scrollUp = 0;
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $("#navbar").addClass("navbar-background");
    $("#navbar").removeClass("navbar-transparent");
  } else if (scroll === 0) {
    $("#navbar").removeClass("navbar-background");
    $("#navbar").addClass("navbar-transparent");
  }
});
