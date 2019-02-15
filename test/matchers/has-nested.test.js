"use strict";

const { assert } = require("@sinonjs/referee");
const samsam = require("@sinonjs/samsam");

const hasNested = require("./has-nested");

describe("hasNested", function() {
    it("should be a matcher function", function() {
        assert.isTrue(samsam.match.isMatcher(hasNested("foo", "bar")));
    });
});
