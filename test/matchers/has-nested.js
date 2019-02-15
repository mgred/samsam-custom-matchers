"use strict";

const { createMatcher, deepEqual } = require("@sinonjs/samsam");
const get = require("lodash/get");

module.exports = function(property, value) {
    return createMatcher(function(actual) {
        const propertyValue = get(actual, property);

        if (propertyValue) {
            return deepEqual(propertyValue, value);
        }

        return false;
    }, `hasNested('${property}')`);
};
