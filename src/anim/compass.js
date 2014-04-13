var jQuery = require("jquery");

var Compass = function(textID, imageID) {
    this.textID = textID;
    this.imageID = imageID;
}

Compass.prototype.angleToOrientationMap = {
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

Compass.prototype.getScrollOffset = function(scrollOffset, height) {
    return (Math.floor(scrollOffset/height * 90));
}

Compass.prototype.convertToOrientation = function(angle) {
    var output = undefined;
    if (this.angleToOrientationMap[angle] !== undefined) {
        output = this.angleToOrientationMap[angle];
    } else {
        output = angle + '°';
    }
    return output;
}

Compass.prototype.setDegrees = function(angle) {
    if(angle > 359) {
        var counter = Math.floor(angle / 360);
        angle = angle - (360 * counter);
    }
    return this.convertToOrientation(angle);
}

module.exports = Compass;