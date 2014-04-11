describe('get scroll offset', function() {
    it('should return a number', function() {
        expect(typeof getScrollOffset()).toEqual('number');
    });

    it('should return "North"', function() {
        expect(convertToOrientation()).toEqual('North');
    })

});


function getScrollOffset() {
    return 1;
}

function convertToOrientation() {
    return 'North';
}
