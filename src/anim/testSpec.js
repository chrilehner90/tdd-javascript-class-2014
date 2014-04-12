var jQuery = require('jquery');

describe('get scroll offset', function() {

    it('should return a number', function() {
        expect(typeof Controller.prototype.getScrollOffset()).toEqual('number');
    });
});


describe('convert angle to orientation', function() {

    it('should return "North"', function() {
        expect(Controller.prototype.convertToOrientation(0)).toEqual('North');
    });
    it('should return "East"', function() {
        expect(Controller.prototype.convertToOrientation(90)).toEqual('East');
    });
    it('should return "South"', function() {
        expect(Controller.prototype.convertToOrientation(180)).toEqual('South');
    });
    it('should return "West"', function() {
        expect(Controller.prototype.convertToOrientation(270)).toEqual('West');
    });
    it('should return 111 if Degree is 111', function() {
        expect(Controller.prototype.convertToOrientation(111)).toEqual('111°');
    });
});

describe('reset degrees after overflow (angle > 359 deg)', function() {

    it('should return 0 if Degree is over 359', function() {
        expect(Controller.prototype.resetDegrees(360)).toEqual("North");
    });

    it('should return 0 if Degree is over 359', function() {
        expect(Controller.prototype.resetDegrees(1000)).toEqual("280°");
    });
});


var Compass = function() {

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

Compass.prototype.getScrollOffset = function() {
    return 1;
}

Compass.prototype.convertToOrientation = function(angle) {
    if (this.angleToOrientationMap[angle] !== undefined) {
        return this.angleToOrientationMap[angle];
    } else {
        return angle + '°';
    }
}

Compass.prototype.resetDegrees = function(angle) {
    if(angle > 359) {
        var counter = Math.floor(angle / 360);
        angle = angle - (360 * counter);
    }
    return this.convertToOrientation(angle);
}

