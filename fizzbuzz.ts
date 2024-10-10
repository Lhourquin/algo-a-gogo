"use strict";
//first solution
function fizzBuzz1(n: number): string[] {
    let number: number = 1;
    const arr: string[] = [];
    while (number != n + 1) {
        const divide_by_3: boolean = number % 3 == 0;
        const divide_by_5: boolean = number % 5 == 0;
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
}
//second solution with recursion
function fizzBuzz2(n: number): string[] {
    let arr: string[] = [];
    const newArr: string[] = [];
    if (n == 1) {
        arr.push("1");
        return arr;
    }

    //while is not fizz or buzz or fizz buzz, push number, and call recursively function 
    if (n % 3 !== 0 && n % 5 !== 0) {
        newArr.push(String(n));
        const result = fizzBuzz2(n - 1);
        arr = result.concat(newArr);
    } else if (n % 3 == 0 && n % 5 == 0) {
        newArr.push("FizzBuzz");
        const result = fizzBuzz2(n - 1);
        arr = result.concat(newArr);
    } else if (n % 3 == 0) {
        newArr.push("Fizz");
        const result = fizzBuzz2(n - 1);
        arr = result.concat(newArr);
    } else {
        newArr.push("Buzz");
        const result = fizzBuzz2(n - 1);
        arr = result.concat(newArr);
    }

    return arr;
}

function fizzBuzz3(n: number): string[] {
    const arr: string[] = [];
    for (let i = 1; i <= n; i++) {
        const divide_by_3: boolean = i % 3 == 0;
        const divide_by_5: boolean = i % 5 == 0;
        if (divide_by_5 && divide_by_3) arr.push("FizzBuzz")
        else if (divide_by_3) arr.push("Fizz")
        else if (divide_by_5) arr.push("Buzz")
        else arr.push(String(i))
    }
    return arr;
}
console.table(fizzBuzz3(15));

