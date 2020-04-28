console.log("Hello!")
function smoothTransitions() {
  var scrollPos = $(document).scrollTop();
  var targetOpacity = 1;
  $('#hero').css({
      'opacity': (1300-scrollPos)/1000
  });
};

function animateActiveSection(){
  var navigationSections = $('section');
  var currentSections = $('.menu, #mobile-nav');

  $(window).scroll(function(){
    var currentPos = $(document).scrollTop() + 10;

    navigationSections.each(function(){
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      
      if(currentPos >= top && currentPos <= bottom){
        if(currentPos <= bottom){
          currentSections.find('li').removeClass('active');
        }
        currentSections.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (currentPos < 200) {
        $(".menu ul:first li:first").addClass('active');
      }
    })
  })
}

$(function(){
  AOS.init({
    duration: 1000
  });
  $(window).scroll(function() {
      smoothTransitions();
      animateActiveSection();
  });
});