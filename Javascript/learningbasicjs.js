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

// ! String Methods

// ! .length

// * Returns the length of the string in number data type , It's a property of string

console.log("Length of string 'Hello' is", "Hello".length);

// ! .toUpperCase() & .toLowerCase()

// * Both are methods

// * Both return a new string (Also known as Non-Destructive Method)

let upper = "loL"

upper=upper.toUpperCase(); // * I am just giving the new string back to the old variable

let lower = "LOl"

lower=lower.toLowerCase();

console.log(".toUpperCase():",upper,"and .toLowerCase():", lower);

// ! .trim()

// * It's a method

// * Removes any(and only) whitespaces at the beginning and the end of the string 

// * Non-Destructive method (Returns a new string, doesn't affect the original string)

let trim = "       this is core data             ";

console.log("The trimmed data is:", trim.trim());

// ! Chaining Methods Together

// * We can chain together different methods so that we can use lesser no. of line codes

let chain = "            Hello             ";

console.log("Chaining .trim() and .toUpperCase():", chain.trim().toUpperCase()); // * Output: HELLO (with spaces trimmed)

// ! String Methods with Arguments

// ! .indexOf(substring that you want to search)

// * Returns index of substring if found in original string, else -1

// * For words, it returns the index of the first letter of the word encountered in the string, else -1

// * It's going to give us the index of the first-time occuring substring 

let indexing = 'catdogboi';

console.log("Index of dog in the string is",indexing.indexOf('dog'),"and index of z in string is",indexing.indexOf('z'));

// ! .slice(starting index, ending index + 1)

// * Returns the sliced string from the given inputs

// * 1 input means it will start the slicing from that index and slice till end of the string

let slicing = "abcdefghijklmnopqrstuvwxyz";

console.log("Getting values from index 1 to 4:",slicing.slice(1,5));

console.log("Getting values from index 7:",slicing.slice(7));

// * If we -ve indexes, it will do length of string - the given index, so it will slice from the end of the string

console.log("Getting values from -5 index:",slicing.slice(-5)); // * Gets us last 5 letters

// ! .replace(original substring, new substring)

// * Returns a string with the replaced substring

// * Only replaces the first occurence of the original substring

let replacing = "haha that's funny"

console.log("Replacing haha with lol:",replacing.replace('haha', 'lol'));

// ! .repeat(no. of times you want to repeat the string)

// * Returns a string which contains the repeated values of the original string

console.log("Repeating the word lol 10 times:","lol".repeat(10));

// ! String Template Literals

// * They are like the format strings in python

// * We know numbers get converted to strings when we concatenate both of them

// * This is an easier way of concatenation

// * We use `(back-ticks), $ and {}

let stl = `x = ${3 + 5}`; // * It evaluates the expressions inside the {} and then prints it out

let fakestl = 'x = ${3 + 5}'; // * or "x = ${3 + 5}"

console.log("Using STL, we get",stl,'while without using it, we get:',fakestl);

let demoquan = 5;

let demoprice = 5;

let demostlexample = 'Apple';

console.log(`You bought ${demoquan} ${demostlexample}(s). Total Amount = ${demoquan * demoprice}.`); 

// * You bought 5 Apple(s). Total Amount = 25.

// ! null and undefined

// * Both are primitive data types in JS

// * null = Intentional absense of value. Therefore, this must be assigned to a variable

// * undefined = When variables are not assigned anything, they are undefined

let nullexample = null;

let undefinedexample;

console.log('The null example will give',null,'and undefined example will give',undefinedexample); // * null & undefined

// ! Math Object

// * It's a built-in Object in JS where we can use it's properties and methods

// * Can be used by: Math.property/(method())

let piexample = Math.PI;

let floor = Math.floor(22.98); // Removes the decimals

let ceil = Math.ceil(34.0001); // Rounds up everything to 1 value higher only if they have decimal points

let round = Math.round(4.5); // Rounds up in the mathematical sense

let power = Math.pow(2, 5); // It gives us answer of 2 ** 5 which is 32

let abs = Math.abs(-453.07);

console.log(`Value of PI: ${piexample}\nValue of floor: ${floor}\nValue of ceil: ${ceil}\nValue of round: ${round}\nValue of power: ${power}\nValue of abs: ${abs}`);

// ! Math.random()

// * Returns a random decimal no. between 0 and 0.99999.... every time it is called

// * We can multiply it by the range we want, add 1(only if we don't want zero and the range no. as an output!!!) and then floor and get random no. in the range we desire

let randomexample1 = Math.floor(Math.random() * 10); // * Will give us random no. from 0 to 9

let randomexample2 = Math.floor(Math.random() * 10) + 1; // * Will give us random no. from 1 to 10

// * If we want a range inbetween 2 no., we can do this:

let randomexample3 = Math.floor(Math.random() * 5) + 10; // * Will give us random no. from 10 to 15

console.log(`Example 1: ${randomexample1}\nExample 2: ${randomexample2}\nExample 3: ${randomexample3}`);

// ! Comparison Operators

// * >,<,<=,>=,!=,==,===,!==,>==,<== and so on

// * They return boolean values: true and false

console.log("Is 1>3?:",1>3); // .* false

console.log("Is -1>=-1?:", -1>=-1);

console.log("Is A > a?:", "A">"a"); // * false because unicode value of A is less than unicode value of a

// * == checks for equality of value and not type!!!!

// * === checks for both equality of value and type!!!

console.log("Is '40'==40?:", "40"==40); // * Cause both the values are converted into strings and then compared

// * 0 and '' are considered the same, 0 and false are considered the same, null and undefined are considered the same in view of ==

console.log("Is '40'===40?:", "40"===40); // * As === is used, they are not considred the same type, therefore false

// ? Always use === when comparing types and values!!!!

// ! promt()

// * Runs in console or when connected to html file

// let pro = prompt("Enter a no.");

// * Returns a string of the user input 

// ! Converting String to Number

let strex = "12aaa1abb2"; // * returns the first set of no. it finds (Here only 12 is the output as the other no. are inbetween the characters)

// * If the first character is not a no., it will return NaN

let nex = parseInt(strex);

console.log('Now its a no.:',nex); // * 12