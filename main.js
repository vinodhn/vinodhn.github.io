!(function($) {
  "use strict";


  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  $(window).scroll(function() {
    var navigationSections = $('section');
    var currentSections = $('.nav-menu, #mobile-nav');
    console.log("hello1")
    $(window).scroll(function() {
      var currentPos = $(document).scrollTop() + 10;
      console.log("hello2")

      navigationSections.each(function(){
        console.log("hello3")
        var top = $(this).offset().top;
        var bottom = top + $(this).outerHeight();

        if(currentPos >= top && currentPos <= bottom){
          if(currentPos <= bottom){
            currentSections.find('li').removeClass('active');
          }
          currentSections.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }

        if (currentPos < 200) {
          $(".nav-menu ul:first li:first").addClass('active');
        }
      })

    });

  });

  // Initi AOS
  AOS.init({
    duration: 500
  });

})(jQuery);