var expect = require("chai").expect;
var validator = require("./validator");

describe("validator", function () {
    describe("variable()", function () {
        it("recognises q", function () {
            var input = " q ";

            expect(validator.variable(input)).to.be.true;
        });

        it("doesn't recognise e", function () {
            var input = " e ";

            expect(validator.variable(input)).to.be.false;
        });
    });

    describe("expression()", function () {
        it("recognises q", function () {
            var input = " q ";

            expect(validator.expression(input)).to.be.true;
        });

        it("recognises ¬(q∧p)", function () {
            var input = "¬(q∧p)";

            expect(validator.expression(input)).to.be.true;
        });

        it("recognises ¬((q∧¬(p∧¬p)))", function () {
            var input = "¬((q∧¬(p∧¬p)))";

            expect(validator.expression(input)).to.be.true;
        });

        it("doesn't recognise ¬((q∧¬(p∧¬()p)))", function () {
            var input = "¬((q∧¬(p∧¬()p)))";

            expect(validator.expression(input)).to.be.false;
        });

        it("recognises ¬q", function () {
            var input = "¬q";

            expect(validator.not(input)).to.be.true;
        });

        it("recognises (¬r)", function () {
            var input = "(¬r)";

            expect(validator.brackets(input)).to.be.true;
        });

        it("returns false to ¬r", function () {
            var input = "¬r";

            expect(validator.brackets(input)).to.be.false;
        });

        it("returns false to (e)", function () {
            var input ="(e)";

            expect(validator.brackets(input)).to.be.false;
        });

        it("recognises ¬((q∧¬(p∨¬p)))", function () {
            var input = "¬((q∧¬(p∨¬p)))";

            expect(validator.expression(input)).to.be.true;
        });
    });
});
