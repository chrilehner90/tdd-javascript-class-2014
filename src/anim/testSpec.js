describe('get scroll offset', function() {
    it('should return a number', function() {
        expect(typeof getScrollOffset()).toEqual('number');
    });

});



function getScrollOffset() {
    return 1;
}