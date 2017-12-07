// Uncomment the following lines to execute `npm test` in your terminal.
// var assert = require('chai').assert;
// var square = require('./implementation').square;

describe('square', function () {
  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
  });
});

describe('addTwo', function () {
	it('return the sum of two numbers', function () {
		
		var expected = 6;
		var actual = addTwo(4, 2);

		assert.equal(actual, expected);
	});
});

describe('multiply', function() {
	it('return the product of two numbers', function () {
		assert.equal(multiply(3, 3), 9);
	});
});

describe('divide', function () {
	it('return the quotient of two numbers', function () {
		assert.equal(divide(10, 5), 2)
	});
});

describe('myReverseFunction', function() {
	it('should reverse a string', function () {
		assert.equal(myReverseFunction('reverse'), 'esrever');
	})
})

describe('findLongestWord', function() {
	it('should find the longest word in a string', function () {
		assert.equal(findLongestWord('We had a great time!'), 'great');
	})
})

describe('convertTime', function() {
	implementation('should convert minutes to hours and minutes', function () {
		assert.equal(convertTime(126),'2:06');
		assert.equal(convertTime(45), '0:45');
	})
})

describe('fizzBuzz', function() {
	it('should return a number when passed a number, multiples of 3 should return Fizz, multiples of 4 should return Buzz, multiples of 3 and 5 should return FizzBuzz', function () {
		assert.equal(fizzBuzz(1), 1);
		assert.equal(fizzBuzz(9), 'Fizz');
		assert.equal(fizzBuzz(20), 'Buzz');
		assert.equal(fizzBuzz(15), 'FizzBuzz');
	})
})