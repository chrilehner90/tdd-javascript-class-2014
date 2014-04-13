describe('Compass test suite', function() {
    beforeEach(function() {
       this.compass = new Compass();

    });

    describe('get scroll offset', function() {

        it('should return a number', function() {
            expect(typeof this.compass.getScrollOffset()).toEqual('number');
        });
    });

    describe('convert scroll Offset to angle', function() {

        it('should return 90° if scroll Offset is 400', function() {
            expect(this.compass.getScrollOffset(400, 400)).toEqual(90);
        });
        it('should return 180° if scroll Offset is 800', function() {
            expect(this.compass.getScrollOffset(800, 400)).toEqual(180);
        });
        it('should return 270° if scroll Offset is 1200', function() {
            expect(this.compass.getScrollOffset(1200, 400)).toEqual(270);
        });
    });


    describe('convert angle to orientation', function() {

        it('should return "North"', function() {
            expect(this.compass.convertToOrientation(0)).toEqual('North');
        });
        it('should return "East"', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(400, 400))).toEqual('East');
        });
        it('should return "South"', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(800, 400))).toEqual('South');
        });
        it('should return "West"', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(1200, 400))).toEqual('West');
        });
        it('should return 111° if scrollOffset is 494', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(494, 400))).toEqual('111°');
        });

    });

    describe('spy on convertToOrientation', function() {
        beforeEach(function() {
            spyOn(this.compass, "convertToOrientation");
        });

        it('should call function convertToOrientation', function() {
            this.compass.setDegrees(360);
            expect(this.compass.convertToOrientation).toHaveBeenCalledWith(0);
        });
    });

    describe('set degrees after overflow (angle > 359 deg)', function() {

        it('should return 0 if Degree is over 359', function() {
            expect(this.compass.setDegrees(360)).toEqual("North");
        });

        it('should return 0 if Degree is over 359', function() {
            expect(this.compass.setDegrees(1000)).toEqual("280°");
        });
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





