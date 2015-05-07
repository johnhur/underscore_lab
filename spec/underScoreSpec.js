var _ = require("../underscoreTDD.js");
//describe
describe('average', function() {

it('add all numbers within the inputed array, and return the average', function() {
expect(_.average([1,2,3,4,5])).toEqual(3);
expect(_.average([5,6,7,8,9])).toEqual(7);
});
});

// describe('contains', function() {

// it('searches an inputed array for any number chosen', function() {
// 	expect(_.contains([1,2,3,4,5], 1)).toEqual(true);
// 	//expect(_.contains([5,6,7,8,9], 20)).toEqual("undefined");
// })
// });

describe('first', function() {

it('returns the first value in an inputted array', function() {
	expect(_.first([1,2,3,4,5])).toEqual(1);
})
});

describe('last', function() {

it('returns the last value in an inputted array', function() {
	expect(_.last([1,2,3,4,5])).toEqual(5);
})
});

describe('max', function() {

it('returns the max value in an inputted array', function() {
	expect(_.max([1,2,3,4,5])).toEqual(5);
})
});

describe('min', function() {

it('returns the min value in an inputted array', function() {
	expect(_.min([1,2,3,4,5])).toEqual(1);
})
});

describe('compact', function() {

it('returns the array without undefined values', function() {
	expect(_.compact([1,2,undefined,4,undefined])).toEqual([1,2,4]);
})
});


describe("the map function", function() {
it('maps a function to a new array', function() {
	expect(_.map([1,2,3], function(x){
		return x * 2; 
	})).toEqual([2,4,6]);
	expect(_.cap(["z","b","c"], function(string) {
		return string.toUpperCase();
	})).toEqual(["Z", "B", "C"]);	
	})

it("handles invalid arguments", function() {
	expect(_.map([1,2,3])).toEqual("you need to pass in a new function")
	})
});
