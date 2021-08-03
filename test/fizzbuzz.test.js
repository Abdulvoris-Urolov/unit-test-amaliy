const fb = require('../FizzBuzz');

describe('fizzbuzz', () => {
    it('should throw an error if input is not a number ', ()=>{
        expect(() =>{fb.fizzbuzz('asd')}).toThrow();
        expect(() =>{fb.fizzbuzz(null)}).toThrow();
        expect(() =>{fb.fizzbuzz(undefined)}).toThrow();
    });

    it('should return Fizz if input only divisible by 3', () => {
        const number3 = fb.fizzbuzz(3);
        expect(number3).toBe("Fizz");
    });

    it('should return Buzz if input only divisible by 5', () => {
        const number5 = fb.fizzbuzz(5);
        expect(number5).toBe("Buzz");
    });

    it('should return FizzBuzzFizzBuzz if input only divisible by 5 and 3', () => {
        const number5And3 = fb.fizzbuzz(15);
        expect(number5And3).toBe("FizzBuzz");
    });

    it('should return input', () => {
        const num = fb.fizzbuzz(13);
        expect(num).toBe(13);
    });
});
