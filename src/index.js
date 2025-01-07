//Write your function here
function FizzBuzz() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //Init Array 1...10
    const Fizz = "Fizz";
    const Buzz = "Buzz";
    return arr.map((element, index) => {
        if (element % 3 === 0 || element % 5 === 0) {
            return arr[index] = Fizz+Buzz;
        }
    })
}

console.log(FizzBuzz())

module.exports = FizzBuzz;