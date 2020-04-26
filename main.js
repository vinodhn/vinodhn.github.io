console.log("Hello!")
function smoothTransitions() {
  var scrollPos = $(document).scrollTop();
  var targetOpacity = 1;
  console.log(1000-scrollPos)
  $('#hero').css({
      'opacity': (1000-scrollPos)/1000
  });
  $('#about').css({
    'opacity': (scrollPos)/1000
});
};

$(function(){
  $(window).scroll(function() {
      smoothTransitions();
  });
});