"use strict";
/*
//first solution
function fizzBuzz(n: number): string[] {
    let number: number = 1;
    const arr: string[] = [];
    while (number != n + 1) {
        const divide_by_3: boolean = number % 3 == 0;
        const divide_by_5: boolean = number % 5 == 0;
        console.log(number % 3 == 0);
        let str: string = String(number);
        if (divide_by_3) {
            str = "Fizz";
            if (divide_by_5) {
                str = "FizzBuzz";
            }
        }
        if (divide_by_5) {
            str = "Buzz";
            if (divide_by_3) {
                str = "FizzBuzz";
            }
        }
        arr.push(str);
        number++;
    }
    return arr;
};
*/
//second solution with recursion
function fizzBuzz(n: number): string[] {
    //let number: number = 1;
    let arr: string[] = [];
    let str: string = String(n);
    const newArr: string[] = [];
    if (n == 1) {
        arr.push(str);
        return arr;
    }

    //while is not fizz or buzz or fizz buzz, push number, and call recursively function 
    if (n % 3 !== 0 && n % 5 !== 0) {
        newArr.push(str);
        const result = fizzBuzz(n - 1);
        arr = result.concat(newArr);
    }

    if (n % 3 == 0 && n % 5 == 0) {
        newArr.push("FizzBuzz");
        const result = fizzBuzz(n - 1);
        arr = result.concat(newArr);
    }

    if (n % 3 == 0 && n % 5 != 0) {
        newArr.push("Fizz");
        const result = fizzBuzz(n - 1);
        arr = result.concat(newArr);
    }

    if (n % 5 == 0 && n % 3 != 0) {
        newArr.push("Buzz");
        const result = fizzBuzz(n - 1);
        arr = result.concat(newArr);
    }

    return arr;
}

console.table(fizzBuzz(15));

