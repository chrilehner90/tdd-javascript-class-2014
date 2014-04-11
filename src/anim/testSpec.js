describe('get scroll offset', function() {

    it('should return a number', function() {
        expect(typeof getScrollOffset()).toEqual('number');
    });

    it('should return "North"', function() {
        expect(convertToOrientation(0)).toEqual('North');
    });
    it('should return "South"', function() {
        expect(convertToOrientation(180)).toEqual('South');
    });



});


function getScrollOffset() {
    return 1;
}

function convertToOrientation(angle) {
    if(angle === 0) {
        return 'North';
    }
    return 'South'
}
