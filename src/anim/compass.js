var jQuery = require("jquery");

var Compass = function(textID, imageID) {
    this.textID = textID;
    this.imageID = imageID;
    this.angle = 0;
    this.angleToOrientationMap = {
        0: 'North',
        22: 'North-North-East',
        45: 'North-East',
        67: 'East-North-East',
        90: 'East',
        112: 'East-South-East',
        135: 'South-East',
        157: 'South-South-East',
        180: 'South',
        202: 'South-South-West',
        224: 'South-West',
        246: 'West-South-West',
        270: 'West',
        292: 'West-North-West',
        315: 'North-West',
        337: 'North-North-West'
    };
}

Compass.prototype.getScrollOffset = function(scrollOffset) {
    return scrollOffset/10;
}

Compass.prototype.convertToOrientation = function(angle) {
    if(angle > 359) {
        var counter = Math.floor(angle / 360);
        angle = angle - (360 * counter);
    }
    var output = undefined;
    if (this.angleToOrientationMap[angle] !== undefined) {
        output = this.angleToOrientationMap[angle];
    } else {
        output = Math.floor(angle) + '°';
    }
    return output;
}

Compass.prototype.getOrientation = function(angle) {
    var angle = this.getAngleFromScrollOffset(angle);
    var orientation = this.getOrientation(angle);

    return orientation;
}

Compass.prototype.getOrientation = function(angle) {
    return this.convertToOrientation(angle);
}

Compass.prototype.getAngleFromScrollOffset = function(scrollOffset) {
    return this.getScrollOffset(scrollOffset);
}

Compass.prototype.handleScrollEvent = function(scrollOffset) {
    var angle = this.getAngleFromScrollOffset(scrollOffset);
    var orientation = this.getOrientation(angle);
    this.showText(orientation)
    this.rotateImage(angle);

}

Compass.prototype.showText = function(text) {
    jQuery('#' + this.textID).html(text);
}

Compass.prototype.rotateImage = function(angle) {
    jQuery('#' + this.imageID).css('transform', 'rotate('+ angle + 'deg)');
}

module.exports = Compass;