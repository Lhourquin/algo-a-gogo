"use strict";
//scope
/*
	area of existance of the variable, we cannot acces to a variable if he didn't declared before
*/
//console.log(a);//return an error
console.log(c);//return undefined, because is declared with the keyword var, this is called hoisting
test();//also here, even the function is declared later on the code, the hoisting allows to call the function because the hoisting that give an illusion to the interpretter the function is declared before
b = 5;
console.log({b})
/*
	What is Hoisting ????
	Hoisting is a behavior/process where by the interpreter apear to move the declaration of:
		* functions
		* variables
		* classes
		* imports 
	to the top of thier scope, prior to to execution of the code.
	That mean, this keyword tell to the interpretor "Even I'm not of the top of the file, take me in first when I'm called"
	So, we can call a function or other that belongs to the keyword mentioned above, the interpreter hoisting it "to the top"
	and behave like it declared to the top.
	
*/
let a = 5;//global variable
var b = 10;//global variable
console.log(a);//return 5

function test(){
	let a = 4;//declare and initialize new local variable, that temporary erased the global variable to store another value
	console.log(a);//return 4 and not 5, because we have initialize a local variable a in this function.
	b = a;
	console.log({b});//return 10
}
test();
console.log(a);//return 5, because now is outside the function, that mean is always the global variable avalaible in all file, inside and outside function.


var c = 12;
function makeAdder(x) {
	console.log("first call to initialize x.");
	console.log({x})
  return function (y) {
	console.log("y is equal: ",y);
	console.log("Now x is initialize to: ", x, " and we add ", x, " to ", y);
	console.log(x + y);
    return x + y;
  };
}


//Closure

//initialization

//first call initalize x, the function return capture the x variable and make it constant in memory, that will be used every time the function is called, the function was created a closure.
const add5 = makeAdder(5);//initialize 5 to be persistant, now the function return can use it for each call we make.
const add10 = makeAdder(10);

//x already initialize, now  when we call the function, x will be used to add number (like 5 for add5 and 10 for add10) to the number we add in argument of these funtion, this arg is used on the function (y) because the x variable do not change and stay in memory, we can use it without re initialization of it, so for each call of function, x is the only variable will not change.
add5(45);//y initialize to 45, result of addition is 50
add10(50);//y initialize to 50, result of addition is 60

add5(45);//the result should be 95 ? ( noting change after the first result of addition, always 50)
add10(50);//the result should be 110 ?( noting change after the first result of addition, always 60)

add5(60);//the result should be 65
add10(100);//the result should be 110
function counter(str){
	let i = 0;
	return function(){
		console.log(str);
		console.log(i);
		i++;
	}
}

const add_one = counter("from add one");
const add_one_two = counter("from add one two");
