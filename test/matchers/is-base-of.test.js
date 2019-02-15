"use strict";

const { assert } = require("@sinonjs/referee");
const samsam = require("@sinonjs/samsam");

const isBaseOf = require("./is-base-of");

describe("isBaseOf", function() {
    it("should be a matcher function", function() {
        assert.isTrue(samsam.match.isMatcher(isBaseOf(4, 2)));
    });
});
