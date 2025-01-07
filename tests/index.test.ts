//Think about edge cases

const Hello = require('../src/index');

test('Returns New Arr', () => {
  expect(Hello()).toBe([1, 2, "FizzBuzz", 4, "FizzBuzz", "FizzBuzz", 7, 8, "FizzBuzz", "FizzBuzz"]);
});