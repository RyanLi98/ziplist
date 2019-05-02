describe('ZipList', function () {
    const list1 = ['a', 'b', 'c'];
    const list2 = [1, 2, 3];
    const res = ['a', 1, 'b', 2, 'c', 3];
    describe('zipList()', function () {
        it('should return a single array with six elements', function () {
            chai.expect(zipList(list1, list2)).to.have.length(res.length);
        });
        it('should deep equal the passed six elements array', function () {
            chai.expect(zipList(list1, list2)).to.deep.equal(res);
        });
    });
    describe('zipListTheSimplyWay()', function () {
        it('should return a single array with six elements', function () {
            chai.expect(zipListTheSimpleWay(list1, list2)).to.have.length(res.length);
        });
        it('should deep equal the passed six elements array', function () {
            chai.expect(zipListTheSimpleWay(list1, list2)).to.deep.equal(res);
        });
    });
});
