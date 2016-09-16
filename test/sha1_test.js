describe("sha1", function () {
    let sha1 = require("sha1");
    let assert = require("assert");

    it("should produce correct sha1 of a string", function () { 
        let correctSha1 = "40bd001563085fc35165329ea1ff5c5ecbdbbeef";
        assert(correctSha1 === sha1("123"));
    });

    it("should produce constant sha1 value when it is called several times", function () {
        let correctSha1 = "40bd001563085fc35165329ea1ff5c5ecbdbbeef";
        assert(correctSha1 === sha1("123"));
        assert(correctSha1 === sha1("123"));
        assert(correctSha1 === sha1("123"));
    });
});
