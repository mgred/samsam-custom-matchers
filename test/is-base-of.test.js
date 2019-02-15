"use strict";

const { assert } = require("@sinonjs/referee");
const isBaseOf = require("./matchers/is-base-of");

describe("isBaseOf", function() {
    it("should match the right base", function() {
        const matcher = isBaseOf(9, 2);
        assert.isFalse(matcher.test(1));
        assert.isFalse(matcher.test(2));
        assert.isTrue(matcher.test(3));
    });
});
