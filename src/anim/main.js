var jQuery = require('jquery');
var compass = require('./compass');



var imageEl = jQuery(new Image());
imageEl
  .load(function() {
    jQuery('#compassImage').append(imageEl);
    imageEl.attr('width', '500');
  })
  .attr('src', '/img/compass.png');

jQuery(document).scroll(function() {
    console.log(jQuery(document).scrollTop());
    var angle = jQuery(document).scrollTop();
    jQuery('#compassImage').css('transform', 'rotate('+(angle/(jQuery(window).height())*10) + 'deg)');
});