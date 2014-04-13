describe('Compass test suite', function() {
    beforeEach(function() {
       this.compass = new Compass();

    });

    describe('get scroll offset', function() {

        it('should return a number', function() {
            expect(typeof this.compass.getScrollOffset()).toEqual('number');
        });
    });


    describe('convert angle to orientation', function() {

        it('should return "North"', function() {
            expect(this.compass.convertToOrientation(0)).toEqual('North');
        });
        it('should return "East"', function() {
            expect(this.compass.convertToOrientation(90)).toEqual('East');
        });
        it('should return "South"', function() {
            expect(this.compass.convertToOrientation(180)).toEqual('South');
        });
        it('should return "West"', function() {
            expect(this.compass.convertToOrientation(270)).toEqual('West');
        });
        it('should return 111 if Degree is 111', function() {
            expect(this.compass.convertToOrientation(111)).toEqual('111°');
        });

    });

    describe('spy on convertToOrientation', function() {
        beforeEach(function() {
            spyOn(this.compass, "convertToOrientation");
        });

        it('should call function convertToOrientation', function() {
            expect(this.compass.convertToOrientation).toHaveBeenCalled();
        });
    });

    describe('reset degrees after overflow (angle > 359 deg)', function() {

        it('should return 0 if Degree is over 359', function() {
            expect(this.compass.resetDegrees(360)).toEqual("North");
        });

        it('should return 0 if Degree is over 359', function() {
            expect(this.compass.resetDegrees(1000)).toEqual("280°");
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

Compass.prototype.getScrollOffset = function() {
    return 1;
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

Compass.prototype.resetDegrees = function(angle) {
    if(angle > 359) {
        var counter = Math.floor(angle / 360);
        angle = angle - (360 * counter);
    }
    return this.convertToOrientation(angle);
}





