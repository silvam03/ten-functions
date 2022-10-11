"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// 1.Define a function named isTrue that takes in any input and returns     true if the input provided is exactly equal to true in value and       data type.
function isTrue(x) {
    return x === true;
}
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(23));
console.log(isTrue("string"));

// 2. Define a function named isFalse that takes in a value and returns     a true if and only if the provided input is equal to false in both     type and value.
function isFalse(x) {
    if (x !== true)
    return x = false;
}
console.log(isFalse(false));
console.log(isFalse(true));
console.log(isFalse(undefined));
console.log(isFalse(null));
console.log(isFalse(54));
console.log(isFalse("string"));

