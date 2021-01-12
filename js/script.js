$(document).ready(function(){
  $('li').click(function(){
    $('li .box').removeClass('active');
    $(this).children('.box').toggleClass('active');
  });


});
