var jQuery = require('jquery');
var Compass = require('./compass');


var compass = new Compass("directionHeading", "compassImage");

var imageEl = jQuery(new Image());
imageEl
  .load(function() {
    jQuery('#compassImage').append(imageEl);
    imageEl.attr('width', '500');
  })
  .attr('src', '/img/compass.png');

jQuery(document).scroll(function() {
    var scrollValue = jQuery(document).scrollTop();
    compass.handleScrollEvent(scrollValue);
});