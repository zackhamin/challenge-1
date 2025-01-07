//Write your function here
function FizzBuzz() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    //Init Array 1...15
    const Fizz = "Fizz";
    const Buzz = "Buzz";

    return arr.map((element, index) => {
        const isDivThree = element % 3 === 0;
        const isDivFive = element % 5 === 0;
        if (isDivThree && isDivFive) {
            return arr[index] = Fizz+Buzz;
        } else if (isDivThree) {
            return arr[index] = Fizz;

        } else if (isDivFive) {
            return arr[index] = Buzz;

        } else return element;
    })
}

console.log(FizzBuzz())

module.exports = FizzBuzz;