"use strict";

const { assert } = require("@sinonjs/referee");
const hasNested = require("./matchers/has-nested");

describe("hasNested", function() {
    it("should match nested propery", function() {
        const matcher = hasNested("foo.bar", "Hello World");
        assert.isTrue(matcher.test({ foo: { bar: "Hello World" } }));
        assert.isFalse(matcher.test({ foo: { baz: "Hello World" } }));
    });
});
