var Compass = require("./compass");


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

        it('should return 90° if scroll Offset is 900', function() {
            expect(this.compass.getScrollOffset(900)).toEqual(90);
        });
        it('should return 180° if scroll Offset is 1800', function() {
            expect(this.compass.getScrollOffset(1800)).toEqual(180);
        });
        it('should return 270° if scroll Offset is 2700', function() {
            expect(this.compass.getScrollOffset(2700)).toEqual(270);
        });
    });


    describe('convert angle to orientation', function() {

        it('should return "North"', function() {
            expect(this.compass.convertToOrientation(0)).toEqual('North');
        });
        it('should return "East"', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(900))).toEqual('East');
        });
        it('should return "South"', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(1800))).toEqual('South');
        });
        it('should return "West"', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(2700))).toEqual('West');
        });
        it('should return 111° if scrollOffset is 1110', function() {
            expect(this.compass.convertToOrientation(this.compass.getScrollOffset(1110))).toEqual('111°');
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

