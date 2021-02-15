$(document).ready(function(){
    $('.accordion').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('open');
      $accordion_title = $(this);
      $accordion_content = $(this).next('.panel');
      $('.panel').not($accordion_content).slideUp();
      $('.panel').not($accordion_content).prev('.accordion').removeClass('open');
      $accordion_content.stop(true, true).slideToggle(400);
      if ($(this).hasClass('open')) {
        ScrollToTop();
      }
    });
  });
  
  function ScrollToTop() {
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $($accordion_title).offset().top - 10
      }, 600);
    }, 600);
  }