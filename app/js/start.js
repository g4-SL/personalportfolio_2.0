$('.view-project').on('click', function(){
  modal = $(this).attr('data-modal-target');
  $('#' + modal).addClass('show');
  $('body').addClass('no-scroll');
});

$('.modal-box .close').on('click', function(){
  $(this).closest('.modal-box').removeClass('show');
  $('body').removeClass('no-scroll');
});