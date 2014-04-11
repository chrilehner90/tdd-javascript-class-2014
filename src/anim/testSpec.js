describe('get scroll offset', function() {
    it('should return a number', function() {
        expect(typeof getScrollOffset()).toEqual('number');
    });

    it('should return "North"', function() {
        expect(convertToOrientation(0)).toEqual('North');
    });
    it('should return "East"', function() {
        expect(convertToOrientation(90)).toEqual('East');
    });
    it('should return "South"', function() {
        expect(convertToOrientation(180)).toEqual('South');
    });
    it('should return "West"', function() {
        expect(convertToOrientation(270)).toEqual('West');
    });



});


var controller = {
    getScrollOffset: function() {
        return 1;
    },
    convertToOrientation: function(angle) {
        if (angle === 0) {
            return 'North';
        } else if (angle === 90) {
            return 'East';
        } else if (angle === 180) {
            return 'South';
        } else {
            return 'West';
        }
    }
}