$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 52
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  var bottom = $('header nav').offset().top + $('header nav').outerHeight();
  $('header nav ul li a').on('click', function(e) {
    e.preventDefault();
  });
  
  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();
 
    if(scrolltop >= bottom) {
      $('header .container').addClass('sticky');
    }
    
    else if(scrolltop <= bottom) {
      $('header .container').removeClass('sticky');
    }
  });
});