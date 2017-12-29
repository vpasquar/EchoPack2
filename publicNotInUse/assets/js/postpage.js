$(document).ready(function() {

});

$('.c-reply').on('click', function () {
  
  // e.preventDefault();
  // $("#reply-pullout").fadeIn(600);
  $(this).next().toggleClass('toggle');
  
});