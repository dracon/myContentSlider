/**
 *  * Created by dracon on 28.02.2016.
 *  */


var Slider = (function (jQuery) {
  var elements = $('.slides li')

  var config = {
    duration: 10000
  }

  function init () {
    console.log(elements);
    loopItems(elements);
  }


  function slideSwitch() {
    var $active = $('#slideshow').find('li.active');

    if ( $active.length == 0 ) $active = $('#slideshow').find('li:last');

    //Er active.next() > 0?
    var $next =  $active.next().length ? $active.next()
      : $('#slideshow').find('li:first');

    $active.addClass('last-active')
      .animate({opacity: 0.0}, 1500);

    $next.css({opacity: 0.0})
      //.css({"transform": "translateX(-100%)"})
      .addClass('active slide')
      //.animate({"transform":"translateX(100%)"},{queue: false, duration: 1000})
      .animate({opacity: 1.0}, 2000, function() {
        console.log('Jeg er her!');
        $active.removeClass('active last-active slide');
      })
      ;
  }


  function loopItems(){
    setInterval(function () {
      slideSwitch();
    }, config.duration); //TODO: dynamisk duration


  }

  return {
    init: init
  }
}(Slider || {}, jQuery));

Slider.init();

