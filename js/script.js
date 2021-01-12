$(document).ready(function(){
  $('i.fa-angle-down').addClass('active');
  $('li').click(function(){
    $('li').not(this).children('.box').removeClass('active');
    $(this).children('.box').toggleClass('active');
    if ($('.box.lang').hasClass('active')) {
      $('i.fa-angle-down').removeClass('active');
      $('i.fa-angle-up').addClass('active');
    }
    else {
      $('i.fa-angle-up').removeClass('active');
      $('i.fa-angle-down').addClass('active');
    }
  });


});
