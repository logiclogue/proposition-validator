var expect = require("chai").expect;
var validator = require("./validator");

describe("validator()", function () {
    it("recognises q", function () {
        var input = " q ";

        expect(validator(input)).to.be.true;
    });

    it("doesn't recognise e", function () {
        var input = " e ";

        expect(validator(input)).to.be.false;
    });

    it("recognises q", function () {
        var input = " q ";

        expect(validator(input)).to.be.true;
    });

    it("recognises ¬(q∧p)", function () {
        var input = "¬(q∧p)";

        expect(validator(input)).to.be.true;
    });

    it("recognises ¬((q∧¬(p∧¬p)))", function () {
        var input = "¬((q∧¬(p∧¬p)))";

        expect(validator(input)).to.be.true;
    });

    it("doesn't recognise ¬((q∧¬(p∧¬()p)))", function () {
        var input = "¬((q∧¬(p∧¬()p)))";

        expect(validator(input)).to.be.false;
    });

    it("recognises ¬q", function () {
        var input = "¬q";

        expect(validator(input)).to.be.true;
    });

    it("recognises (¬r)", function () {
        var input = "(¬r)";

        expect(validator(input)).to.be.true;
    });

    it("returns true to ¬r", function () {
        var input = "¬r";

        expect(validator(input)).to.be.true;
    });

    it("returns false to (e)", function () {
        var input ="(e)";

        expect(validator(input)).to.be.false;
    });

    it("recognises ¬((q∧¬(p∨¬p)))", function () {
        var input = "¬((q∧¬(p∨¬p)))";

        expect(validator(input)).to.be.true;
    });

    it("recognises ¬((q ∧ ¬(p ⊕ ¬p)))", function () {
        var input = "¬((q ∧ ¬(p ⊕ ¬p)))";

        expect(validator(input)).to.be.true;
    });

    it("recognises p ⇒ q", function () {
        var input = "p ⇒ q";

        expect(validator(input)).to.be.true;
    });

    it("recognises p ⇔ q", function () {
        var input = "p ⇔ q";

        expect(validator(input)).to.be.true;
    });

    it("doesn't recognise ((p ⇒ q)", function () {
        var input = "((p ⇒ q)";

        expect(validator(input)).to.be.false;
    });

    it("doesn't recognise ⇒", function () {
        var input = "⇒";

        expect(validator(input)).to.be.false;
    });

    it("recognises p ∧ q ⇔ r", function () {
        var input = "p ∧ q ⇔ r";

        expect(validator(input)).to.be.true;
    });
});
