$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if($('nav').hasClass('open')){
      $('nav').removeClass('open');
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 90
        }, 500);
        return false;
      }
    }
  });
});

$(function(){
  $('#main').css('padding-top', $('header').outerHeight());
  $('.modal-box').css({
    'top': $('#main').css('padding-top')
  });
});

$('.view-project').on('click', function(){
  modal = $(this).attr('data-modal-target');
  $('#' + modal).addClass('show');
  $('body').addClass('no-scroll');
});

$('.modal-box .modal-close').on('click', function(){
  $(this).closest('.modal-box').removeClass('show');
  $('body').removeClass('no-scroll');
});

$('.nav-link').on('click', function(){
  $(this).parent().siblings('nav').toggleClass('open');
});

$(document).ready(function(){
  var bottom = $('header').offset().top + $('header').outerHeight();
  $('header nav ul li a').on('click', function(e) {
    e.preventDefault();
  });
  
  // $(window).on('scroll',function() {
  //   var scrolltop = $(this).scrollTop();
 
  //   if(scrolltop >= bottom) {
  //     $('header').addClass('sticky');
  //   }
    
  //   else if(scrolltop <= bottom) {
  //     $('header').removeClass('sticky');
  //   }
  // });
});