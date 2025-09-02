console.log("Hello World"); // ! This is the print statement of Javascript

// * console.log's will go to the next line and then print their statements

// ! Number Data Type

// * The number data type can store all the types of numbers like +,- & floating numbers

// * This data type can store all the things, so there is no other data types like double and float (as they are in C)

console.log(40+15, 2/5, 8*2, 2-5, 4%2, 3 ** 2); // * It prints: 55 0.4 16 -3 0 9

// * PEMDAS - Parenthesis Exponent Multiplication Division Addition Subtraction (Highest Precedence to the Left and Lowest Precedence to the Right)

// * That is the rule followed by Javascript when doing numerical operations

// ! NaN - Not a Number

// * It's the value when concepts like infinity comes into play

// * It is still considered as part of the Number data type

// * Any operations with NaN will return NaN

console.log(0/0, 1 + NaN); // * These operations return the value NaN

// ! Variables

// * A storage box were we can store, update & reuse the values

// ? Basic Syntax: let variablename = value;

let variable = 1;

variable+1; // * This is a valid statement but it does not update variable

variable += 1; // * This updates the variable named variable (There also exists -=, *=, /=)

let var2 = variable + 1;

console.log(variable);

console.log(var2); // * I stored the value of variable + 1 in var2

// ! Pre Increment Operator: ++i/--i 

// * The above statement acts like += as it changes the value of the code right then and there (Adding/Subtracting by 1)

// ! Post Increment Operator: i++/i--

// * The above statement doesn't change the value when this statement is reached !!!but!!! when the variable is again accesed, the value is increased/decreaded by 1 

// ! Const

// * Works like let but you can't change the value when you assigned it the first time

// ! DO NOT CHANGE THE VALUE OF CONST

const constantvalueexample = 5;

// ? Const will useful when talking about Arrays and Objects

// ! Var

// * The father of let and const

// * It still works in latest javascript while being this old

// * There is one thing about var, it can use the Hoisting thing of Functions in Javascript

var1 = 5;

let va2 = var1 + 5; 

var var1; // * It is understood by JS that this line should be above the line 71 implicitly (This is known as Hoisting)

console.log('It won\'t return an error, it will give the answer as',va2); // 10

// ! Booleans

// * They have only 2 values: true or false (They are lowercased)

let booleanexample = true;

let booleanexample2 = false;

// ! Dynamic Type Casting

// * JS is similar to python in the way that a variable can can store any type of data

let dtceg = 1; // * Number Data Type

dtceg = false; // * Boolean Data Type

dtceg = 'Hello'; // * String Data Type

// ! Rules for making Identifiers

// * No spaces

// * Numbers can't be the first character

// * Case-Sensitive (a=5 and A=5 are different variables all together)

// * _ can be the first character of a variable

// * All unicode characters except whitespace can be used as characters

// ! Practises for writing Identifiers

// * (IMP and most widely used) Camel-Case: Each new word in the letter must be capitalized except the letter of the first word

let anExampleForCamelCase = 5;

// * Snake-Case: Each new word is seperated by _

let an_example_For_snake_case = 5;

// ! Strings

// * Primitive Data Type in JS

// * Anything in quotes("" or '') is known as a string(You can have empty strings too, just "" or '')

// * Don't do "' or '", these things will cause an error

let stringexample = "Hello & - __ - & 2522";

// * We can put '' in "" and vice versa

let anotherstrexamp = "I said, 'Hello, is it me your looking for?'"

// * The indexing of string in JS is the same as in Python, where the index starts from 0

console.log("The character at the index 3(4th character) of stringexample is", stringexample[3]);

console.log("If we try to access an out of bounds index, we get", stringexample[99]); // undefined

// * We can get the total no. of characters in the string (the length of the string) from using the .length method

console.log("The length of stringexample is", stringexample.length);

// * We can also concatenate 2 strings using + operator

// * Concatenation depends on the order of the strings placed before and after the +

// * If 1 string is placed before, the other string will be added directly after the 1st string's last character 

console.log("The concatenation of stringexample and anotherstrexamp is", stringexample+anotherstrexamp);

// * We can concatenate a Number with a String (JS just converts the Number into a String data type)

console.log("1 + 'hello' is",1 + 'hello');

console.log("'hello' + 1 is",'hello' + 1);