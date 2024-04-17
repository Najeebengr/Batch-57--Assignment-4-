"use strict";
// Q.1: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello, World!";
console.log(greeting);
// Q.2:  Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 50;
let num2 = 25;
// sum
console.log("Sum of " + num1 + " & " + num2 + " is: " + (num1 + num2));
// difference
console.log("Difference of " + num1 + " & " + num2 + " is: " + (num1 - num2));
// product
console.log("Product of " + num1 + " & " + num2 + " is: " + (num1 * num2));
// quotient
console.log("Quotient of " + num1 + " & " + num2 + " is: " + (num1 / num2));
// Q.3: Swap the values of two variables without using a third variable.
let a = 1;
let b = 2;
// Add the values of a and b and assign it to a
a = a + b;
// Subtract the original value of b from the new value of a and assign it to b
b = a - b;
// Subtract the original value of b from the new value of a and assign it to a
a = a - b;
console.log("Value of a: " + a + " & Value of b: " + b);
// Q.4:  This applies to TypeScript. Create a string variable and try changing its type.
//let message: string = 20;
// error: error TS2322: Type 'number' is not assignable to type 'string'.
// Q.5:  Use the modulus operator to find the remainder of two numbers.
let number1 = 25;
let number2 = 6;
console.log("Mod of " + number1 + " & " + number2 + " : " + (number1 % number2));
// Q.6:   Increment a variable's value by 1 using two different methods.
let counter = 0;
// method 1
counter = counter + 1;
// method 2
counter++;
console.log("Counter values is: " + counter);
//Q.7:  Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1 = true, b1 = false, c1 = true;
// Logical AND operation
let expression1 = a1 && b1; // Result will be false
// Logical OR operation
let expression2 = a1 || b1; // Result will be true
// Logical NOT operation
let expression3 = !a1; // Result will be false
console.log("Expression1: " + expression1 + " , Expression2: " + expression2 + " ,Expression3: " + expression3);
// Q.8: Show examples of using compound assignment operators.
let num = 10;
// Using += to add a value to num
num += 5; // Equivalent to: num = num + 5
console.log("After +=:", num); // Output: 15
// Using -= to subtract a value from num
num -= 3; // Equivalent to: num = num - 3
console.log("After -=", num); // Output: 12
// Using *= to multiply num by a value
num *= 2; // Equivalent to: num = num * 2
console.log("After *=", num); // Output: 24
// Using /= to divide num by a value
num /= 4; // Equivalent to: num = num / 4
console.log("After /=", num); // Output: 6
//Q.9: Write a program to check if a number is even or odd.
let value = 7; // You can assign any number to 'num'
// Check if the number is even or odd
if (value % 2 === 0) {
    console.log(value + " is even.");
}
else {
    console.log(value + " is odd.");
}
//Q.10:  Check if a person is eligible to vote.
let age = 20; // You can assign any age to 'age'
// Check if the age is 18 or older
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote yet.");
}
//Q.11:  Assign a grade based on a numerical score.
let score = 85; // You can assign any numerical score to 'score'
// Assign grades based on the score
let grade;
if (score >= 90) {
    grade = 'A';
}
else if (score >= 80) {
    grade = 'B';
}
else if (score >= 70) {
    grade = 'C';
}
else if (score >= 60) {
    grade = 'D';
}
else {
    grade = 'F';
}
// Print the grade
console.log("Your grade is:", grade);
//Q.12: Find the maximum of three numbers.
let x = 10; // Assign any value to x
let y = 25; // Assign any value to y
let z = 15; // Assign any value to z
// Determine the maximum among x, y, and z
let max;
if (x >= y && x >= z) {
    max = x;
}
else if (y >= x && y >= z) {
    max = y;
}
else {
    max = z;
}
// Print the maximum value
console.log("The maximum of", x + ",", y + ", and", z + " is:", max);
//Q.13: Check if a given year is a leap year.
let year = 2024; // You can assign any year to 'year'
// Check if the year is a leap year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}
//Q.14: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 77; // You can assign any temperature in Fahrenheit to 'fahrenheit'
// Convert Fahrenheit to Celsius
let celsius = (5 / 9) * (fahrenheit - 32);
// Print the result
console.log(fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.");
//Q.15: Check if a number is positive, negative, or zero.
let number = -5; // You can assign any number to 'number'
// Determine the sign of the number
if (number > 0) {
    console.log(number + " is positive.");
}
else if (number < 0) {
    console.log(number + " is negative.");
}
else {
    console.log(number + " is zero.");
}
//Q.16: Write a program that prints the multiplication table of a given number up to 10.
let numberValue = 7; // You can assign any number for which you want to print the multiplication table
console.log("Multiplication table for", numberValue + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numberValue + " x " + i + " = " + (numberValue * i));
}
