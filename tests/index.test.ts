//Think about edge cases

const Hello = require('../src/index');

test('Returns New Arr', () => {
  const arr =  [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
  expect(Hello()).toStrictEqual(arr);
});