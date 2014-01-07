describe("hello heatband test", function() {

    var heatband;
    beforeEach(function() {
        heatband = new Heatband();
    });

    it("returns Hello", function() {
        chai.expect(heatband.hello()).to.equals("Hello heatband.js");
    });
});
