var jQuery = require('jQuery')(window);

/*
- wait until image is loaded
- load it into the <img> tag
- rotate image clockwise 90º for every full page height scrolled down
 */

function scrollDown(scrollOffset, pageHeight) {
  scrollHandler.pageHeight = pageHeight;
  scrollHandler.scrollDownTo(scrollOffset);
}

ddescribe('image rotator', function() {
  beforeEach(function() {
    spyOn(rotateImage, 'byAngle');
  });

  describe('rotate image depending on scroll height', function() {
    it('scroll is 0, rotate by 0 degrees', function() {
      scrollDown(0, 100);
      expect(rotateImage.byAngle)
        .toHaveBeenCalledWith(0);
    });
    it('scroll is 250, rotate by 45 degrees', function() {
      scrollDown(250, 500);
      expect(rotateImage.byAngle)
        .toHaveBeenCalledWith(45);
    });
    it('scroll is 400 (full page), rotate by 90 degrees', function() {
      scrollDown(400, 400);
      expect(rotateImage.byAngle)
        .toHaveBeenCalledWith(90);
    });
  });

  it('should update the angle on every scroll change', function() {
    scrollDown(100, 200);
    expect(rotateImage.byAngle)
      .toHaveBeenCalledWith(45);

    scrollDown(200, 200);
    expect(rotateImage.byAngle)
      .toHaveBeenCalledWith(90);
  });

});

function getAngleByScrollOffset(scrollOffset, pageHeight) {
  return scrollOffset/pageHeight * 90;
}

var scrollHandler = {
  pageHeight: 0,
  scrollDownTo: function(scrollOffset) {
    rotateImage.byScrollOffset(scrollOffset, scrollHandler.pageHeight);
  }
};


var rotateImage = {
  byScrollOffset: function(scrollOffset, pageHeight) {
    rotateImage.byAngle(getAngleByScrollOffset(scrollOffset, pageHeight));
  },

  byAngle: function(angle) {
    var image = jQuery('#' + imageName);
    image.css('webkitTransform', 'rotate(' + angle + 'deg)');
  }
};

