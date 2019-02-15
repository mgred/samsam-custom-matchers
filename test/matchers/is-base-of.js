"use strict";

const { createMatcher } = require("@sinonjs/samsam");

module.exports = function(value, exponent) {
    return createMatcher(function(actual) {
        return Math.pow(value, 1 / exponent) === actual;
    }, `is base of ${value}^${exponent}`);
};
