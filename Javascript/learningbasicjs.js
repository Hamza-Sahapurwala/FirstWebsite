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